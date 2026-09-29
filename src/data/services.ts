export type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "strategy-positioning",
    title: "Strategy & Positioning",
    description: "We define your edge and growth roadmap.",
    items: [
      "Market Research",
      "Competitor Analysis",
      "Positioning Strategy",
      "Growth Roadmap",
      "KPI Framework",
    ],
  },
  {
    slug: "digital-presence-branding",
    title: "Digital Presence & Branding",
    description: "We build your brand and digital home.",
    items: [
      "Brand Identity",
      "Website Design",
      "Landing Pages",
      "UI/UX Design",
      "Google Business Setup",
      "Professional Emails",
    ],
  },
  {
    slug: "marketing-content",
    title: "Marketing & Content",
    description: "We create content and run campaigns that attract and convert.",
    items: [
      "Social Media Management",
      "Content Creation",
      "Paid Ads (Meta, Google, TikTok, LinkedIn)",
      "Email Marketing",
      "SMS Campaigns",
    ],
  },
  {
    slug: "lead-generation-capture",
    title: "Lead Generation & Capture",
    description: "We bring in qualified leads and capture them automatically.",
    items: [
      "Lead Ads & Funnels",
      "Landing Pages",
      "Lead Magnets",
      "AI Lead Capture",
      "Multi-Channel Capture",
    ],
  },
  {
    slug: "automation-ai-agents",
    title: "Automation & AI Agents",
    description: "We automate conversations, follow-ups and workflows with AI.",
    items: [
      "AI Receptionist",
      "WhatsApp Automation",
      "Email Automation",
      "Workflow Automation",
      "Task & Reminder Automation",
      "Smart Chatbots",
    ],
  },
  {
    slug: "business-systems-operations",
    title: "Business Systems & Operations",
    description: "We digitize and streamline your daily operations.",
    items: [
      "CRM Setup & Pipelines",
      "Booking & Scheduling",
      "Invoicing & Payments",
      "Inventory Management",
      "SOPs & Process Design",
      "Team Collaboration",
    ],
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "We turn data into insights that drive decisions.",
    items: [
      "Dashboard & Reports",
      "Sales & Revenue Tracking",
      "Marketing Analytics",
      "Customer Insights",
      "Performance KPIs",
      "Custom Reports",
    ],
  },
  {
    slug: "ai-advisory-integration",
    title: "AI Advisory & Integration",
    description: "We help you adopt AI the smart way.",
    items: [
      "AI Tools Advisory",
      "Custom Integrations",
      "API & Tool Integrations",
      "Data Management",
      "AI Training & Support",
    ],
  },
];

export const numenaSystem = {
  eyebrow: "The Numena System",
  title: "A proven end-to-end system that turns strangers into loyal customers on autopilot.",
  steps: [
    { title: "Attract", description: "We attract the right audience with content, ads and SEO." },
    { title: "Capture", description: "We capture leads across multiple channels automatically." },
    { title: "Automate", description: "We engage, qualify and nurture leads using AI and automation." },
    { title: "Convert", description: "We close more sales with optimized funnels and follow-ups." },
    { title: "Retain", description: "We delight customers and build loyalty with communication." },
    { title: "Analyze", description: "We measure performance and optimize for better results continuously." },
  ],
  result: "More Leads. More Sales. More Time. More Profit.",
};

export const whyNumena = [
  { title: "Save Time", description: "Automate repetitive tasks and free up your time." },
  { title: "Increase Revenue", description: "More leads, better conversions, higher profits." },
  { title: "Reduce Costs", description: "Eliminate manual work and costly inefficiencies." },
  { title: "Scale Confidently", description: "Systems that grow with your business effortlessly." },
  { title: "Local Expertise", description: "We understand the African market and speak your language." },
];
