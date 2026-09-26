/**
 * English and Arabic UI copy — one language per route (/ vs /ar). No mixed strings.
 */

const projectIds = [
  "aiLab",
  "newClothes",
  "coffee",
  "sushi",
  "youbloom",
  "bedayate",
  "petClinic",
  "ecommerce",
];

const projectMedia = {
  aiLab: {
    video: "/ai-lab.mp4",
    poster: "/ai-lab-poster.png",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Groq LLM API",
      "LangGraph",
      "RAG (embeddings + citations)",
      "n8n",
      "Redis / Upstash",
      "Docker",
      "Zod",
      "Tailwind CSS",
      "Vercel",
    ],
    websiteLink: "https://ai-lab-alpha-five.vercel.app",
    githubLink: "https://github.com/karim-99-99/AI-LAB",
  },
  newClothes: {
    video: "/new-clothes.mp4",
    poster: "/new-clothes1.jpg",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    websiteLink: "https://new-clothes.vercel.app/",
    githubLink: "https://github.com/karim-99-99/new-clothes",
  },
  coffee: {
    video: "/cafe1.mp4",
    poster: "/caffe1.jpg",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    websiteLink: "https://coffe-pi-lovat.vercel.app/",
    githubLink: "https://github.com/karim-99-99/coffe",
  },
  sushi: {
    video: "/sushi.mp4",
    poster: "/sushi1.jpg",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    websiteLink: "https://sushi-pi-nine.vercel.app/",
    githubLink: "https://github.com/karim-99-99/sushi",
  },
  youbloom: {
    video: "/youbloom project.mp4",
    poster: "/youbloom project-poster.png",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "RESTful APIs"],
    websiteLink: "https://youbloom-project.vercel.app/login",
    githubLink: "https://github.com/karim-99-99/youbloom_project",
  },
  bedayate: {
    video: "/bedayate.mp4",
    poster: "/bedayate1.jpg",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "RESTful APIs",
      "Django",
      "python",
    ],
    websiteLink: "https://karim-khaled.vercel.app/",
    githubLink: "https://github.com/karim-99-99/karim-khaled",
  },
  petClinic: {
    video: "/pet clinic1.mp4",
    poster: "/pet clicnic1.jpg",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    websiteLink: "https://pet-clinic-alpha.vercel.app/",
    githubLink: "https://github.com/karim-99-99/pet-clinic",
  },
  ecommerce: {
    video: "/E-Commerce.mp4",
    poster: "/E-commerce1.jpg",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    websiteLink: "https://myecommerce123.vercel.app/",
    githubLink: "https://github.com/karim-99-99/E-commerce",
  },
};

