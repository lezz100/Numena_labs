import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Merged desks — LegalDesk and BusinessDesk now live under ProfessionalDesk
      {
        source: "/industries/legaldesk",
        destination: "/industries/professionaldesk",
        permanent: true,
      },
      {
        source: "/industries/businessdesk",
        destination: "/industries/professionaldesk",
        permanent: true,
      },
      // Dropped desks — no equivalent page; send to the catalogue
      {
        source: "/industries/propertydesk",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/industries/tradedesk",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/industries/contentdesk",
        destination: "/industries",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
