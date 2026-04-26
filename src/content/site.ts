import {
  Blocks,
  Database,
  BriefcaseBusiness,
  Laptop,
  Phone,
  Rocket,
  ServerCog,
  Smartphone,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

export const siteConfig = {
  name: "Frans Budi Kashira",
  title: "Flutter Mobile Developer",
  url: "https://fransbudikashira.dev",
  description:
    "Flutter-focused mobile developer building real-world products across fintech, education, and digital business.",
  email: "fransbudikashira@gmail.com",
  phone: "+62 821 7905 2096",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=6282179052096&text&type=phone_number&app_absent=0",
  cvUrl: "/file/frans-budi-kashira-cv.pdf",
  resumeUrl: "/file/Resume_Frans Budi Kashira.pdf",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  {
    label: "LinkedIn",
    href: "http://linkedin.com/in/frans-budi-kashira/",
    logoSrc: "/social-media-logo/linkedin.svg",
    priority: true,
  },
  {
    label: "GitHub",
    href: "http://github.com/Frans-Budi",
    logoSrc: "/tech-logo/github.svg",
    priority: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    logoSrc: "/social-media-logo/gmail.svg",
    priority: true,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsappUrl,
    icon: Phone,
    logoSrc: "/social-media-logo/whatsapp.svg",
    priority: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@fransbudi21",
    logoSrc: "/social-media-logo/youtube.svg",
    priority: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fransbudi21",
    logoSrc: "/social-media-logo/instagram.svg",
    priority: false,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@fransbudi21",
    logoSrc: "/social-media-logo/tiktok.svg",
    priority: false,
  },
];

export const heroStats = [
  { label: "Programming Experience", value: "4+ yrs" },
  { label: "Flagship Fintech Build", value: "CPay" },
  { label: "Bachelor’s GPA", value: "3.95" },
];

export const aboutStrengths = [
  {
    label: "Mobile Delivery",
    title: "Flutter products built for real usage, not just demos.",
    description:
      "I focus on production-minded mobile delivery with clear UX, structured implementation, and practical feature execution across real product constraints.",
    icon: Smartphone,
  },
  {
    label: "End-to-End Execution",
    title: "Freelance scope that moves across mobile, web, and backend.",
    description:
      "My client work often spans Flutter apps, supporting web flows, Firebase-backed features, and integration-heavy product delivery rather than isolated screens.",
    icon: Blocks,
  },
  {
    label: "Product Collaboration",
    title: "Comfortable working with design, backend, and QA teams.",
    description:
      "Internship and delivery work taught me how to ship smoothly inside cross-functional teams where alignment and consistency matter as much as code quality.",
    icon: Users,
  },
  {
    label: "Startup Perspective",
    title: "Technical execution shaped by validation and product judgment.",
    description:
      "My CTO and founder background adds a stronger sense of business reality, prioritization, and validation to how I build and evaluate product decisions.",
    icon: Rocket,
  },
] as const;

export const experienceHighlights = [
  {
    title: "Freelance Mobile Developer",
    organization: "CPay, Fit Lit, and client product work",
    period: "Jan 2025 - Apr 2026",
    summary:
      "Built Flutter mobile apps, Next.js payment pages, Firebase-backed features, and backend services for real client products.",
    icon: Laptop,
  },
  {
    title: "Mobile Developer Intern",
    organization: "PT Bejana Investidata Globalindo",
    period: "Sep 2024 - Dec 2024",
    summary:
      "Delivered Flutter features for Risehand and Dzikra while collaborating with UI/UX, backend, and QA teams.",
    icon: BriefcaseBusiness,
  },
  {
    title: "CTO & Founder",
    organization: "BangunAja x KuliKu",
    period: "Jan 2023 - Feb 2024",
    summary:
      "Led a construction-service startup, recruited 16+ partners, validated product demand, joined incubators, and secured early funding.",
    icon: Rocket,
  },
];

export const skillGroups = [
  {
    title: "Mobile Development",
    description: "Shipping production-ready Flutter experiences across real product flows.",
    icon: Smartphone,
    emphasis: "primary",
    items: [
      { label: "Flutter", logoSrc: "/tech-logo/flutter.svg" },
      { label: "Dart", logoSrc: "/tech-logo/dart.svg" },
      { label: "Native Android", logoSrc: "/tech-logo/android.svg" },
      { label: "Kotlin", logoSrc: "/tech-logo/kotlin.svg" },
      { label: "Jetpack Compose", logoSrc: "/tech-logo/jetpackcompose.svg" },
      { label: "Xcode", logoSrc: "/tech-logo/xcode.svg" },
      { label: "Android Studio", logoSrc: "/tech-logo/androidstudio.svg" },
      { label: "GetX", logoSrc: "/tech-logo/getx.svg" },
      { label: "State Management" },
    ],
  },
  {
    title: "Backend & Web",
    description: "Supporting product flows, APIs, dashboards, and integration-heavy delivery.",
    icon: ServerCog,
    emphasis: "secondary",
    items: [
      { label: "Next.js", logoSrc: "/tech-logo/nextdotjs.svg" },
      { label: "Express.js", logoSrc: "/tech-logo/express.svg" },
      { label: "Laravel", logoSrc: "/tech-logo/laravel.svg" },
      { label: "REST API" },
      { label: "Vue.js", logoSrc: "/tech-logo/vuedotjs.svg" },
    ],
  },
  {
    title: "Payments & Fintech",
    description: "Implementing transaction logic, payment links, refund flows, and reporting.",
    icon: Wallet,
    emphasis: "secondary",
    items: [
      { label: "Tap Payments" },
      { label: "Payment Links" },
      { label: "Refunds" },
      { label: "Fee Logic" },
      { label: "Analytics" },
    ],
  },
  {
    title: "Databases & Services",
    description: "Delivering across managed app services, persistence, and cloud-backed features.",
    icon: Database,
    emphasis: "supporting",
    items: [
      { label: "Firebase", logoSrc: "/tech-logo/firebase.svg" },
      { label: "Supabase", logoSrc: "/tech-logo/supabase.svg" },
      { label: "Cloud Firestore" },
      { label: "PostgreSQL", logoSrc: "/tech-logo/postgresql.svg" },
      { label: "MongoDB", logoSrc: "/tech-logo/mongodb.svg" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "Using practical engineering tools and AI assistance to move delivery faster.",
    icon: Wrench,
    emphasis: "supporting",
    items: [
      { label: "Git", logoSrc: "/tech-logo/git.svg" },
      { label: "Figma", logoSrc: "/tech-logo/figma.svg" },
      { label: "Postman", logoSrc: "/tech-logo/postman.svg" },
      { label: "Codex", logoSrc: "/tech-logo/codex.svg" },
      { label: "GitHub Copilot", logoSrc: "/tech-logo/githubcopilot.svg" },
      { label: "ChatGPT", logoSrc: "/tech-logo/openai.svg" },
    ],
  },
] as const;

export const certifications = [
  {
    title: "Bangkit Academy 2024",
    provider: "Google, GoTo, Traveloka",
    note: "Mobile Development cohort, selected among 55,000 participants.",
  },
  {
    title: "Dicoding Android Track",
    provider: "Dicoding",
    note: "Kotlin, Android fundamentals, intermediate Android, SOLID, Git, AI, ML for Android, and Jetpack Compose.",
  },
  {
    title: "WPU Course",
    provider: "Web Programming UNPAS",
    note: "MERN Stack and Fullstack Next.js real-time point-of-sales courses.",
  },
  {
    title: "Digital Business",
    provider: "Universitas Pendidikan Indonesia",
    note: "GPA 3.95/4.00 across 147 credits.",
  },
];

export const learningHighlights = [
  {
    title: "Bangkit Academy 2024",
    meta: "Google, GoTo, Traveloka",
    note: "Mobile Development cohort selected from 55,000 participants.",
  },
  {
    title: "Digital Business Degree",
    meta: "Indonesia University of Education",
    note: "Graduated with GPA 3.95/4.00 across 147 credits.",
  },
  {
    title: "Android & Kotlin Track",
    meta: "Dicoding",
    note: "Selected certifications across Kotlin, Android fundamentals, and intermediate Android.",
  },
] as const;
