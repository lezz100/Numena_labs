export const proofItems = [
  {
    title: "Intake that reaches the right workflow",
    detail: "Enquiries, requests and appointments can be captured and routed with context.",
  },
  {
    title: "Follow-up built into daily operations",
    detail: "Reminders and customer communication are designed into the process, not left to memory.",
  },
  {
    title: "Visibility for the people running the business",
    detail: "Reporting and status information help teams see what needs attention.",
  },
];

export const afyaHeroFeature = {
  name: "AfyaHero",
  industry: "Healthcare",
  title: "A hospital operating system for the work around care.",
  problem:
    "Hospital teams need a connected way to coordinate appointments, records, billing, results and patient communication.",
  system:
    "Numena built AfyaHero as a hospital management system that brings those operational workflows into one platform.",
  workflow: [
    "Appointment booking and reminders",
    "Digital patient records and notes",
    "Billing, payments and balance tracking",
    "Lab orders, results and reporting",
  ],
  href: "/work/afyahero",
};

export const operationalOutcomes = [
  {
    title: "Intake and follow-up",
    problem:
      "Requests arrive through different channels and important conversations are easy to miss.",
    response:
      "Connect enquiry capture, qualification and follow-up so each request has a clear next action.",
  },
  {
    title: "Daily operations",
    problem:
      "Teams coordinate work across messages, spreadsheets and disconnected tools.",
    response:
      "Translate routine work into shared workflows, reminders and practical handoffs.",
  },
  {
    title: "Customer retention",
    problem:
      "Customer communication depends on individual effort instead of a consistent process.",
    response:
      "Build repeatable reminders, updates and reactivation workflows around the customer journey.",
  },
  {
    title: "Decision visibility",
    problem:
      "Managers cannot reliably see what is happening across enquiries, work and customer activity.",
    response:
      "Make useful operational information available where decisions are being made.",
  },
];

export const deliveryModel = [
  {
    title: "Map the operational friction",
    description:
      "Start with the manual work, broken follow-up and fragmented information that make daily operations harder.",
  },
  {
    title: "Design the connected workflow",
    description:
      "Clarify how requests are captured, routed, completed and made visible to the right people.",
  },
  {
    title: "Implement the operating system",
    description:
      "Bring the practical tools, automation and operational information into one considered way of working.",
  },
  {
    title: "Support adoption",
    description:
      "Shape the system around the people who need to use it in their day-to-day work.",
  },
];

export const systemsAudit = {
  title: "Find the work that is getting in the way.",
  description:
    "A Systems Audit helps identify where manual work is accumulating, follow-up is breaking down and operational information is fragmented.",
};

// Retained for the retired homepage section components. They are intentionally
// empty so unsupported metrics and generic capability claims cannot resurface.
export const selectedWork = {
  eyebrow: "Selected Work",
  name: "AfyaHero",
  title: "Hospital Management System",
  description:
    "A connected system for hospital operations and patient communication.",
  stats: [] as { value: string; label: string }[],
  href: "/work/afyahero",
};

export const heroStats: { value: string; label: string }[] = [];
export const whatWeDo: { slug: string; title: string; description: string }[] = [];
export const processSteps: { number: string; title: string; description: string }[] = [];
