export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  industry: string;
  description: string;
  problem: string;
  system: string;
  features: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "afyahero",
    name: "AfyaHero",
    title: "Hospital management system",
    industry: "Healthcare",
    description:
      "A connected system for the work that supports patient care, from appointments and records to billing, results and communication.",
    problem:
      "Hospital teams need a reliable way to coordinate patient administration, clinical information and communication across the day.",
    system:
      "AfyaHero brings the defined operational workflows into one hospital management system, so the work around care has a shared home.",
    features: [
      "Appointment booking, calendar sync, reminders and waitlist management",
      "Digital patient records with history, notes and attachments",
      "Invoicing, M-Pesa and card payments with balance tracking",
      "Lab orders, results tracking and imaging report storage",
      "SMS, WhatsApp and email reminders and follow-ups",
      "Revenue, visits and no-show reporting",
    ],
  },
];
