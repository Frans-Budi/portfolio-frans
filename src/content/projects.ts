export type ProjectTier = "flagship" | "strong" | "supporting";

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortSummary: string;
  longSummary: string;
  stack: string[];
  thumbnail: string;
  heroImage: string;
  gallery: string[];
  demoUrl?: string;
  role: string;
  duration: string;
  featured: boolean;
  tier: ProjectTier;
  clientContext?: string;
  problem: string;
  solution: string;
  outcome: string;
  highlights: string[];
  technicalHighlights: string[];
  featureGroups: {
    title: string;
    items: string[];
  }[];
};

export const projects: Project[] = [
  {
    slug: "cpay",
    title: "CPay",
    category: "Fintech Mobile & Web Platform",
    shortSummary:
      "Merchant fintech platform with Flutter mobile app, payment web flows, backend services, admin operations, and analytics.",
    longSummary:
      "CPay is a fintech platform for a Saudi Arabia-based client covering merchant onboarding, invoices, orders, payment links, product links, refunds, admin operations, payment gateway integration, and business analytics.",
    stack: [
      "Flutter",
      "Dart",
      "Next.js",
      "Express.js",
      "Firebase",
      "Tap Payments",
      "Cloud Functions",
    ],
    thumbnail: "/media/project-cpay-cover.svg",
    heroImage: "/media/project-cpay-cover.svg",
    gallery: [
      "/media/project-cpay-cover.svg",
      "/media/project-cpay-flow.svg",
      "/media/project-cpay-admin.svg",
    ],
    role: "End-to-end freelance developer",
    duration: "Jul 2025 - Apr 2026",
    featured: true,
    tier: "flagship",
    clientContext: "Saudi Arabia-based client",
    problem:
      "Merchants needed one operational platform to manage invoices, orders, payment links, product sales, refunds, onboarding, fees, taxes, and customer-facing checkout experiences.",
    solution:
      "Built an end-to-end platform across Flutter mobile, Next.js web payment flows, Express.js backend services, Firebase infrastructure, Tap Payments integration, and admin analytics.",
    outcome:
      "The platform gives merchants a structured payment and business-management workflow while giving administrators visibility into transactions, merchant approvals, subscriptions, sectors, revenue, and regional insights.",
    highlights: [
      "Owned planning and implementation across mobile app, web flows, backend, and admin features.",
      "Designed merchant workflows for invoices, orders, products, payment links, receipts, refunds, QR sharing, and WhatsApp sharing.",
      "Implemented bilingual customer-facing payment experiences and configurable fee or tax responsibility.",
    ],
    technicalHighlights: [
      "Tap Payment Gateway onboarding, legal document submission, and payment processing.",
      "Local payment support including Visa, Mastercard, Mada, Apple Pay, and STC Pay.",
      "Firebase analytics jobs for scheduled reporting and operational dashboards.",
      "Product commerce flows for physical products and file or link-based digital products.",
    ],
    featureGroups: [
      {
        title: "Merchant Onboarding",
        items: ["Profile setup", "Legal document submission", "Approval flow"],
      },
      {
        title: "Payment Workflows",
        items: ["Invoices", "Orders", "Payment links", "Refunds", "Receipts"],
      },
      {
        title: "Business Management",
        items: ["Products", "Categories", "Product groups", "Checkout flows"],
      },
      {
        title: "Admin & Analytics",
        items: ["Merchant approval", "Revenue analytics", "Regional insights"],
      },
    ],
  },
  {
    slug: "fit-lit",
    title: "Fit Lit",
    category: "Education & Sports Mobile App",
    shortSummary:
      "Interactive Flutter sports app with guided games, school assessments, role-based access, and offline-first sync.",
    longSummary:
      "Fit Lit guides children through physical activities and later expanded into a school assessment platform where teachers evaluate students and students view transparent scores.",
    stack: ["Flutter", "Firebase", "Cloud Functions", "Remote Config", "Offline-first"],
    thumbnail: "/media/project-fitlit-cover.svg",
    heroImage: "/media/project-fitlit-cover.svg",
    gallery: ["/media/project-fitlit-cover.svg", "/media/project-fitlit-flow.svg"],
    demoUrl: "https://www.youtube.com/watch?v=wozB7r4sTOo",
    role: "Flutter mobile developer",
    duration: "Jan 2025 - Jul 2025",
    featured: true,
    tier: "strong",
    problem:
      "Schools and children needed a more engaging way to complete physical activities, submit feedback, and track progress or evaluation results.",
    solution:
      "Implemented guided activity flows, authentication, role-based authorization, teacher scoring, student result views, offline-first data sync, and dynamic static game content through Firebase Remote Config.",
    outcome:
      "Fit Lit became a more complete learning and assessment experience for students, teachers, and administrators.",
    highlights: [
      "Built login, registration, guest access, game guides, evaluation forms, and progress tracking.",
      "Added teacher, student, and admin roles for Fit Lit 2.0.",
      "Optimized uploaded files to reduce storage and bandwidth use.",
    ],
    technicalHighlights: [
      "Firebase Functions for automatic data synchronization.",
      "Remote Config for updating static game content without app redeployment.",
      "Offline-first architecture for reliable school usage.",
    ],
    featureGroups: [
      {
        title: "Student Experience",
        items: ["Guided games", "Progress tracking", "Evaluation results"],
      },
      {
        title: "Teacher Tools",
        items: ["1-5 scoring", "Total score calculation", "Class evaluation"],
      },
      {
        title: "Admin Control",
        items: ["School profiles", "Teacher approval", "Class management"],
      },
    ],
  },
  {
    slug: "bangunaja",
    title: "BangunAja",
    category: "Construction Services Marketplace",
    shortSummary:
      "Construction service platform connecting users with skilled professionals based on proximity, reviews, portfolios, and expertise.",
    longSummary:
      "BangunAja x KuliKu was a startup product focused on helping consumers find trusted construction partners for repair and building needs.",
    stack: ["Startup CTO", "Product Strategy", "Mobile Product", "Validation", "Marketplace"],
    thumbnail: "/media/project-bangunaja-cover.svg",
    heroImage: "/media/project-bangunaja-cover.svg",
    gallery: ["/media/project-bangunaja-cover.svg"],
    role: "CTO & Founder",
    duration: "Jan 2023 - Feb 2024",
    featured: true,
    tier: "strong",
    problem:
      "Consumers needed a more reliable way to discover construction workers and services with trust signals like reviews, portfolios, proximity, and expertise.",
    solution:
      "Led product and technical direction for a marketplace-style construction application, while validating demand and building a partner network.",
    outcome:
      "The startup recruited 16+ construction partners, validated 10 of 11 must-have product assumptions, joined multiple incubators, and secured early funding.",
    highlights: [
      "4th winner at KT&G Startup School SangSang Univ Indonesia.",
      "Secured KRW 1,000,000 scholarship from KT&G Scholarship Foundation.",
      "Reached TOP 5 at The Greater Hub SBM ITB and TOP 40 at Diplomat Entrepreneur Network.",
    ],
    technicalHighlights: [
      "Marketplace product planning.",
      "Partner onboarding and validation workflow.",
      "Service discovery based on trust and proximity signals.",
    ],
    featureGroups: [
      {
        title: "Marketplace Signals",
        items: ["Reviews", "Affiliates", "Proximity", "Portfolios"],
      },
      {
        title: "Startup Execution",
        items: ["Partner recruitment", "Incubator validation", "Fundraising"],
      },
    ],
  },
  {
    slug: "presence",
    title: "Presence",
    category: "Employee Attendance App",
    shortSummary:
      "Attendance management app with authentication, role-based authorization, profile management, password recovery, and location tracking.",
    longSummary:
      "Presence helps organizations manage employee attendance with secure authentication, roles, profile workflows, recovery flows, and location-aware attendance records.",
    stack: ["Flutter", "Firebase", "Authentication", "Authorization", "Location"],
    thumbnail: "/media/project-presence-cover.svg",
    heroImage: "/media/project-presence-cover.svg",
    gallery: ["/media/project-presence-cover.svg"],
    role: "Mobile developer",
    duration: "Supporting project",
    featured: true,
    tier: "strong",
    problem:
      "Teams need reliable attendance capture with secure access control and employee profile workflows.",
    solution:
      "Built a Flutter attendance system with authentication, role authorization, email password recovery, profile management, and location tracking.",
    outcome:
      "Presence demonstrates practical business app patterns including secure access, structured user roles, and location-aware operations.",
    highlights: [
      "Role-based authorization.",
      "Location tracking for attendance context.",
      "Email-based password recovery.",
    ],
    technicalHighlights: ["Firebase auth", "Location services", "Profile data management"],
    featureGroups: [
      {
        title: "Attendance",
        items: ["Clock-in flow", "Location tracking", "Employee records"],
      },
      {
        title: "Account",
        items: ["Authentication", "Role access", "Password recovery"],
      },
    ],
  },
  {
    slug: "chatgpt",
    title: "ChatGPT",
    category: "AI Interaction App",
    shortSummary:
      "AI-powered app for text, voice, and image interaction using GPT, DALL-E 3, and Whisper.",
    longSummary:
      "A multimodal AI application exploring text generation, voice input, and image generation through OpenAI-powered workflows.",
    stack: ["Flutter", "OpenAI", "GPT", "DALL-E 3", "Whisper"],
    thumbnail: "/media/project-chatgpt-cover.svg",
    heroImage: "/media/project-chatgpt-cover.svg",
    gallery: ["/media/project-chatgpt-cover.svg"],
    role: "Mobile developer",
    duration: "Supporting project",
    featured: true,
    tier: "strong",
    problem:
      "Users need a compact way to explore text, voice, and image AI interactions in one mobile experience.",
    solution:
      "Built an AI-powered app that integrates GPT for text, Whisper for voice, and DALL-E 3 for image generation flows.",
    outcome:
      "The app shows practical API integration, multimodal UX thinking, and modern AI tooling awareness.",
    highlights: [
      "Text interaction through GPT.",
      "Voice workflow using Whisper.",
      "Image generation using DALL-E 3.",
    ],
    technicalHighlights: ["OpenAI API integration", "Prompt-driven UX", "Multimodal state handling"],
    featureGroups: [
      {
        title: "AI Modes",
        items: ["Text", "Voice", "Image"],
      },
      {
        title: "Mobile UX",
        items: ["Conversation flow", "Media response handling", "Fast actions"],
      },
    ],
  },
  {
    slug: "chefies",
    title: "Chefies",
    category: "Food Recommendation App",
    shortSummary:
      "Food recommendation app using machine learning to suggest menus based on available ingredients.",
    longSummary:
      "Chefies helps users decide what to cook by recommending menus from ingredients they already have.",
    stack: ["Flutter", "Machine Learning", "Recommendation UX", "Firebase"],
    thumbnail: "/media/project-chefies-cover.svg",
    heroImage: "/media/project-chefies-cover.svg",
    gallery: ["/media/project-chefies-cover.svg"],
    role: "Mobile developer",
    duration: "Supporting project",
    featured: false,
    tier: "supporting",
    problem:
      "Users often have ingredients available but need quick menu ideas that match what they can cook now.",
    solution:
      "Created a mobile recommendation experience that turns available ingredients into relevant food suggestions.",
    outcome:
      "Chefies demonstrates practical ML-assisted product thinking for everyday consumer decision making.",
    highlights: ["Ingredient-based recommendations", "Simple consumer UX", "ML-assisted menu ideas"],
    technicalHighlights: ["Recommendation flow", "Mobile-first form UX", "Firebase-ready data model"],
    featureGroups: [
      {
        title: "Recommendation",
        items: ["Ingredient input", "Menu suggestions", "Recipe discovery"],
      },
    ],
  },
  {
    slug: "whatsapp-clone",
    title: "WhatsApp Clone",
    category: "Real-time Messaging App",
    shortSummary:
      "Messaging app with OTP login, text and image messaging, and online or offline presence indicators.",
    longSummary:
      "A real-time messaging project focused on authentication, media messaging, and presence-state patterns.",
    stack: ["Flutter", "Firebase", "OTP Auth", "Realtime Messaging", "Storage"],
    thumbnail: "/media/project-whatsapp-clone-cover.svg",
    heroImage: "/media/project-whatsapp-clone-cover.svg",
    gallery: ["/media/project-whatsapp-clone-cover.svg"],
    role: "Mobile developer",
    duration: "Supporting project",
    featured: false,
    tier: "supporting",
    problem:
      "Real-time chat products need reliable authentication, message delivery, media sharing, and presence indicators.",
    solution:
      "Built a WhatsApp-style messaging app with OTP login, text messages, image messages, and online/offline state.",
    outcome:
      "The project demonstrates real-time app architecture and Firebase-backed social product patterns.",
    highlights: ["OTP login", "Text and image chat", "Online/offline indicators"],
    technicalHighlights: ["Realtime database patterns", "Firebase Storage", "Presence state"],
    featureGroups: [
      {
        title: "Messaging",
        items: ["Text messages", "Image messages", "Presence indicators"],
      },
      {
        title: "Access",
        items: ["OTP login", "User profile", "Session handling"],
      },
    ],
  },
  {
    slug: "easyprod",
    title: "EasyProd",
    category: "Product Management App",
    shortSummary:
      "Product management application with QR code scanning for fast employee product search and management.",
    longSummary:
      "EasyProd helps employees quickly find and manage product data using QR scanning and structured product records.",
    stack: ["Flutter", "QR Scanner", "Product Data", "Mobile Workflow"],
    thumbnail: "/media/project-easyprod-cover.svg",
    heroImage: "/media/project-easyprod-cover.svg",
    gallery: ["/media/project-easyprod-cover.svg"],
    role: "Mobile developer",
    duration: "Supporting project",
    featured: false,
    tier: "supporting",
    problem:
      "Employees need a faster way to find and manage product data without manually searching through long lists.",
    solution:
      "Built a mobile product-management workflow centered on QR code scanning and quick product lookup.",
    outcome:
      "EasyProd demonstrates operational app design for inventory-adjacent workflows and employee productivity.",
    highlights: ["QR code scanning", "Product lookup", "Employee-friendly workflow"],
    technicalHighlights: ["Scanner integration", "Structured product data", "Mobile-first operations"],
    featureGroups: [
      {
        title: "Operations",
        items: ["QR scan", "Product search", "Product management"],
      },
    ],
  },
];
