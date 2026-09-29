export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Systems", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Study", href: "/work/afyahero" },
  { label: "About", href: "/about" },
];

export const primaryCta: NavLink = {
  label: "Request a Systems Audit",
  href: "/contact",
};

export const secondaryCta: NavLink = {
  label: "View AfyaHero",
  href: "/work/afyahero",
};

export const footerNav = {
  explore: primaryNav,
};

export const contactDetails = {
  email: "numenalabs@outlook.com",
  phone: "+254 700 888 719",
  whatsapp: "https://wa.me/254700888719",
  location: "Eldoret, Kenya",
};
