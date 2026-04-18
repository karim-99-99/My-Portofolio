// ============================================================
// blogPosts.js — Karim Khamis Portfolio Blog
// ✅ GEO  ✅ LLM SEO  ✅ AEO  ✅ E-E-A-T  ✅ Schema.org
// Place at: src/data/blogPosts.js
// ============================================================

export const blogPosts = [

  // ── CLUSTER 1: React + Django ─────────────────────────────

  {
    id: "react-django-full-stack-tutorial",
    slug: "react-django-full-stack-tutorial",
    title: "How to Build a Full-Stack App with React and Django REST Framework",
    excerpt: "A complete guide to building a production-ready full-stack web application using React on the frontend and Django REST Framework on the backend — with JWT authentication, PostgreSQL, and Vercel + Render deployment.",
    category: "React + Django",
    tags: ["React", "Django", "DRF", "PostgreSQL", "JWT", "Full-Stack", "Python"],
    author: "Karim Khamis",
    date: "2026-04-10",
    readTime: "12 min read",
    featured: true,
    content: `
## Introduction

Building a full-stack web application in 2026 typically means choosing a JavaScript framework for the frontend and a backend API layer. One of the most powerful and battle-tested combinations is **React** on the frontend and **Django REST Framework (DRF)** on the backend.

I've used this stack across 30+ client projects — including Qodrateman, a full-stack e-learning platform at qodrateman.com that serves 500+ authenticated users. This guide walks you through exactly how I set it up from scratch.

## What You'll Build

By the end of this tutorial, you'll have a full-stack application with:

- A **React + Vite** frontend with Tailwind CSS
- A **Django REST Framework** backend with JWT authentication
- **PostgreSQL** as the database
- Deployed on **Vercel** (frontend) and **Render** (backend)

## Part 1: Setting Up the Django Backend

### 1. Create the Django project

\`\`\`bash
mkdir myapp && cd myapp
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers psycopg2-binary python-decouple
django-admin startproject backend .
python manage.py startapp api
\`\`\`

### 2. Configure settings.py

\`\`\`python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework_simplejwt',
    'corsheaders',
    'api',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    # ... rest of middleware
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://your-frontend.vercel.app",
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST', default='localhost'),
        'PORT': config('DB_PORT', default='5432'),
    }
}
\`\`\`

### 3. Create a model and serializer

\`\`\`python
# api/models.py
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
\`\`\`

\`\`\`python
# api/serializers.py
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'author', 'created_at']
        read_only_fields = ['author', 'created_at']
\`\`\`

### 4. Create views and URLs

\`\`\`python
# api/views.py
from rest_framework import viewsets, permissions
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
\`\`\`

\`\`\`python
# backend/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api import views

router = DefaultRouter()
router.register(r'posts', views.PostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', TokenObtainPairView.as_view()),
    path('api/token/refresh/', TokenRefreshView.as_view()),
]
\`\`\`

## Part 2: Setting Up the React Frontend

### 1. Create the Vite + React project

\`\`\`bash
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm install axios react-router-dom tailwindcss @tailwindcss/forms
npx tailwindcss init
\`\`\`

### 2. Create an Axios instance with JWT interceptors

\`\`\`javascript
// src/api/axiosInstance.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refresh = localStorage.getItem('refresh_token');
      if (refresh) {
        try {
          const res = await axios.post('/api/token/refresh/', { refresh });
          localStorage.setItem('access_token', res.data.access);
          error.config.headers.Authorization = \`Bearer \${res.data.access}\`;
          return axios(error.config);
        } catch {
          localStorage.clear();
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;
\`\`\`

### 3. Build the login component

\`\`\`jsx
// src/components/Login.jsx
import { useState } from 'react';
import api from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/token/', credentials);
      localStorage.setItem('access_token', res.data.access);
      localStorage.setItem('refresh_token', res.data.refresh);
      navigate('/dashboard');
    } catch {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-teal-400 mb-6">Sign In</h2>
        {error && <p className="text-red-400 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
          value={credentials.username}
          onChange={(e) => setCredentials({...credentials, username: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <button type="submit" className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-white rounded-lg font-semibold">
          Sign In
        </button>
      </form>
    </div>
  );
}
\`\`\`

## Part 3: Deployment

### Deploy Django to Render

1. Push your Django project to GitHub
2. Go to render.com → New Web Service → connect repo
3. Set Build Command: \`pip install -r requirements.txt && python manage.py migrate\`
4. Set Start Command: \`gunicorn backend.wsgi:application\`
5. Add environment variables: \`DB_NAME\`, \`DB_USER\`, \`DB_PASSWORD\`, \`DB_HOST\`, \`SECRET_KEY\`, \`DEBUG=False\`

### Deploy React to Vercel

1. Push your React project to GitHub
2. Go to vercel.com → Import Project → connect repo
3. Set \`VITE_API_URL\` to your Render URL
4. Deploy — Vercel auto-detects Vite config

## Common Mistakes to Avoid

**CORS errors:** Always add your Vercel URL to \`CORS_ALLOWED_ORIGINS\` in Django before deploying. Forgetting this is the #1 reason the frontend can't communicate with the backend.

**JWT token expiry:** The default SimpleJWT access token lasts 5 minutes. Always implement token refresh logic in your Axios interceptor as shown above.

**Database migrations on Render:** Render doesn't auto-run migrations. Add \`python manage.py migrate\` to your build command.

## Conclusion

The React + Django stack is one of the most production-proven combinations for full-stack development. React handles the UI with speed and flexibility, while Django handles authentication, data modeling, and API logic with minimal boilerplate.

I've shipped this stack in production across multiple client projects — including Qodrateman (qodrateman.com), which handles 500+ authenticated users with zero downtime.

**Karim Khamis** is a full-stack developer based in Cairo, Egypt. He specializes in React, Django REST Framework, PostgreSQL, and React Native. Available for freelance projects at karimkhamis.com.
    `,
  },

  {
    id: "django-rest-api-best-practices",
    slug: "django-rest-api-best-practices",
    title: "Django REST Framework Best Practices for Production APIs",
    excerpt: "Learn the DRF patterns that actually matter in production: serializer validation, custom permissions, pagination, filtering, and API versioning — with real examples from shipped projects.",
    category: "React + Django",
    tags: ["Django", "DRF", "REST API", "Python", "Backend", "Production"],
    author: "Karim Khamis",
    date: "2026-03-28",
    readTime: "10 min read",
    featured: false,
    content: `
## Introduction

Django REST Framework is one of the most mature API frameworks available for Python. But knowing how to use DRF and knowing how to build **production-grade** APIs with DRF are two different things.

After building APIs with DRF for 30+ projects — including Qodrateman's AI-powered quiz generation endpoint that handles sub-30-second response times — here are the patterns that actually matter.

## 1. Always Use Serializer-Level Validation

Most tutorials show model-level validation only. But in production, your serializers are your first line of defense.

\`\`\`python
class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=8)
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password_confirm']

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already registered.")
        return value.lower()

    def validate(self, data):
        if data['password'] != data['password_confirm']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('password_confirm')
        return User.objects.create_user(**validated_data)
\`\`\`

## 2. Custom Permissions for Role-Based Access

DRF's built-in permissions cover basic cases. For RBAC (Role-Based Access Control), write custom permissions:

\`\`\`python
# permissions.py
from rest_framework.permissions import BasePermission

class IsInstructor(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'profile') and request.user.profile.role == 'instructor'

class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in ('GET', 'HEAD', 'OPTIONS'):
            return True
        return obj.author == request.user
\`\`\`

## 3. Pagination — Always

Never return unbounded querysets. Use cursor pagination for large datasets:

\`\`\`python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.CursorPagination',
    'PAGE_SIZE': 20,
}

# Or per-view:
class PostListView(generics.ListAPIView):
    pagination_class = PageNumberPagination
    page_size = 10
\`\`\`

## 4. Filtering with django-filter

\`\`\`bash
pip install django-filter
\`\`\`

\`\`\`python
# views.py
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'level', 'is_published']
    search_fields = ['title', 'description']
    ordering_fields = ['created_at', 'price', 'enrollment_count']
    ordering = ['-created_at']
\`\`\`

## 5. API Versioning from Day One

Don't skip versioning. URL-based versioning is the most explicit:

\`\`\`python
# urls.py
urlpatterns = [
    path('api/v1/', include('api.v1.urls')),
    path('api/v2/', include('api.v2.urls')),
]
\`\`\`

\`\`\`python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_VERSIONING_CLASS': 'rest_framework.versioning.URLPathVersioning',
    'DEFAULT_VERSION': 'v1',
    'ALLOWED_VERSIONS': ['v1', 'v2'],
}
\`\`\`

## 6. Optimize Queries — select_related and prefetch_related

The most common DRF performance mistake is the N+1 query problem:

\`\`\`python
# Bad — causes N+1 queries
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()

# Good — prefetch related data
class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.select_related('instructor').prefetch_related('lessons', 'enrollments').all()
\`\`\`

## 7. Standardize Error Responses

Build a consistent error format your frontend can rely on:

\`\`\`python
# exceptions.py
from rest_framework.views import exception_handler
from rest_framework.response import Response

def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is not None:
        return Response({
            'success': False,
            'error': {
                'status_code': response.status_code,
                'message': response.data,
            }
        }, status=response.status_code)
    return response
\`\`\`

\`\`\`python
# settings.py
REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'api.exceptions.custom_exception_handler',
}
\`\`\`

## Conclusion

These seven patterns are what separate a tutorial-grade DRF API from a production-grade one. Validation at the serializer level, RBAC permissions, mandatory pagination, proper filtering, versioning from day one, query optimization, and consistent error responses — get these right and you have a solid foundation.

**Karim Khamis** builds Django REST Framework APIs for production applications. Based in Cairo, Egypt, he is available for freelance backend and full-stack projects at karimkhamis.com.
    `,
  },

  // ── CLUSTER 2: OCR / PaddleOCR / TensorFlow ──────────────

  {
    id: "build-ocr-app-tensorflow-paddleocr",
    slug: "build-ocr-app-tensorflow-paddleocr",
    title: "How I Built a Custom OCR App with TensorFlow, Keras, and PaddleOCR",
    excerpt: "A deep dive into building Letra — a cross-platform OCR mobile app that achieves 98% English accuracy on custom-trained models. Covers dataset preparation, model training, inference pipeline, and mobile deployment.",
    category: "OCR & AI",
    tags: ["OCR", "TensorFlow", "Keras", "PaddleOCR", "OpenCV", "Mobile", "AI", "Python"],
    author: "Karim Khamis",
    date: "2026-04-05",
    readTime: "15 min read",
    featured: true,
    content: `
## Introduction

Optical Character Recognition (OCR) is a deceptively hard problem. Off-the-shelf solutions like Tesseract work well for printed text in good conditions. But when you need accuracy across real-world images — varying lighting, blur, mixed scripts — you need a custom pipeline.

This is the story of how I built **Letra**, a custom-trained OCR mobile app that achieves **98% English accuracy** on 800+ labeled samples, deployed to TestFlight (iOS) and Google Play Beta (Android).

## The Problem with Off-the-Shelf OCR

Standard Tesseract and cloud OCR APIs have two problems for production mobile apps:

1. **They fail on real-world conditions** — blur, shadows, handwriting, low contrast
2. **They're expensive at scale** — API calls add up when processing thousands of images

The solution: train your own model on domain-specific data.

## Architecture Overview

Letra uses a three-stage pipeline:

\`\`\`
Raw Image → OpenCV Preprocessing → PaddleOCR Detection → TF/Keras Recognition → Text Output
\`\`\`

- **OpenCV** handles image preprocessing (denoising, binarization, deskewing)
- **PaddleOCR** handles text region detection (finding where text is in the image)
- **Custom TensorFlow/Keras model** handles character recognition (what the text says)

## Part 1: Dataset Preparation

### Collecting and labeling data

800+ labeled samples is the minimum for a decent custom model. I used two sources:

1. **Real photographs** — photos of handwritten notes, printed documents, signs
2. **Synthetic data** — rendered text in various fonts, sizes, and backgrounds using PIL

\`\`\`python
from PIL import Image, ImageDraw, ImageFont
import random
import numpy as np

def generate_synthetic_sample(text, font_path, size=(128, 32)):
    img = Image.new('RGB', size, color=(random.randint(200, 255),) * 3)
    draw = ImageDraw.Draw(img)
    font = ImageFont.truetype(font_path, size=random.randint(14, 24))

    # Add noise
    noise = np.random.normal(0, 15, (size[1], size[0], 3)).astype(np.uint8)
    img = Image.fromarray(np.clip(np.array(img) + noise, 0, 255).astype(np.uint8))

    draw.text((random.randint(2, 8), random.randint(2, 6)), text, font=font, fill=(0, 0, 0))
    return img
\`\`\`

### Dataset structure

\`\`\`
dataset/
  train/
    images/
      0001.jpg  # "Hello World"
      0002.jpg  # "Cairo Egypt"
    labels.txt  # image_filename\tground_truth_text
  val/
    images/
    labels.txt
\`\`\`

## Part 2: OpenCV Preprocessing Pipeline

Before feeding images to the model, preprocessing dramatically improves accuracy:

\`\`\`python
import cv2
import numpy as np

def preprocess_image(image_path):
    img = cv2.imread(image_path)

    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Denoise
    denoised = cv2.fastNlMeansDenoising(gray, h=10)

    # Adaptive thresholding for binarization
    binary = cv2.adaptiveThreshold(
        denoised, 255,
        cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
        cv2.THRESH_BINARY, 11, 2
    )

    # Deskew
    coords = np.column_stack(np.where(binary > 0))
    angle = cv2.minAreaRect(coords)[-1]
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle

    (h, w) = binary.shape[:2]
    M = cv2.getRotationMatrix2D((w // 2, h // 2), angle, 1.0)
    deskewed = cv2.warpAffine(binary, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)

    return deskewed
\`\`\`

## Part 3: PaddleOCR for Text Detection

PaddleOCR's detection model finds bounding boxes around text regions:

\`\`\`python
from paddleocr import PaddleOCR

ocr = PaddleOCR(use_angle_cls=True, lang='en', use_gpu=False)

def detect_text_regions(image_path):
    result = ocr.ocr(image_path, rec=False)  # detection only
    boxes = []
    for line in result[0]:
        box = line[0]  # [[x1,y1], [x2,y2], [x3,y3], [x4,y4]]
        boxes.append(box)
    return boxes
\`\`\`

## Part 4: Custom TensorFlow/Keras Recognition Model

The recognition model is a CRNN (Convolutional Recurrent Neural Network) — a proven architecture for sequence-to-sequence text recognition:

\`\`\`python
import tensorflow as tf
from tensorflow.keras import layers, Model

def build_crnn_model(num_classes, input_shape=(32, 128, 1)):
    inputs = tf.keras.Input(shape=input_shape)

    # CNN backbone
    x = layers.Conv2D(64, (3, 3), activation='relu', padding='same')(inputs)
    x = layers.MaxPooling2D((2, 2))(x)
    x = layers.Conv2D(128, (3, 3), activation='relu', padding='same')(x)
    x = layers.MaxPooling2D((2, 2))(x)
    x = layers.Conv2D(256, (3, 3), activation='relu', padding='same')(x)
    x = layers.BatchNormalization()(x)
    x = layers.Conv2D(256, (3, 3), activation='relu', padding='same')(x)
    x = layers.MaxPooling2D((2, 1))(x)
    x = layers.Conv2D(512, (3, 3), activation='relu', padding='same')(x)
    x = layers.BatchNormalization()(x)
    x = layers.MaxPooling2D((2, 1))(x)
    x = layers.Conv2D(512, (2, 2), activation='relu')(x)

    # Reshape for RNN
    x = layers.Reshape((-1, 512))(x)

    # Bidirectional LSTM
    x = layers.Bidirectional(layers.LSTM(256, return_sequences=True))(x)
    x = layers.Bidirectional(layers.LSTM(256, return_sequences=True))(x)

    # Output
    outputs = layers.Dense(num_classes + 1, activation='softmax')(x)  # +1 for CTC blank

    return Model(inputs, outputs)

model = build_crnn_model(num_classes=96)  # 96 printable ASCII chars
model.compile(optimizer='adam', loss=tf.keras.backend.ctc_batch_cost)
\`\`\`

## Part 5: Training

\`\`\`python
# Training configuration
EPOCHS = 50
BATCH_SIZE = 32
LEARNING_RATE = 0.001

# Learning rate scheduling
lr_schedule = tf.keras.callbacks.ReduceLROnPlateau(
    monitor='val_loss', factor=0.5, patience=5, min_lr=1e-6
)

checkpoint = tf.keras.callbacks.ModelCheckpoint(
    'best_model.h5', save_best_only=True, monitor='val_accuracy'
)

history = model.fit(
    train_dataset,
    validation_data=val_dataset,
    epochs=EPOCHS,
    callbacks=[lr_schedule, checkpoint]
)
\`\`\`

After 50 epochs on 800+ samples: **98% character accuracy on English text**.

## Part 6: Mobile Deployment with React Native + Expo

\`\`\`javascript
// Using expo-camera and a Flask inference server
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

async function processImage(uri) {
  // Resize for inference
  const resized = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 640 } }],
    { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
  );

  // Send to inference server
  const formData = new FormData();
  formData.append('image', {
    uri: resized.uri,
    name: 'image.jpg',
    type: 'image/jpeg',
  });

  const response = await fetch('https://your-inference-server.com/ocr', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  return result.text;
}
\`\`\`

## Results

| Metric | Value |
|--------|-------|
| English character accuracy | 98% |
| Arabic baseline | 60% (in progress → targeting 85%) |
| Average inference time | ~340ms |
| Supported platforms | iOS (TestFlight) + Android (Play Beta) |

## What's Next

I'm currently iterating the Arabic OCR pipeline. Arabic presents unique challenges — right-to-left text, connected characters, and diacritic marks. Current baseline is 60%, targeting 85%+ with a dedicated Arabic dataset.

**Karim Khamis** is a full-stack developer and AI/ML researcher at AASTMT, Cairo, Egypt. He builds OCR systems and mobile apps. Available for freelance and research collaboration at karimkhamis.com.
    `,
  },

  {
    id: "paddleocr-arabic-text-recognition",
    slug: "paddleocr-arabic-text-recognition",
    title: "Arabic OCR with PaddleOCR: Challenges, Approaches, and Benchmarks",
    excerpt: "Arabic OCR is significantly harder than English OCR — connected characters, right-to-left direction, diacritics, and font variation all compound the problem. Here's what I've learned building an Arabic OCR pipeline targeting 85%+ accuracy.",
    category: "OCR & AI",
    tags: ["OCR", "PaddleOCR", "Arabic", "NLP", "Computer Vision", "Python", "AI"],
    author: "Karim Khamis",
    date: "2026-03-15",
    readTime: "11 min read",
    featured: false,
    content: `
## Why Arabic OCR is Hard

Most OCR research is English-centric. Arabic presents four unique challenges that fundamentally change the approach:

1. **Connected script** — Arabic characters connect to adjacent characters, making segmentation non-trivial
2. **Right-to-left direction** — pipelines designed for LTR break on RTL text
3. **Diacritics (tashkeel)** — vowel marks that sit above/below consonants at tiny scale
4. **High font variation** — Naskh, Nastaliq, Kufi, Ruq'ah all require different treatment

My current Arabic OCR baseline is **60%** on a 200-sample dataset. Here's what I've learned pushing toward the 85%+ target.

## Baseline: PaddleOCR Arabic Out of the Box

PaddleOCR ships with a pre-trained Arabic model:

\`\`\`python
from paddleocr import PaddleOCR

ocr = PaddleOCR(
    use_angle_cls=True,
    lang='ar',
    use_gpu=False,
    det_model_dir='./models/det',
    rec_model_dir='./models/rec_arabic',
)

result = ocr.ocr('arabic_sample.jpg', cls=True)
for line in result[0]:
    box, (text, confidence) = line
    print(f"Text: {text} | Confidence: {confidence:.2f}")
\`\`\`

Out of the box accuracy on my test set: **~55%**. Better than nothing, but not production-ready.

## Improvement 1: Preprocessing for Arabic

Arabic text in real photos often has diacritics that confuse the model. Preprocessing helps:

\`\`\`python
import cv2
import numpy as np
import arabic_reshaper
from bidi.algorithm import get_display

def preprocess_arabic_image(img):
    # Convert to grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Morphological operations to connect broken characters
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (2, 1))
    connected = cv2.morphologyEx(gray, cv2.MORPH_CLOSE, kernel)

    # CLAHE for contrast enhancement
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(connected)

    return enhanced

def fix_arabic_display(text):
    # Reshape and apply BiDi algorithm for correct display
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)
\`\`\`

\`\`\`bash
pip install arabic-reshaper python-bidi
\`\`\`

## Improvement 2: Fine-Tuning PaddleOCR on Custom Arabic Data

The biggest accuracy gains come from fine-tuning on domain-specific data:

\`\`\`bash
# Clone PaddlePaddle OCR
git clone https://github.com/PaddlePaddle/PaddleOCR.git
cd PaddleOCR
pip install -r requirements.txt
\`\`\`

\`\`\`yaml
# configs/rec/arabic_fine_tune.yml
Global:
  use_gpu: false
  epoch_num: 100
  log_smooth_window: 20
  print_batch_step: 10
  save_model_dir: ./output/arabic_rec
  save_epoch_step: 10
  eval_batch_step: [0, 2000]
  cal_metric_during_train: True
  pretrained_model: ./pretrain_models/arabic_PP-OCRv3_rec
  checkpoints:
  save_inference_dir:
  use_visualdl: False
  character_dict_path: ppocr/utils/dict/arabic_dict.txt
  max_text_length: 25
  infer_mode: False
  use_space_char: True

Train:
  dataset:
    name: SimpleDataSet
    data_dir: ./train_data/arabic/
    label_file_list: ["./train_data/arabic/train_label.txt"]
    transforms:
      - DecodeImage:
          img_mode: BGR
          channel_first: False
      - RecAug:
      - CTCLabelEncode:
      - RecResizeImg:
          image_shape: [3, 48, 320]
      - KeepKeys:
          keep_keys: ['image', 'label', 'length']
  loader:
    shuffle: True
    batch_size_per_card: 32
\`\`\`

\`\`\`bash
python tools/train.py -c configs/rec/arabic_fine_tune.yml
\`\`\`

## Improvement 3: Handling Diacritics Separately

Diacritics (tashkeel) are tiny marks that even humans sometimes miss. One approach: train two models — one for base text, one for diacritics — and merge outputs.

\`\`\`python
def strip_diacritics(text):
    """Remove Arabic diacritics for base-text comparison."""
    diacritics = '\u064b\u064c\u064d\u064e\u064f\u0650\u0651\u0652'
    return ''.join(c for c in text if c not in diacritics)

def evaluate_without_diacritics(predictions, ground_truth):
    """Evaluate accuracy ignoring diacritics."""
    correct = sum(
        1 for p, g in zip(predictions, ground_truth)
        if strip_diacritics(p) == strip_diacritics(g)
    )
    return correct / len(predictions)
\`\`\`

With diacritics stripped from evaluation: accuracy jumps from 60% to **71%** — confirming diacritics are the primary failure mode.

## Current Benchmark Results

| Approach | Accuracy |
|----------|----------|
| PaddleOCR Arabic (baseline) | 55% |
| + Preprocessing | 60% |
| + Fine-tuning on 200 samples | 68% |
| + Diacritic-stripped evaluation | 71% |
| Target (with 800+ samples) | 85%+ |

## Next Steps

The path to 85%+ requires:
1. **More data** — 800+ labeled Arabic samples (currently at 200)
2. **Synthetic data augmentation** — rendered Arabic text in multiple fonts
3. **Curriculum learning** — train on easy samples first, introduce hard cases gradually
4. **Attention mechanism** — replace CTC with attention-based decoder for connected scripts

**Karim Khamis** is an M.Sc. researcher at AASTMT, Cairo, Egypt, focused on OCR and multilingual document processing. Follow his research progress at karimkhamis.com.
    `,
  },

  // ── CLUSTER 3: React Native + Expo ───────────────────────

  {
    id: "react-native-expo-complete-guide",
    slug: "react-native-expo-complete-guide",
    title: "React Native with Expo: The Complete Guide for 2026",
    excerpt: "Everything you need to build, test, and deploy a production React Native app with Expo in 2026 — from project setup to EAS Build, OTA updates, camera access, and App Store submission.",
    category: "React Native",
    tags: ["React Native", "Expo", "EAS", "Mobile", "iOS", "Android", "TypeScript"],
    author: "Karim Khamis",
    date: "2026-03-20",
    readTime: "13 min read",
    featured: true,
    content: `
## Introduction

React Native with Expo is the fastest way to ship a production mobile app in 2026. I've used it to build Letra — a custom OCR app deployed to both TestFlight (iOS) and Google Play Beta (Android) from a single codebase.

This guide covers everything from initial setup to production deployment.

## Why Expo in 2026?

Expo has matured significantly. With **EAS Build** (Expo Application Services), you get:

- Cloud builds for iOS without a Mac
- Over-the-air (OTA) updates without App Store review
- Managed workflow that handles native modules
- First-class TypeScript support

## Part 1: Project Setup

\`\`\`bash
npm install -g @expo/cli eas-cli
npx create-expo-app MyApp --template expo-template-blank-typescript
cd MyApp
npm start
\`\`\`

### Project structure

\`\`\`
MyApp/
  app/                 # Expo Router file-based navigation
    (tabs)/
      index.tsx       # Home tab
      explore.tsx     # Explore tab
    _layout.tsx       # Root layout
  components/
    ui/               # Reusable UI components
  hooks/              # Custom hooks
  constants/          # Colors, sizes, etc.
  assets/             # Images, fonts
  app.json            # Expo config
  eas.json            # EAS Build config
\`\`\`

## Part 2: Navigation with Expo Router

Expo Router uses file-based routing (like Next.js App Router):

\`\`\`tsx
// app/_layout.tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
\`\`\`

\`\`\`tsx
// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2dd4bf' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => <Ionicons name="camera" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
\`\`\`

## Part 3: Camera Integration

\`\`\`bash
npx expo install expo-camera expo-image-picker expo-image-manipulator
\`\`\`

\`\`\`tsx
// app/(tabs)/scan.tsx
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [scanning, setScanning] = useState(false);

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Camera access is required to scan text.</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePicture = async () => {
    if (!cameraRef.current || scanning) return;
    setScanning(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });
      // Process photo...
    } finally {
      setScanning(false);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing="back">
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture} disabled={scanning}>
            <View style={styles.captureInner} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0f1a' },
  camera: { flex: 1 },
  overlay: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 40 },
  captureButton: {
    width: 72, height: 72, borderRadius: 36,
    borderWidth: 4, borderColor: '#2dd4bf',
    justifyContent: 'center', alignItems: 'center',
  },
  captureInner: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#2dd4bf' },
  message: { color: 'white', textAlign: 'center', margin: 20 },
  button: { backgroundColor: '#2dd4bf', padding: 16, borderRadius: 12, margin: 20 },
  buttonText: { color: 'white', fontWeight: '600', textAlign: 'center' },
});
\`\`\`

## Part 4: State Management with Zustand

\`\`\`bash
npm install zustand
\`\`\`

\`\`\`typescript
// store/useAppStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ScanResult {
  id: string;
  text: string;
  imageUri: string;
  timestamp: number;
}

interface AppStore {
  results: ScanResult[];
  addResult: (result: ScanResult) => void;
  clearResults: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      results: [],
      addResult: (result) => set((state) => ({ results: [result, ...state.results] })),
      clearResults: () => set({ results: [] }),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
\`\`\`

## Part 5: EAS Build Configuration

\`\`\`bash
eas login
eas build:configure
\`\`\`

\`\`\`json
// eas.json
{
  "cli": { "version": ">= 5.0.0" },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": { "simulator": true }
    },
    "production": {
      "ios": { "resourceClass": "m-medium" },
      "android": { "buildType": "app-bundle" }
    }
  },
  "submit": {
    "production": {}
  }
}
\`\`\`

### Build commands

\`\`\`bash
# Development build
eas build --profile development --platform android

# Production build for both platforms
eas build --profile production --platform all

# Submit to stores
eas submit --profile production --platform ios
eas submit --profile production --platform android
\`\`\`

## Part 6: OTA Updates

\`\`\`bash
# Push an update without App Store review (JS changes only)
eas update --branch production --message "Fix camera crash on Android 14"
\`\`\`

## Common Pitfalls

**Android permissions:** Always declare permissions in \`app.json\`:
\`\`\`json
{
  "android": {
    "permissions": ["CAMERA", "READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"]
  }
}
\`\`\`

**iOS entitlements:** Camera usage description is required:
\`\`\`json
{
  "ios": {
    "infoPlist": {
      "NSCameraUsageDescription": "Camera is used to scan and recognize text."
    }
  }
}
\`\`\`

## Conclusion

React Native + Expo in 2026 is genuinely production-ready. EAS Build eliminates the biggest pain point (iOS builds without a Mac), Expo Router brings familiar Next.js-style navigation, and OTA updates let you ship fixes without waiting for App Store review.

**Karim Khamis** builds cross-platform mobile apps with React Native and Expo. Based in Cairo, Egypt. Projects include Letra (OCR) and Qodrateman (e-learning). Available at karimkhamis.com.
    `,
  },

  {
    id: "react-native-performance-optimization",
    slug: "react-native-performance-optimization",
    title: "React Native Performance Optimization: 8 Techniques That Actually Work",
    excerpt: "React Native apps can feel sluggish if you don't optimize early. Here are 8 techniques — from FlatList optimization to Reanimated 3 — that make a measurable difference in production apps.",
    category: "React Native",
    tags: ["React Native", "Performance", "Expo", "Reanimated", "FlatList", "Mobile"],
    author: "Karim Khamis",
    date: "2026-02-28",
    readTime: "9 min read",
    featured: false,
    content: `
## Introduction

React Native performance issues usually fall into two categories: JS thread overload and unnecessary re-renders. Both are fixable, but require different approaches.

Here are 8 techniques I use in production React Native apps, with code examples and before/after metrics.

## 1. Use FlatList Instead of ScrollView for Lists

\`\`\`tsx
// Bad — renders all items immediately
<ScrollView>
  {items.map(item => <ItemCard key={item.id} item={item} />)}
</ScrollView>

// Good — virtualizes the list
<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <ItemCard item={item} />}
  initialNumToRender={10}
  maxToRenderPerBatch={10}
  windowSize={5}
  removeClippedSubviews={true}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
\`\`\`

For known item heights, \`getItemLayout\` eliminates layout calculations entirely — biggest FlatList performance win.

## 2. Memoize Components and Callbacks

\`\`\`tsx
// Wrap expensive components with React.memo
const ItemCard = React.memo(({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item.id)}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
));

// Stable callback references with useCallback
function ItemList({ items }) {
  const handlePress = useCallback((id) => {
    navigation.navigate('Detail', { id });
  }, [navigation]);

  return <FlatList data={items} renderItem={({ item }) => <ItemCard item={item} onPress={handlePress} />} />;
}
\`\`\`

## 3. Use Reanimated 3 for Smooth Animations

JavaScript-thread animations drop frames. Reanimated 3 runs animations on the UI thread:

\`\`\`bash
npx expo install react-native-reanimated
\`\`\`

\`\`\`tsx
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

function PressableCard({ children }) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <Pressable
        onPressIn={() => { scale.value = withSpring(0.96); }}
        onPressOut={() => { scale.value = withSpring(1); }}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
}
\`\`\`

## 4. Lazy Load Heavy Screens

\`\`\`tsx
import { lazy, Suspense } from 'react';

const HeavyScreen = lazy(() => import('./HeavyScreen'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyScreen />
    </Suspense>
  );
}
\`\`\`

## 5. Optimize Images

\`\`\`tsx
import { Image } from 'expo-image'; // Blurhash placeholder + caching

<Image
  source={{ uri: imageUrl }}
  placeholder={blurhash}
  contentFit="cover"
  transition={200}
  cachePolicy="memory-disk"
  style={{ width: 200, height: 200 }}
/>
\`\`\`

\`\`\`bash
npx expo install expo-image
\`\`\`

## 6. Debounce Search Inputs

\`\`\`tsx
import { useDebouncedCallback } from 'use-debounce';

function SearchBar({ onSearch }) {
  const debouncedSearch = useDebouncedCallback((value) => {
    onSearch(value);
  }, 300);

  return (
    <TextInput
      onChangeText={debouncedSearch}
      placeholder="Search..."
    />
  );
}
\`\`\`

## 7. Use InteractionManager for Heavy Work

\`\`\`tsx
import { InteractionManager } from 'react-native';

useEffect(() => {
  const task = InteractionManager.runAfterInteractions(() => {
    // Run after navigation animation completes
    loadHeavyData();
  });
  return () => task.cancel();
}, []);
\`\`\`

## 8. Profile with Flipper and React DevTools

\`\`\`bash
# Enable Hermes for better profiling
# app.json
{
  "expo": {
    "jsEngine": "hermes"
  }
}
\`\`\`

Hermes enables sampling profiler in React DevTools. Look for components rendering more than 16ms — those are your frame-drop culprits.

## Baseline Metrics (Before vs After)

| Metric | Before | After |
|--------|--------|-------|
| FlatList (500 items) scroll FPS | 42 fps | 58 fps |
| Screen transition time | 380ms | 210ms |
| Memory usage (idle) | 180MB | 125MB |
| JS bundle parse time | 1.2s | 0.8s |

## Conclusion

React Native performance optimization is mostly about two things: keeping the JS thread free and avoiding unnecessary renders. FlatList virtualization, Reanimated for animations, and React.memo with useCallback cover 80% of the gains you'll ever need.

**Karim Khamis** builds React Native apps for production. Based in Cairo, Egypt. See his mobile work at karimkhamis.com.
    `,
  },

  // ── CLUSTER 4: Freelancing in Egypt ──────────────────────

  {
    id: "freelancing-as-developer-in-egypt",
    slug: "freelancing-as-developer-in-egypt",
    title: "Freelancing as a Developer in Egypt: A Practical Guide for 2026",
    excerpt: "How to build a sustainable freelance software development career from Cairo — covering platforms, pricing strategy, client communication, payment methods, and growing from your first project to consistent income.",
    category: "Freelancing",
    tags: ["Freelancing", "Egypt", "Cairo", "Upwork", "Developer", "Career"],
    author: "Karim Khamis",
    date: "2026-04-01",
    readTime: "10 min read",
    featured: true,
    content: `
## Introduction

I've been freelancing as a full-stack developer from Cairo, Egypt since June 2022. In that time I've delivered 30+ projects with a 100% on-time rate. Here's everything I wish I'd known when I started.

## The Reality of Freelancing from Egypt

Let's address the elephant in the room: freelancing from Egypt has both advantages and challenges.

**Advantages:**
- Lower cost of living means your rates are competitive internationally
- Egyptian developers are known for strong work ethic and technical depth
- Time zone (UTC+3) overlaps with both European morning and US afternoon hours

**Challenges:**
- Payment infrastructure is limited (no PayPal withdrawal, limited Payoneer in some cases)
- Building reputation from zero is harder without social proof
- Some clients are skeptical about working with developers outside Western countries

All of these are solvable. Here's how.

## Where to Find Clients

### 1. Upwork — Best for Starting Out

Upwork is the most accessible platform for Egyptian developers. Your first 3–5 projects are the hardest because you have no reviews.

**Strategy for zero-review profiles:**

- Start at a lower rate ($15–25/hr) to win initial projects
- Target small, specific jobs — not large vague projects
- Write highly personalized proposals that prove you read the job description
- Focus on niches where you have real experience (React + Django, mobile apps, etc.)

Once you have 3 reviews with 5-star ratings, raise your rate by 20–30%.

### 2. Direct Outreach

Cold outreach to startups and small businesses in your niche converts well. Template:

> "Hi [Name], I came across [Company] while researching [niche]. I noticed your [specific problem — e.g., your checkout flow has no loading state on mobile]. I'm a full-stack developer specializing in React and Django and I've solved this exact problem for [similar company]. Would a 15-minute call make sense?"

Specific + personalized + relevant = replies.

### 3. LinkedIn

Post technical content weekly — tutorials, project breakdowns, lessons learned. Potential clients often reach out after seeing 3–4 posts.

### 4. Arabic Freelance Markets

Don't ignore the Arabic-speaking market. Egyptian and Gulf businesses often prefer developers who speak Arabic and understand regional business context. Mostaql and Khamsat are the main platforms.

## Pricing Strategy

### The three pricing models

**Hourly:** Best for ongoing work with unclear scope. Rate = (desired monthly income) / (40 hours × 0.7 billable efficiency)

**Fixed price:** Best for well-defined projects. Add 20–30% buffer for scope creep.

**Retainer:** Best for long-term clients. Offer a discount (10–15%) for monthly commitment.

### Rate benchmarks for Egyptian developers (2026)

| Level | Upwork Rate | Direct Rate |
|-------|------------|-------------|
| Junior (0–2 years) | $15–25/hr | $20–35/hr |
| Mid (2–4 years) | $25–45/hr | $40–60/hr |
| Senior (4+ years) | $45–75/hr | $60–100/hr |

With a specialized niche (AI, OCR, e-commerce), add 20–30%.

## Payment Methods That Work in Egypt

**Payoneer:** Best overall. Accepts payments from Upwork, direct wire transfers, and most major platforms. Converts to EGP via local bank transfer.

**Wise (formerly TransferWise):** Best for direct client payments from Europe. Low fees, good exchange rates.

**SWIFT Transfer:** For large payments from US clients. Higher fees but universally accepted.

**Crypto (USDT/USDC):** Growing option. Some Egyptian freelancers use Binance P2P for conversion.

Avoid PayPal — withdrawal to Egyptian accounts is highly restricted.

## Client Communication That Wins Repeat Business

These three habits keep clients coming back:

**1. Weekly progress updates** — Even for short projects. Clients hate silence. Send a brief update every Monday: what's done, what's next, any blockers.

**2. Underpromise, overdeliver** — Add 20% to your time estimate. If you finish early, ship early and bank the goodwill.

**3. Document everything** — Use a simple project spec document before starting. "Based on our conversation, I'll build X, Y, Z. The following are out of scope: A, B." This prevents scope creep and sets clear expectations.

## Building a Sustainable Practice

Sustainable freelancing is not about having the most clients. It's about having the right ones. Aim for:

- 2–3 long-term retainer clients (60% of income)
- 1–2 new projects per month (40% of income)
- Increasing specialization over time

Generalists compete on price. Specialists compete on value.

My niche: **React + Django full-stack apps and React Native mobile apps for startups and e-learning platforms**. Narrow enough to be the obvious choice for the right clients.

## Conclusion

Freelancing from Egypt is genuinely viable in 2026. The combination of competitive rates, strong technical skills, and increasing remote-work normalization creates real opportunity. The first 3 months are the hardest — getting initial reviews requires accepting rates below your worth. After that, it compounds.

**Karim Khamis** is a full-stack developer and freelancer based in Cairo, Egypt. 30+ projects delivered. Available for new projects at karimkhamis.com.
    `,
  },

  {
    id: "building-elearning-platform-react-django",
    slug: "building-elearning-platform-react-django",
    title: "How I Built Qodrateman: A Full-Stack E-Learning Platform with AI Quiz Generation",
    excerpt: "A detailed case study of Qodrateman — a full-stack e-learning platform built with React, Django REST Framework, PostgreSQL, and AI-powered quiz generation. From architecture decisions to deployment.",
    category: "React + Django",
    tags: ["React", "Django", "E-Learning", "AI", "PostgreSQL", "Case Study", "Qodrateman"],
    author: "Karim Khamis",
    date: "2026-02-15",
    readTime: "14 min read",
    featured: false,
    content: `
## Introduction

Qodrateman (qodrateman.com) is a full-stack e-learning platform I designed and built. It serves students across 12+ courses with role-based access control, JWT authentication, and an AI-powered quiz generation system that cuts instructor creation time from ~20 minutes to under 30 seconds.

This post is a detailed case study of the architecture, technical decisions, and lessons learned.

## The Problem

Egyptian students preparing for Qudrat (aptitude) and Tahseel (achievement) exams needed a structured, accessible learning platform. Existing options were expensive, had poor mobile UX, or lacked AI-assisted study tools.

## Technical Architecture

\`\`\`
Frontend: React + Vite + Tailwind CSS (Vercel)
Backend: Django REST Framework (Render)
Database: PostgreSQL
Auth: JWT (SimpleJWT)
AI: OpenAI API for quiz generation
Media: Cloudinary
Email: SendGrid
\`\`\`

## Part 1: Role-Based Access Control

Qodrateman has three user roles: **Student**, **Instructor**, and **Admin**. Getting RBAC right from day one was critical.

\`\`\`python
# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('instructor', 'Instructor'),
        ('admin', 'Admin'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    @property
    def is_instructor(self):
        return self.role == 'instructor'

    @property
    def is_student(self):
        return self.role == 'student'
\`\`\`

\`\`\`python
# permissions.py
from rest_framework.permissions import BasePermission

class IsInstructor(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_instructor

class IsEnrolledStudent(BasePermission):
    def has_object_permission(self, request, view, obj):
        return Enrollment.objects.filter(
            student=request.user, course=obj
        ).exists()
\`\`\`

## Part 2: Course and Lesson Models

\`\`\`python
class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    instructor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
    thumbnail = models.ImageField(upload_to='thumbnails/', null=True)
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    is_published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    title = models.CharField(max_length=200)
    video_url = models.URLField(blank=True)
    content = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)
    duration_minutes = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

class Enrollment(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    progress_percentage = models.FloatField(default=0.0)

    class Meta:
        unique_together = ['student', 'course']
\`\`\`

## Part 3: AI Quiz Generation

This is the feature that saved instructors the most time. The flow:

1. Instructor selects a lesson or pastes text
2. Backend calls OpenAI API with a structured prompt
3. Response is parsed into quiz questions and saved to database
4. Average time: 28 seconds for 10 questions

\`\`\`python
import openai
import json
from django.conf import settings

def generate_quiz_from_text(text, num_questions=10, difficulty='medium'):
    client = openai.OpenAI(api_key=settings.OPENAI_API_KEY)

    prompt = f"""
    Generate {num_questions} multiple-choice questions from the following text.
    Difficulty: {difficulty}

    Text:
    {text}

    Return ONLY a JSON array with this exact structure:
    [
      {{
        "question": "Question text here?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correct_answer": 0,
        "explanation": "Why this answer is correct."
      }}
    ]

    Requirements:
    - Each question must have exactly 4 options
    - correct_answer is the 0-indexed position of the correct option
    - Questions should test understanding, not just memorization
    """

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
        max_tokens=2000,
    )

    content = response.choices[0].message.content.strip()
    # Strip markdown code blocks if present
    if content.startswith('\`\`\`'):
        content = content.split('\`\`\`')[1]
        if content.startswith('json'):
            content = content[4:]

    questions_data = json.loads(content)
    return questions_data
\`\`\`

\`\`\`python
# views.py
class GenerateQuizView(APIView):
    permission_classes = [IsInstructor]

    def post(self, request):
        lesson_id = request.data.get('lesson_id')
        num_questions = request.data.get('num_questions', 10)
        difficulty = request.data.get('difficulty', 'medium')

        lesson = get_object_or_404(Lesson, id=lesson_id, course__instructor=request.user)

        try:
            questions_data = generate_quiz_from_text(
                lesson.content,
                num_questions=num_questions,
                difficulty=difficulty
            )

            quiz = Quiz.objects.create(
                lesson=lesson,
                title=f"Quiz: {lesson.title}",
                difficulty=difficulty,
            )

            for q_data in questions_data:
                Question.objects.create(
                    quiz=quiz,
                    text=q_data['question'],
                    options=q_data['options'],
                    correct_answer=q_data['correct_answer'],
                    explanation=q_data['explanation'],
                )

            serializer = QuizSerializer(quiz)
            return Response(serializer.data, status=201)

        except Exception as e:
            return Response({'error': str(e)}, status=500)
\`\`\`

## Part 4: Frontend Architecture

\`\`\`jsx
// Context for auth state
// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      api.get('/auth/me/')
        .then(res => setUser(res.data))
        .catch(() => localStorage.removeItem('access_token'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const res = await api.post('/auth/token/', credentials);
    localStorage.setItem('access_token', res.data.access);
    localStorage.setItem('refresh_token', res.data.refresh);
    const userRes = await api.get('/auth/me/');
    setUser(userRes.data);
    return userRes.data;
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
\`\`\`

## Part 5: Deployment

**Frontend (Vercel):**
- Auto-deploys on push to main
- Environment variables set in Vercel dashboard
- Custom domain with SSL

**Backend (Render):**
- Docker-based deployment
- PostgreSQL managed database
- Environment variables in Render dashboard
- Zero-downtime deploys

**Media (Cloudinary):**
- Video lessons uploaded directly from frontend to Cloudinary
- Signed upload URLs generated by backend
- Adaptive streaming for video lessons

## Results

- 500+ authenticated users, zero security incidents
- AI quiz generation: average 28 seconds for 10 questions (down from 20+ minutes manually)
- Zero post-launch rollbacks in first 6 months
- 12 active courses

## Key Lessons

1. **Build RBAC first** — retrofitting permissions is painful
2. **Optimize AI prompts before optimizing code** — prompt engineering had bigger impact than caching
3. **Cloudinary for media from day one** — storing video locally is a mistake at any scale
4. **Use Render's managed PostgreSQL** — database management overhead is not worth it for solo projects

**Karim Khamis** is the developer behind Qodrateman. He builds full-stack web apps and e-learning platforms from Cairo, Egypt. Available for freelance projects at karimkhamis.com.
    `,
  },
];

export const categories = [...new Set(blogPosts.map(p => p.category))];

export const getFeaturedPosts = () => blogPosts.filter(p => p.featured);

export const getPostBySlug = (slug) => blogPosts.find(p => p.slug === slug);

export const getPostsByCategory = (category) =>
  blogPosts.filter(p => p.category === category);

export const getRelatedPosts = (currentSlug, limit = 3) => {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];
  return blogPosts
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
};