const enProjectsCopy = {
  aiLab: {
    title: "AI Lab — AI Automation Platform",
    description:
      "AI Lab is a production-style AI automation platform I built end-to-end with Next.js, TypeScript, and the Groq LLM API. It bundles the full applied-AI stack in one product: a RAG pipeline that ingests PDFs, embeds them locally, and answers questions with citations (and refuses when the context is weak); a research agent built on LangGraph with tool calling, thread memory, and visible reasoning steps; and a human-in-the-loop approval queue where every AI-drafted email can be edited, approved, or rejected before it is sent via Gmail. n8n workflows (support tickets, CRM lead extraction, email drafts, meeting summaries) call the platform through webhooks with idempotency keys and run logs. Production habits are built in: API-key auth, per-IP rate limiting, Redis answer caching, fast/strong model routing, a usage and cost dashboard, and LLM guardrails against prompt injection. Deployed 24/7 on Vercel.",
  },
  newClothes: {
    title: "New Clothes",
    description:
      "Lifestyle of Legends is a premium streetwear e-commerce platform crafted to showcase a modern, high-end digital shopping experience. Built with React, TypeScript, and Framer Motion, the website features a sleek dark aesthetic, smooth animations, and a visually immersive user interface.The platform focuses on delivering a seamless shopping journey through detailed product pages, multiple color and size selections, dynamic image galleries, and a responsive cart system. Every element is designed to reflect quality, exclusivity, and strong brand identity, making it an ideal example of a performance-driven fashion e-commerce solution.",
  },
  coffee: {
    title: "Coffee Shop",
    description:
      "A premium coffee brand landing page built with React, Vite, and Tailwind CSS. The website features a modern dark theme enhanced with gold accents, creating a luxurious and elegant feel. It includes a powerful hero section, full-screen video background, an artistry section highlighting coffee craftsmanship, and an interactive product showcase with smooth animations. Fully responsive and performance-optimized, the page delivers a refined and immersive user experience.",
  },
  sushi: {
    title: "Sushi restaurant",
    description:
      "A modern and elegant website for a premium sushi restaurant, designed to deliver a smooth and engaging user experience. The site features well-structured menu categories including sushi, wok, rolls, and drinks, with highlighted discounts and offers. Built with a dark theme, red accents, smooth animations, and an interactive online ordering system. This project showcases a modern UI/UX approach for a restaurant based in Cairo, Egypt.",
  },
  youbloom: {
    title: "Youbloom Project",
    description:
      "YouBloom is a professional React-based frontend project showcasing advanced skills in multi-country phone authentication and user management. The application supports phone number login and registration for 20+ countries with smart, country-specific validation and protected routes.The platform features an interactive user directory with real-time search and a responsive grid layout, along with detailed user profile pages enriched with API-driven data. Built using modern React best practices, YouBloom emphasizes performance, clean architecture, accessibility, and an intuitive user experience—making it a strong showcase project for technical interviews and portfolios.",
  },
  bedayate: {
    title: "Bedayate",
    description:
      "Bedayati is an e-learning platform that I designed and developed to help students prepare for Qudrat (Aptitude) and Tahseel (Achievement) exams through a structured and user-friendly learning experience.The platform features a well-organized educational system combining video-based lessons and interactive quizzes, along with an admin dashboard for flexible content management.It includes a fully Arabic RTL interface and a responsive design optimized for all devices.",
  },
  petClinic: {
    title: "Pet Clinic",
    description:
      "A modern veterinary clinic website built with React.js and Tailwind CSS.The project focuses on showcasing veterinary services, building trust with pet owners, and providing an easy appointment booking experience.It features a dynamic hero section with video background, service listings, team profiles, testimonials, blog, and a fully responsive, animated UI.",
  },
  ecommerce: {
    title: "E-Commerce",
    description:
      "ShopHouse is a modern e-commerce web application built with React and Tailwind CSS. It provides a complete online shopping experience, including product browsing, advanced search and filtering, shopping cart management, user authentication, and an admin panel for product and category management.The project focuses on clean UI design, smooth animations, responsive layouts, and real-world e-commerce functionality using localStorage for data persistence.",
  },
};

const arProjectsCopy = {
  aiLab: {
    title: "AI Lab — منصة أتمتة بالذكاء الاصطناعي",
    description:
      "منصة أتمتة بالذكاء الاصطناعي بمستوى إنتاجي بنيتها بالكامل بـ Next.js وTypeScript وواجهة Groq للنماذج اللغوية. تجمع المنظومة كاملة في منتج واحد: خط RAG يستوعب ملفات PDF ويولّد التضمينات محلياً ويجيب مع الاستشهاد بالمصادر (ويرفض الإجابة عند ضعف السياق)؛ وكيل بحث مبني على LangGraph مع استدعاء الأدوات وذاكرة المحادثة وخطوات تفكير مرئية؛ وطابور موافقة بشرية يتيح تعديل أي بريد صاغه الذكاء الاصطناعي أو اعتماده أو رفضه قبل إرساله عبر Gmail. تتكامل مع n8n عبر Webhooks لسير عمل الدعم الفني، واستخراج العملاء المحتملين إلى CRM، وصياغة البريد، وتلخيص الاجتماعات، مع مفاتيح Idempotency وسجلات تشغيل. مزوّدة بعادات الإنتاج: مصادقة بمفتاح API، تحديد المعدل لكل IP، تخزين مؤقت بـ Redis، توجيه بين نموذج سريع وقوي، لوحة استخدام وتكلفة، وحواجز حماية ضد حقن الأوامر. منشورة على Vercel وتعمل على مدار الساعة.",
  },
  newClothes: {
    title: "نيو كلوز",
    description:
      "منصة تجارة إلكترونية لملابس الشارع الفاخرة بتجربة تسوق رقمية عصرية. مبنية بـ React وFramer Motion مع واجهة داكنة أنيقة، صفحات منتجات تفصيلية، معرض صور ديناميكي، وسلة مشتريات متجاوبة تعكس جودة العلامة وأداءً قوياً.",
  },
  coffee: {
    title: "مقهى",
    description:
      "صفحة هبوط لعلامة قهوة فاخرة باستخدام React وVite وTailwind CSS. تصميم داكن مع لمسات ذهبية، قسم بطل بفيديو خلفية، عرض منتجات تفاعلي، وحركات سلسة — متجاوبة وسريعة.",
  },
  sushi: {
    title: "مطعم سوشي",
    description:
      "موقع عصري لمطعم سوشي فاخر في القاهرة: قوائم منظمة (سوشي، ووك، رولز، مشروبات)، عروض وخصومات، طلب أونلاين، وثيم داكن مع لمسات حمراء وحركات ناعمة.",
  },
  youbloom: {
    title: "مشروع يوبلوم",
    description:
      "تطبيق واجهات React متقدم مع تسجيل دخول عبر الهاتف لأكثر من 20 دولة، تحقق ذكي حسب الدولة، ومسارات محمية. يتضمن دليل مستخدمين مع بحث لحظي وشبكة متجاوبة وصفحات ملفات تعريفية غنية بالبيانات من الـ API.",
  },
  bedayate: {
    title: "بدايتي",
    description:
      "منصة تعليم إلكتروني لمساعدة الطلاب على التحضير لاختباري القدرات والتحصيل. دروس فيديو، اختبارات تفاعلية، لوحة تحكم للمحتوى، وواجهة عربية بالكامل باتجاه RTL وتصميم متجاوب لجميع الأجهزة.",
  },
  petClinic: {
    title: "عيادة بيطرية",
    description:
      "موقع عيادة بيطرية حديث بـ React وTailwind CSS: عرض الخدمات، بناء الثقة مع أصحاب الحيوانات، وحجز مواعيد سهل. بطل ديناميكي بفيديو، أقسام فريق، آراء عملاء، مدونة، وواجهة متحركة بالكامل.",
  },
  ecommerce: {
    title: "متجر إلكتروني",
    description:
      "تطبيق تسوق كامل بـ React وTailwind CSS: تصفح منتجات، بحث وتصفية، سلة مشتريات، تسجيل مستخدم، ولوحة إدارة. واجهة نظيفة، حركات سلسة، وتخزين محلي لمحاكاة سيناريو تجارة حقيقية.",
  },
};

