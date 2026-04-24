import {
  BriefcaseBusiness,
  GitBranch,
  GraduationCap,
  Link2,
  Mail,
  Phone,
  Rocket,
  Video,
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
  resumeUrl: "/resume/frans-budi-kashira-cv.pdf",
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
    icon: Link2,
    priority: true,
  },
  {
    label: "GitHub",
    href: "http://github.com/Frans-Budi",
    icon: GitBranch,
    priority: true,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    priority: true,
  },
  {
    label: "WhatsApp",
    href: siteConfig.whatsappUrl,
    icon: Phone,
    priority: true,
  },
  {
    label: "YouTube Demo",
    href: "https://www.youtube.com/watch?v=wozB7r4sTOo",
    icon: Video,
    priority: false,
  },
];

export const heroStats = [
  { label: "Programming Experience", value: "4+ yrs" },
  { label: "Flagship Fintech Build", value: "CPay" },
  { label: "Bachelor’s GPA", value: "3.95" },
];

export const experienceHighlights = [
  {
    title: "Freelance Mobile Developer",
    organization: "CPay, Fit Lit, and client product work",
    period: "Jan 2025 - Apr 2026",
    summary:
      "Built Flutter mobile apps, Next.js payment pages, Firebase-backed features, and backend services for real client products.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mobile Developer Intern",
    organization: "PT Bejana Investidata Globalindo",
    period: "Sep 2024 - Dec 2024",
    summary:
      "Delivered Flutter features for Risehand and Dzikra while collaborating with UI/UX, backend, and QA teams.",
    icon: Rocket,
  },
  {
    title: "CTO & Founder",
    organization: "BangunAja x KuliKu",
    period: "Jan 2023 - Feb 2024",
    summary:
      "Led a construction-service startup, recruited 16+ partners, validated product demand, joined incubators, and secured early funding.",
    icon: GraduationCap,
  },
];

export const skillGroups = [
  {
    title: "Mobile Development",
    items: ["Flutter", "Dart", "Native Android", "Kotlin", "State Management"],
  },
  {
    title: "Backend & Web",
    items: ["Next.js", "Express.js", "Laravel", "REST API", "Vue.js"],
  },
  {
    title: "Payments & Fintech",
    items: ["Tap Payments", "Payment Links", "Refunds", "Fee Logic", "Analytics"],
  },
  {
    title: "Databases & Services",
    items: ["Firebase", "Supabase", "Cloud Firestore", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Figma", "Postman", "Xcode", "Android Studio"],
  },
];

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

export const demoVideos = [
  {
    title: "Fit Lit Flutter Demo",
    project: "Fit Lit",
    note: "Interactive sports app demo showing guided games and progress flow.",
    youtubeUrl: "https://www.youtube.com/watch?v=wozB7r4sTOo",
    thumbnail: "/media/demo-fitlit-thumb.svg",
  },
  {
    title: "CPay Platform Preview",
    project: "CPay",
    note: "Placeholder preview slot for the flagship fintech workflow demo.",
    youtubeUrl: "",
    thumbnail: "/media/demo-cpay-thumb.svg",
  },
];
