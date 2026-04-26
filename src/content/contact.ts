export const contactPageContent = {
  eyebrow: "Contact",
  title: "Let’s talk about product work.",
  description:
    "Reach out through the channel that fits your pace. Email is best for formal inquiries, and WhatsApp works well for a quick discussion.",
  primaryAction: {
    label: "Email",
    hrefType: "email",
    title: "Formal project inquiry",
    description: "Best for scoped freelance work, product collaboration, and hiring conversations.",
    cta: "Send an Email",
    logoSrc: "/social-media-logo/gmail.svg",
    emphasis: "primary",
  },
  actions: [
    {
      label: "WhatsApp",
      hrefType: "whatsapp",
      title: "Quick discussion",
      description: "Best for faster back-and-forth when you want to discuss fit or next steps.",
      cta: "Open WhatsApp",
      logoSrc: "/social-media-logo/whatsapp.svg",
      emphasis: "secondary",
    },
    {
      label: "LinkedIn",
      hrefType: "linkedin",
      title: "Professional profile",
      description: "Useful for reviewing background, experience, and a more formal public profile.",
      cta: "Open LinkedIn",
      logoSrc: "/social-media-logo/linkedin.svg",
      emphasis: "secondary",
    },
  ],
} as const;