function buildProjects(locale) {
  const copy = locale === "ar" ? arProjectsCopy : enProjectsCopy;
  return projectIds.map((id) => ({
    id,
    ...projectMedia[id],
    title: copy[id].title,
    description: copy[id].description,
  }));
}

export const translations = {
  en: {
    seo: {
      title: "Karim Khamis — AI Automation Engineer & Full-Stack Developer | Cairo, Egypt",
      description:
        "Karim Khamis is an AI automation engineer and full-stack developer in Cairo, Egypt. LLM apps, RAG, LangGraph agents, n8n workflows, Next.js, React, Django. Portfolio and contact.",
      ogTitle: "Karim Khamis — AI Automation Engineer & Full-Stack Developer | Cairo, Egypt",
      ogDescription:
        "AI automation engineer and full-stack developer in Cairo. Production LLM apps — RAG with citations, tool-using agents, human-in-the-loop n8n workflows — plus web and mobile apps with React, Next.js, Django.",
      canonicalPath: "/",
    },
    home: {
      navBrand: "KARIM KHAMIS",
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      navBlog: "Blog",
      navContact: "Contact",
      navToggle: "Toggle menu",
      heroPrefix: "I AM",
      heroName: "Karim Khamis",
      heroTagline:
        "AI Automation Engineer & Full-Stack Developer in Cairo, Egypt — RAG, LLM agents, n8n workflows, Next.js, React and Django.",
      heroSub:
        "I build production AI automation — not just chatbots — and the web and mobile apps around it.",
      ctaProjects: "View My Projects",
      photoAlt: "Karim Khamis, AI automation engineer and full-stack developer",
      ariaTwitter: "Twitter",
      ariaDiscord: "Discord",
      ariaGitHub: "GitHub",
      ariaLinkedIn: "LinkedIn",
    },
    about: {
      ariaSection: "About Karim Khamis — AI Automation Engineer and Full-Stack developer from Cairo, Egypt",
      heading: "ABOUT",
      headingAccent: "ME",
      intro:
        "AI Automation Engineer and Full-Stack developer based in Cairo, Egypt. I build production LLM apps — RAG, agents, human-in-the-loop workflows — plus web and mobile apps. Available for freelance and full-time work worldwide.",
      statProjects: "Projects Shipped",
      statPlatforms: "Platforms (Web & Mobile)",
      statLocationLine1: "Cairo",
      statLocationLine2: "Egypt 🇪🇬",
      getToKnow: "Get To Know Me",
      bio1:
        "I'm an AI automation engineer and full-stack developer from Cairo, Egypt. I build LLM-powered products — RAG systems with citations, tool-using agents with human approval, and n8n automations — as well as web and mobile apps for startups and businesses worldwide.",
      bio2:
        "My stack covers the full product — Next.js and React frontends, Python/Django and Node APIs, Groq and OpenAI-compatible LLM APIs, LangGraph, Redis caching, Docker, and React Native for mobile.",
      bio3:
        "I'm open to job opportunities and freelance projects where I can contribute, learn, and grow. If you have an opportunity that matches my skills, don't hesitate to reach out.",
      contactMe: "Contact Me",
      skillsTitle: "My Skills",
      faqTitle: "Frequently Asked Questions",
      blogCta: "My blogs",
      bioTitle: "About Karim Khamis",
      bioLong:
        "Karim Khamis is an AI automation engineer and full-stack developer based in Cairo, Egypt. He builds production LLM applications — RAG with citations, LangGraph agents, human-in-the-loop approval flows, and n8n workflows — using Next.js, TypeScript, Groq/OpenAI APIs, Redis, and Docker, alongside web and mobile apps with React, Django, and React Native. He is available for freelance contracts and full-time roles globally.",
      availableBadge: "Available for Work",
      ctaTitleBefore: "Let's Work",
      ctaTitleHighlight: "Together",
      ctaText:
        "Open to freelance projects and full-time roles. AI automation, RAG and agents, web apps, mobile apps — if you have a project in mind, let's talk.",
      whatsapp: "Contact Me on WhatsApp",
      github: "View My GitHub",
      faqs: [
        {
          q: "Who is Karim Khamis?",
          a: "Karim Khamis is an AI automation engineer and full-stack developer based in Cairo, Egypt. He builds LLM applications (RAG, LangGraph agents, n8n workflows) and web/mobile apps with Next.js, React, React Native, Python, Django, TypeScript, and PostgreSQL. His official portfolio is karimkhamis.com.",
        },
        {
          q: "Who are the best full-stack developers in Egypt?",
          a: "Strong Egyptian full-stack developers usually combine modern frontend (React or Next.js), solid backend (Python and Django or Node), databases, and shipped products. Karim Khamis is one Cairo-based developer teams evaluate for full-stack web and mobile work; see his projects and contact options on this site.",
        },
        {
          q: "What types of projects does Karim Khamis build?",
          a: "He builds AI automation systems (RAG knowledge bases with citations, tool-using agents with human approval, n8n webhook workflows), web applications, mobile apps (iOS and Android via React Native), e-commerce and education platforms — from responsive UI with React and Tailwind CSS to backend APIs with Next.js or Django.",
        },
        {
          q: "What makes Karim Khamis stand out among web developers in Egypt?",
          a: "He covers web and mobile in one stack — React for web and React Native for mobile — so clients get a consistent product across platforms from one developer. He combines frontend, backend, and mobile expertise with modern tools.",
        },
        {
          q: "Is Karim Khamis available for freelance work?",
          a: "Yes. He is available for freelance contracts and full-time employment, works remotely with clients worldwide, and can be reached via WhatsApp at +201036064417 or through this portfolio website.",
        },
        {
          q: "Where is Karim Khamis based and does he work remotely?",
          a: "He is based in Cairo, Egypt, and works remotely with clients worldwide. He is comfortable collaborating across time zones and asynchronous communication.",
        },
      ],
    },
    projects: {
      heading: "MY",
      headingAccent: "PROJECTS",
      sub:
        "Here you will find some of the personal and client projects that I created; each project includes its own case study.",
      techUsed: "Technologies Used",
      description: "Description",
      visitSite: "Visit Website",
      viewGithub: "View on GitHub",
      videoUnsupported: "Your browser does not support the video tag.",
      closeSidebar: "Close sidebar",
    },
    contact: {
      thanksTitle: "Thanks for your message!",
      thanksSub: "I'll get back to you as soon as possible.",
      heading: "Contact",
      headingAccent: "Me",
      sub: "Thanks for taking the time to reach out. How can I help you today?",
      emailLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      send: "Send Message",
      sending: "Sending...",
      error:
        "Failed to send message. Please try again or use WhatsApp.",
      errorConfig:
        "The contact form is not configured yet. Use WhatsApp below, or the site owner should add EmailJS keys in .env.local (see .env.example).",
      whatsappHint: "Or contact me directly on WhatsApp",
      whatsappCta: "Contact on WhatsApp",
      socialHint: "Find me on",
      ariaGitHub: "GitHub profile",
      ariaLinkedIn: "LinkedIn profile",
    },
  },
  ar: {
    seo: {
      title: "كريم خميس — مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack | القاهرة، مصر",
      description:
        "كريم خميس مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack في القاهرة، مصر. تطبيقات LLM وRAG ووكلاء LangGraph وسير عمل n8n، مع Next.js وReact وDjango. معرض أعمال وتواصل.",
      ogTitle: "كريم خميس — مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack | مصر",
      ogDescription:
        "مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack في القاهرة. تطبيقات LLM إنتاجية — RAG مع استشهادات، وكلاء بأدوات، وسير عمل n8n بموافقة بشرية — إضافة إلى تطبيقات ويب وموبايل.",
      canonicalPath: "/ar",
    },
    home: {
      navBrand: "كريم خميس",
      navHome: "الرئيسية",
      navAbout: "من أنا",
      navProjects: "المشاريع",
      navBlog: "المدونة",
      navContact: "تواصل",
      navToggle: "قائمة التنقل",
      heroPrefix: "أنا",
      heroName: "كريم خميس",
      heroTagline:
        "مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack في القاهرة، مصر — RAG ووكلاء LLM وسير عمل n8n وNext.js وReact وDjango.",
      heroSub: "أبني أتمتة إنتاجية بالذكاء الاصطناعي — ليس مجرد روبوتات محادثة — والتطبيقات المحيطة بها.",
      ctaProjects: "شاهد مشاريعي",
      photoAlt: "كريم خميس، مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack",
      ariaTwitter: "تويتر",
      ariaDiscord: "ديسكورد",
      ariaGitHub: "جيت هاب",
      ariaLinkedIn: "لينكد إن",
    },
    about: {
      ariaSection: "من أنا — كريم خميس، مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack من القاهرة",
      heading: "من",
      headingAccent: "أنا",
      intro:
        "مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack من القاهرة، مصر. أبني تطبيقات LLM إنتاجية — RAG، وكلاء، وسير عمل بموافقة بشرية — إضافة إلى تطبيقات ويب وموبايل. متاح لمشاريع مستقلة ودوام كامل مع عملاء حول العالم.",
      statProjects: "مشاريع منفذة",
      statPlatforms: "منصات (ويب وموبايل)",
      statLocationLine1: "القاهرة",
      statLocationLine2: "مصر 🇪🇬",
      getToKnow: "تعرّف عليّ",
      bio1:
        "أنا مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack من القاهرة. أبني منتجات مدعومة بالنماذج اللغوية — أنظمة RAG مع استشهادات، ووكلاء يستخدمون الأدوات بموافقة بشرية، وأتمتة n8n — إضافة إلى تطبيقات ويب وموبايل للشركات الناشئة والأعمال حول العالم.",
      bio2:
        "أغطي المنتج كاملاً — واجهات Next.js وReact، وواجهات برمجية بـ Python/Django وNode، وواجهات Groq وOpenAI للنماذج اللغوية، وLangGraph، وتخزين مؤقت بـ Redis، وDocker، وReact Native للموبايل.",
      bio3:
        "أرحّب بفرص العمل والمشاريع المستقلة التي أستطيع فيها الإسهام والتعلم والنمو. إن كان عندك عرض يناسب مهاراتي، تواصل بكل ثقة.",
      contactMe: "تواصل معي",
      skillsTitle: "مهاراتي",
      faqTitle: "أسئلة شائعة",
      blogCta: "مدوناتي",
      bioTitle: "نبذة عن كريم خميس",
      bioLong:
        "كريم خميس مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack مقيم في القاهرة، مصر. يبني تطبيقات LLM إنتاجية — RAG مع استشهادات، ووكلاء LangGraph، وتدفقات موافقة بشرية، وسير عمل n8n — باستخدام Next.js وTypeScript وواجهات Groq/OpenAI وRedis وDocker، إضافة إلى تطبيقات ويب وموبايل بـ React وDjango وReact Native. متاح لمشاريع مستقلة وفرص دوام كامل على مستوى العالم.",
      availableBadge: "متاح للعمل",
      ctaTitleBefore: "لنعمل",
      ctaTitleHighlight: "معاً",
      ctaText:
        "مفتوح لمشاريع مستقلة وفرص دوام كامل. أتمتة بالذكاء الاصطناعي، RAG ووكلاء، تطبيقات ويب وموبايل — إن كان لديك فكرة مشروع، لنتحدث.",
      whatsapp: "تواصل عبر واتساب",
      github: "حسابي على جيت هاب",
      faqs: [
        {
          q: "من هو كريم خميس؟",
          a: "كريم خميس مهندس أتمتة بالذكاء الاصطناعي ومطوّر Full Stack من القاهرة، مصر. يبني تطبيقات LLM (RAG، وكلاء LangGraph، سير عمل n8n) وتطبيقات ويب وموبايل بـ Next.js وReact وReact Native وPython وDjango وTypeScript وPostgreSQL. موقعه الرسمي: karimkhamis.com",
        },
        {
          q: "من هم أفضل مطوري الفول ستاك في مصر؟",
          a: "المطورون الأقوياء يجمعون واجهة حديثة (React أو Next.js)، وباك إند قوي (Python وDjango أو Node)، وقواعد بيانات، ومنتجات مُسلَّمة فعلياً. كريم خميس من مطوري القاهرة الذين يُقيَّمون لأعمال الويب والموبايل الشاملة؛ شاهد المشاريع وخيارات التواصل في هذا الموقع.",
        },
        {
          q: "ما أنواع المشاريع التي يبنيها كريم خميس؟",
          a: "يبني أنظمة أتمتة بالذكاء الاصطناعي (قواعد معرفة RAG مع استشهادات، وكلاء يستخدمون الأدوات بموافقة بشرية، سير عمل n8n عبر Webhooks)، وتطبيقات ويب، وتطبيقات موبايل (iOS وAndroid عبر React Native)، ومنصات تجارة وتعليم — من واجهات متجاوبة بـ React وTailwind CSS إلى واجهات برمجية بـ Next.js أو Django.",
        },
        {
          q: "لماذا يُعتبر كريم خميس من مطوري المواقع المتميزين في مصر؟",
          a: "يجمع بين الويب والموبايل في مكدس واحد — React للويب وReact Native للموبايل — فيحصل العميل على تجربة متسقة من مطوّر واحد، مع دمج الواجهة والباك إند والموبايل وأدوات حديثة.",
        },
        {
          q: "هل كريم خميس متاح لمشاريع مستقلة؟",
          a: "نعم. متاح لمشاريع مستقلة ودوام كامل، ويعمل عن بُعد مع عملاء حول العالم، ويمكن التواصل عبر واتساب +201036064417 أو عبر هذا الموقع.",
        },
        {
          q: "أين يقع كريم خميس وهل يعمل عن بُعد؟",
          a: "يقيم في القاهرة، مصر، ويعمل عن بُعد مع عملاء عالميين، ويعمل بمرونة عبر المناطق الزمنية والتعاون غير المتزامن.",
        },
      ],
    },
    projects: {
      heading: "",
      headingAccent: "مشاريعي",
      sub:
        "هنا تجد مشاريع شخصية وعملاء؛ كل مشروع يتضمن دراسة حالة وشرحاً للتنفيذ.",
      techUsed: "التقنيات المستخدمة",
      description: "الوصف",
      visitSite: "زيارة الموقع",
      viewGithub: "المستودع على جيت هاب",
      videoUnsupported: "المتصفح لا يدعم تشغيل الفيديو.",
      closeSidebar: "إغلاق اللوحة",
    },
    contact: {
      thanksTitle: "شكراً لرسالتك!",
      thanksSub: "سأتواصل معك في أقرب وقت ممكن.",
      heading: "تواصل",
      headingAccent: "معي",
      sub: "شكراً لاهتمامك. كيف يمكنني مساعدتك اليوم؟",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك",
      messageLabel: "الرسالة",
      messagePlaceholder: "اكتب رسالتك",
      send: "إرسال",
      sending: "جاري الإرسال...",
      error: "تعذّر الإرسال. حاول مرة أخرى أو استخدم واتساب.",
      errorConfig:
        "نموذج البريد غير مهيأ بعد. استخدم واتساب أدناه، أو أضف مفاتيح EmailJS في إعدادات المشروع.",
      whatsappHint: "أو تواصل مباشرة عبر واتساب",
      whatsappCta: "تواصل عبر واتساب",
      socialHint: "تواصل معي عبر",
      ariaGitHub: "حساب جيت هاب",
      ariaLinkedIn: "حساب لينكد إن",
    },
  },
};

export function getProjectsForLocale(locale) {
  return buildProjects(locale);
}

export function getTranslation(locale) {
  return translations[locale] || translations.en;
}
