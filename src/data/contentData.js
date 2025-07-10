// Community Members Data
export const communityMembers = [
  {
    id: 1,
    src: "/fiturs/pwc.png",
    alt: "PwC Logo",
    name: "PwC",
  },
  {
    id: 2,
    src: "/fiturs/Aon.webp",
    alt: "Aon Logo",
    name: "Aon",
  },
  {
    id: 3,
    src: "/fiturs/hansaworld.png",
    alt: "HansaWorld Logo",
    name: "HansaWorld",
  },
  {
    id: 4,
    src: "/fiturs/infor.png",
    alt: "Infor Logo",
    name: "Infor",
  },
  {
    id: 5,
    src: "/fiturs/mc.png",
    alt: "Mc Logo",
    name: "Mc",
  },
  {
    id: 6,
    src: "/fiturs/sage.png",
    alt: "Sage Logo",
    name: "Sage",
  },
];

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Align People, Process, and Pipeline",
    description:
      "Eliminate guesswork. Create clarity. Bring your sales team into full alignment by unifying tools, targets, and tasks.",
    subDescription:
      "Slerate syncs your entire sales universe into one orchestrated workflow that reduces friction and boosts focus.",
    image: {
      src: "/fiturs/feedback.png",
      alt: "Sales Pipeline Alignment Dashboard",
    },
    layout: "image-left",
  },
  {
    id: 2,
    title: "Streamline Your Sales Process",
    description:
      "Automate repetitive tasks and focus on what matters most - closing deals. Our intelligent system handles the routine work while you build relationships.",
    subDescription:
      "Transform your sales operations with smart automation that scales with your business growth and adapts to your unique workflow.",
    image: {
      src: "/fiturs/feedback.png",
      alt: "Sales Process Automation Interface",
    },
    layout: "image-right",
  },
  {
    id: 3,
    title: "Data-Driven Sales Insights",
    description:
      "Make informed decisions with real-time analytics and comprehensive reporting that reveals exactly where your opportunities lie.",
    subDescription:
      "Track performance, identify trends, and optimize your sales strategy with actionable insights that drive measurable results.",
    image: {
      src: "/fiturs/feedback.png",
      alt: "Sales Analytics Dashboard",
    },
    layout: "image-left",
  },
];

// CTA Section Data
export const ctaData = {
  title: "Ready to Build a Smarter Sales Machine?",
  description:
    "Slerate gives you the strategy, structure, and system to grow without limits. Your future revenue team starts here.",
  buttons: [
    {
      id: 1,
      text: "Get Started",
      type: "primary",
      style: "bg-white text-[#011533] hover:bg-gray-100",
    },
    {
      id: 2,
      text: "Book Your Demo Now",
      type: "secondary",
      style:
        "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#011533]",
    },
  ],
};

// Header Data
export const headerData = {
  title: {
    main: "Everything You Need to",
    highlight: "Accelerate Sales",
    suffix: "In One Platform.",
  },
  description:
    "Slerate Sales Boost gives your team the clarity, automation, and coaching they need to scale revenue—without increasing headcount.",
  buttons: [
    {
      id: 1,
      text: "Get Started",
      type: "primary",
      style: "bg-white hover:bg-gray-50",
    },
    {
      id: 2,
      text: "Watch Product Demo",
      type: "secondary",
      style:
        "bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900",
      icon: "/vector/play.png",
    },
  ],
  backgroundImage: "/headers/bg.png",
  heroImage: "/headers/task.png",
};
// Footer Section Data
export const footerData = {
  socialLinks: [
    {
      id: 1,
      icon: "FaInstagram",
      href: "https://instagram.com/sleratehq",
    },
    {
      id: 2,
      icon: "FaXTwitter",
      href: "https://x.com/sleratehq",
    },
    {
      id: 3,
      icon: "FaLinkedinIn",
      href: "https://linkedin.com/company/slerate",
    },
    {
      id: 4,
      icon: "FaFacebookF",
      href: "https://facebook.com/slerate",
    },
  ],
  columns: [
    {
      title: "Services",
      items: [
        { label: "Consulting", href: "https://slerate.com/consulting/" },
        { label: "Augmentation", href: "https://slerate.com/augmentation/" },
        { label: "Talent", href: "https://slerate.com/talent/" },
      ],
    },
    {
      title: "Company",
      items: [
        {
          label: "Sustainability",
          href: "https://slerate.com/sustainability/",
        },
        { label: "Careers", href: "https://slerate.com/careers/" },
      ],
    },
    {
      title: "Community",
      items: [
        {
          label: "Sign Up",
          href: "https://slerate.com/community/community-form/",
        },
        { label: "Insights", href: "https://slerate.com/insights/" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Get in Touch", href: "https://slerate.com/contact-us/" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Term Of Use", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};
