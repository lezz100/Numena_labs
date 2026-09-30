export const proofItems = [
  {
    title: "Bookings handled without a staff member initiating",
    detail: "A patient messages your clinic on WhatsApp. The system responds, collects their details and books the slot. Your receptionist sees the appointment — not the exchange that created it.",
  },
  {
    title: "Reminders that go out on time, every time",
    detail: "24-hour appointment reminders go out by SMS. A no-show triggers a follow-up. Neither requires anyone on your team to remember to send it.",
  },
  {
    title: "One view of today's activity",
    detail: "Open the reporting view to see today's bookings, confirmed appointments, no-shows and outstanding payments — without calling departments or pulling spreadsheets.",
  },
];

export const afyaHeroFeature = {
  name: "AfyaHero",
  industry: "Healthcare",
  title: "A hospital operating system for the work around care.",
  problem:
    "Hospital teams need one place to coordinate appointments, records, billing, results and patient communication.",
  system:
    "Numena built AfyaHero as a hospital management system that brings those workflows into one platform.",
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
    title: "Daily coordination",
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
      "Make daily numbers — bookings, payments, no-shows — visible where decisions are being made.",
  },
];

export const deliveryModel = [
  {
    title: "Map where the manual work sits",
    description:
      "Start with the manual work, broken follow-up and fragmented information that make daily work harder.",
  },
  {
    title: "Design the connected workflow",
    description:
      "Clarify how requests are captured, routed, completed and made visible to the right people.",
  },
  {
    title: "Implement the operating system",
    description:
      "Bring the practical tools, automation and daily information into one considered way of working.",
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
    "A Systems Audit helps identify where manual work is accumulating, follow-up is breaking down and daily information is fragmented.",
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
