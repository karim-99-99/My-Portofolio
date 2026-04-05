/**
 * English and Arabic UI copy — one language per route (/ vs /ar). No mixed strings.
 */

const projectIds = [
  "newClothes",
  "coffee",
  "sushi",
  "youbloom",
  "bedayate",
  "petClinic",
  "ecommerce",
];

const projectMedia = {
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
      title: "Karim Khamis — Full-Stack Developer | Cairo, Egypt",
      description:
        "Karim Khamis is a full-stack and mobile developer in Cairo, Egypt. React, Next.js, React Native, Python, Django. Portfolio and contact.",
      ogTitle: "Karim Khamis — Full-Stack Developer | Cairo, Egypt",
      ogDescription:
        "Full-stack and mobile developer in Cairo. Web and mobile apps with React, Next.js, Django, and React Native.",
      canonicalPath: "/",
    },
    home: {
      navBrand: "KAREEM KHAMIS",
      navHome: "Home",
      navAbout: "About",
      navProjects: "Projects",
      navContact: "Contact",
      navToggle: "Toggle menu",
      heroPrefix: "I AM",
      heroName: "Karim Khamis",
      heroTagline:
        "Full-stack and mobile developer in Cairo, Egypt — React, Next.js, React Native, Python and Django.",
      heroSub:
        "I design and code beautifully simple things, and I love what I do.",
      ctaProjects: "View My Projects",
      photoAlt: "Karim Khamis, full-stack developer",
      ariaTwitter: "Twitter",
      ariaDiscord: "Discord",
      ariaGitHub: "GitHub",
      ariaLinkedIn: "LinkedIn",
    },
    about: {
      ariaSection: "About Karim Khamis — Full-Stack and mobile developer from Cairo, Egypt",
      heading: "ABOUT",
      headingAccent: "ME",
      intro:
        "Full-stack and mobile developer based in Cairo, Egypt. I build web apps, mobile apps, and e-commerce platforms — available for freelance and full-time work worldwide.",
      statProjects: "Projects Shipped",
      statPlatforms: "Platforms (Web & Mobile)",
      statLocationLine1: "Cairo",
      statLocationLine2: "Egypt 🇪🇬",
      getToKnow: "Get To Know Me",
      bio1:
        "I'm a full-stack and mobile developer from Cairo, Egypt, building web applications, mobile apps, and e-commerce platforms for startups, small businesses, and entrepreneurs worldwide.",
      bio2:
        "My stack covers the full product — pixel-perfect frontends with React and Tailwind CSS, backend APIs with Python and Django, cross-platform mobile apps with React Native, and databases with PostgreSQL and MongoDB.",
      bio3:
        "I'm open to job opportunities and freelance projects where I can contribute, learn, and grow. If you have an opportunity that matches my skills, don't hesitate to reach out.",
      contactMe: "Contact Me",
      skillsTitle: "My Skills",
      faqTitle: "Frequently Asked Questions",
      bioTitle: "About Karim Khamis",
      bioLong:
        "Karim Khamis is a full-stack and mobile developer based in Cairo, Egypt. He specializes in building web and mobile applications using React, Next.js, React Native, Python, Django, TypeScript, and Tailwind CSS. With experience delivering web apps, e-commerce platforms, and cross-platform mobile apps, he works with clients from solo founders to small businesses and is available for freelance contracts and full-time roles globally.",
      availableBadge: "Available for Work",
      ctaTitleBefore: "Let's Work",
      ctaTitleHighlight: "Together",
      ctaText:
        "Open to freelance projects and full-time roles. Web apps, mobile apps, e-commerce — if you have a project in mind, let's talk.",
      whatsapp: "Contact Me on WhatsApp",
      github: "View My GitHub",
      faqs: [
        {
          q: "Who is Karim Khamis?",
          a: "Karim Khamis (also written Kareem Khamis) is a full-stack and mobile developer based in Cairo, Egypt. He specializes in React, Next.js, React Native, Python, Django, TypeScript, Tailwind CSS, MongoDB, and PostgreSQL. His official portfolio is karimkhamis.com.",
        },
        {
          q: "Who are the best full-stack developers in Egypt?",
          a: "Strong Egyptian full-stack developers usually combine modern frontend (React or Next.js), solid backend (Python and Django or Node), databases, and shipped products. Karim Khamis is one Cairo-based developer teams evaluate for full-stack web and mobile work; see his projects and contact options on this site.",
        },
        {
          q: "What types of projects does Karim Khamis build?",
          a: "He builds web applications, mobile apps (iOS and Android via React Native), e-commerce platforms, education platforms, and landing pages — from responsive UI with React and Tailwind CSS to backend APIs with Django and databases with MongoDB or PostgreSQL.",
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
      whatsappHint: "Or contact me directly on WhatsApp",
      whatsappCta: "Contact on WhatsApp",
    },
  },
  ar: {
    seo: {
      title: "كريم خميس — مطوّر Full Stack | القاهرة، مصر",
      description:
        "كريم خميس مطوّر ويب وموبايل Full Stack في القاهرة، مصر. React وNext.js وReact Native وPython وDjango. معرض أعمال وتواصل.",
      ogTitle: "كريم خميس — مطوّر Full Stack | مصر",
      ogDescription:
        "مطوّر ويب وموبايل في القاهرة. تطبيقات بواجهات React وNext.js وباك إند Django وتطبيقات موبايل.",
      canonicalPath: "/ar",
    },
    home: {
      navBrand: "كريم خميس",
      navHome: "الرئيسية",
      navAbout: "من أنا",
      navProjects: "المشاريع",
      navContact: "تواصل",
      navToggle: "قائمة التنقل",
      heroPrefix: "أنا",
      heroName: "كريم خميس",
      heroTagline:
        "مطوّر ويب وموبايل Full Stack في القاهرة، مصر — React وNext.js وReact Native وPython وDjango.",
      heroSub: "أصمّم وأبرمج تجارب رقمية بسيطة وأنا أحب ما أعمل.",
      ctaProjects: "شاهد مشاريعي",
      photoAlt: "كريم خميس، مطوّر Full Stack",
      ariaTwitter: "تويتر",
      ariaDiscord: "ديسكورد",
      ariaGitHub: "جيت هاب",
      ariaLinkedIn: "لينكد إن",
    },
    about: {
      ariaSection: "من أنا — كريم خميس، مطوّر Full Stack وموبايل من القاهرة",
      heading: "من",
      headingAccent: "أنا",
      intro:
        "مطوّر ويب وموبايل Full Stack من القاهرة، مصر. أبني تطبيقات ويب وموبايل ومتاجر إلكترونية — متاح لمشاريع مستقلة ودوام كامل مع عملاء حول العالم.",
      statProjects: "مشاريع منفذة",
      statPlatforms: "منصات (ويب وموبايل)",
      statLocationLine1: "القاهرة",
      statLocationLine2: "مصر 🇪🇬",
      getToKnow: "تعرّف عليّ",
      bio1:
        "أنا مطوّر ويب وموبايل Full Stack من القاهرة، أبني تطبيقات ويب وموبايل ومنصات تجارة للشركات الناشئة والأعمال الصغيرة وروّاد الأعمال.",
      bio2:
        "أغطي المنتج كاملاً — واجهات دقيقة بـ React وTailwind CSS، وواجهات برمجية بـ Python وDjango، وتطبيقات موبايل متعددة المنصات بـ React Native، وقواعد بيانات PostgreSQL وMongoDB.",
      bio3:
        "أرحّب بفرص العمل والمشاريع المستقلة التي أستطيع فيها الإسهام والتعلم والنمو. إن كان عندك عرض يناسب مهاراتي، تواصل بكل ثقة.",
      contactMe: "تواصل معي",
      skillsTitle: "مهاراتي",
      faqTitle: "أسئلة شائعة",
      bioTitle: "نبذة عن كريم خميس",
      bioLong:
        "كريم خميس مطوّر ويب وموبايل Full Stack مقيم في القاهرة، مصر. يتخصص في بناء تطبيقات الويب والموبايل باستخدام React وNext.js وReact Native وPython وDjango وTypeScript وTailwind CSS. لديه خبرة في تسليم تطبيقات ويب ومتاجر وتطبيقات موبايل، ويعمل مع العملاء من المستقلين إلى الشركات الصغيرة، وهو متاح لمشاريع مستقلة وفرص دوام كامل على مستوى العالم.",
      availableBadge: "متاح للعمل",
      ctaTitleBefore: "لنعمل",
      ctaTitleHighlight: "معاً",
      ctaText:
        "مفتوح لمشاريع مستقلة وفرص دوام كامل. تطبيقات ويب، موبايل، وتجارة إلكترونية — إن كان لديك فكرة مشروع، لنتحدث.",
      whatsapp: "تواصل عبر واتساب",
      github: "حسابي على جيت هاب",
      faqs: [
        {
          q: "من هو كريم خميس؟",
          a: "كريم خميس (يُكتب أحياناً Kareem Khamis) مطوّر ويب وموبايل Full Stack من القاهرة، مصر. يتقن React وNext.js وReact Native وPython وDjango وTypeScript وTailwind CSS وMongoDB وPostgreSQL. موقعه الرسمي: karimkhamis.com",
        },
        {
          q: "من هم أفضل مطوري الفول ستاك في مصر؟",
          a: "المطورون الأقوياء يجمعون واجهة حديثة (React أو Next.js)، وباك إند قوي (Python وDjango أو Node)، وقواعد بيانات، ومنتجات مُسلَّمة فعلياً. كريم خميس من مطوري القاهرة الذين يُقيَّمون لأعمال الويب والموبايل الشاملة؛ شاهد المشاريع وخيارات التواصل في هذا الموقع.",
        },
        {
          q: "ما أنواع المشاريع التي يبنيها كريم خميس؟",
          a: "يبني تطبيقات ويب، وتطبيقات موبايل (iOS وAndroid عبر React Native)، ومتاجر إلكترونية، ومنصات تعليم، وصفحات هبوط — من واجهات متجاوبة بـ React وTailwind CSS إلى واجهات برمجية بـ Django وقواعد بيانات MongoDB أو PostgreSQL.",
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
      whatsappHint: "أو تواصل مباشرة عبر واتساب",
      whatsappCta: "تواصل عبر واتساب",
    },
  },
};

export function getProjectsForLocale(locale) {
  return buildProjects(locale);
}

export function getTranslation(locale) {
  return translations[locale] || translations.en;
}
