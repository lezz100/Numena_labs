export type Service = {
  slug: string;
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "automation-ai-agents",
    title: "Automation & AI Agents",
    description:
      "For service businesses where staff spend time on repetitive enquiries, booking confirmations and manual follow-ups. Numena configures a WhatsApp assistant, automated SMS reminders and message routing so the routine communication happens without a team member initiating it. A Nairobi dental clinic, for instance, can run appointment confirmations, 24-hour reminders and no-response flags through WhatsApp — the receptionist sees only the exceptions. If the assistant receives a message it cannot handle, it replies with a holding message ('Let me connect you with our team') and alerts a staff member — no enquiry falls through without someone on your team knowing about it.",
    items: [
      "WhatsApp Assistant & AI Receptionist",
      "Appointment Booking via WhatsApp",
      "Automated SMS & WhatsApp Reminders",
      "Message Routing & Escalation Rules",
      "Follow-up & Reactivation Workflows",
    ],
  },
  {
    slug: "business-systems-operations",
    title: "Business Systems & Operations",
    description:
      "For businesses coordinating daily work across WhatsApp threads, paper registers or disconnected spreadsheets. Numena builds the connected setup: booking and scheduling, customer records, invoicing and M-Pesa payment collection — with defined handoffs between staff instead of decisions made through group chats. An Eldoret pharmacy, for instance, can take a prescription order via WhatsApp, generate an invoice, collect M-Pesa payment and send an SMS collection notification from one system.",
    items: [
      "Booking & Scheduling System",
      "Customer & Patient Records",
      "Invoicing & M-Pesa Payment Collection",
      "Inventory Tracking",
      "Team Task Assignment & Handoffs",
      "SOPs & Process Documentation",
    ],
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    description:
      "For managers who have no reliable view of what is happening across bookings, payments and team activity without asking staff or pulling spreadsheets together manually. Numena builds the reporting setup: visits booked versus attended, outstanding M-Pesa payments, staff workload by day — surfaced in one place without manual compilation. An Eldoret hotel manager, for example, can see occupancy, pending settlements and this week's bookings at a glance instead of calling three departments.",
    items: [
      "Operational Dashboard",
      "Booking & Attendance Tracking",
      "No-show & Cancellation Reporting",
      "Revenue & Payment Tracking",
      "Staff & Workload Reports",
      "Custom Report Configuration",
    ],
  },
  {
    slug: "ai-advisory-integration",
    title: "AI Advisory & Integration",
    description:
      "For businesses that have explored AI tools but aren't sure which ones fit their actual workflow — or have invested in tools that were never properly configured and ended up unused. Numena assesses which tools fit the actual workflow, configures them into existing processes and connects them to systems already in use. A Nairobi law firm, for instance, might get a WhatsApp intake form integrated with their existing case tracking process — rather than a new platform requiring migration.",
    items: [
      "AI Tools Assessment & Selection",
      "WhatsApp Business API Setup",
      "API & System Integrations",
      "M-Pesa & Payment Gateway Connections",
      "Data Migration & Cleanup",
      "Ongoing Configuration Support",
    ],
  },
];

export const numenaSystem = {
  eyebrow: "The Numena System",
  title:
    "This is how Numena builds a working system — from the first enquiry to the information managers need to make decisions.",
  steps: [
    {
      title: "Intake",
      description:
        "We map every channel customers use to reach the business — WhatsApp, SMS, phone, web form — and connect each one to a defined workflow so every request has a next step.",
    },
    {
      title: "Reaches the right person",
      description:
        "We define which requests go to which person or queue, with what context attached, so nothing waits in a shared inbox for someone to decide what to do with it.",
    },
    {
      title: "Workflow",
      description:
        "We design the sequence of steps that follows each request: who acts, in what order, what the handoff looks like, and what happens when a step is missed.",
    },
    {
      title: "Follow-up",
      description:
        "We configure the automated reminders, confirmations and check-ins that keep customer communication moving — without a staff member needing to remember each one.",
    },
    {
      title: "Reporting",
      description:
        "We set up the view managers need: bookings, completions, outstanding payments, no-shows — without manual data gathering from multiple sources.",
    },
    {
      title: "Adoption",
      description:
        "We build around what the team will actually use, on the channels they already have, and stay involved during the first weeks to adjust based on real use.",
    },
  ],
  result:
    "A system the team can actually operate — built around the workflow, not the other way around.",
};

export const whyNumena = [
  {
    title: "Your patients already use WhatsApp",
    description:
      "Booking, reminders and follow-up happen through WhatsApp. Patients don't download an app or create an account. It works on whatever phone they already carry.",
  },
  {
    title: "M-Pesa connected from the start",
    description:
      "Invoicing, payment collection and payment confirmations are built into the workflow with M-Pesa — not handled separately or added later as an afterthought.",
  },
  {
    title: "Designed around your team, not the software",
    description:
      "The system is built around the steps your staff currently take and adjusted during the first weeks of actual use. The goal is minimal disruption to how the clinic already runs.",
  },
  {
    title: "The audit shows you the problem before you commit",
    description:
      "The Systems Audit maps where manual work is accumulating and what a connected system would change. There is no engagement required to see that picture.",
  },
  {
    title: "We have built for a healthcare provider in this market",
    description:
      "AfyaHero is a hospital management system we built for an East African healthcare provider — connecting appointments, records, billing, lab results and patient communication. It is what we point to when someone asks if we have done this before.",
  },
];
