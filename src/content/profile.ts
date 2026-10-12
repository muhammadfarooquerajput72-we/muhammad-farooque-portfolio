import type { Profile } from "@/types/content";

export const profile = {
  name: "Muhammad Farooque",
  location: "Islamabad",
  positioning: "Learning across tech. Building in public.",
  pillars: [
    {
      id: "support",
      label: "Support",
      description: "Practical IT and technical support",
    },
    {
      id: "secure",
      label: "Secure",
      description: "Cybersecurity learning and authorized lab practice",
    },
    {
      id: "build",
      label: "Build",
      description: "Rapid software development with AI-assisted tools",
    },
    {
      id: "create",
      label: "Create",
      description: "AI video, advertising, and YouTube workflows",
    },
  ],
} as const satisfies Profile;

export const experience = [
  {
    title: "YouTube Content & Digital Platform Manager",
    organization: "Self-employed",
    dates: "Mar 2023 - Present",
    location: "Pakistan · Remote",
    description:
      "I manage end-to-end content operations across four YouTube channels, covering research, production workflows, publishing, and performance review.",
  },
  {
    title: "Freelance Digital Assistant & Client Manager",
    organization: "Freelance",
    dates: "May 2024 - Aug 2024",
    location: "Remote",
    description:
      "I supported international clients with digital content, project coordination, and AI-assisted writing and editing.",
  },
  {
    title: "Junior IT Support Assistant",
    organization: "HNS Services International",
    dates: "Feb 2024 - Sep 2024",
    location: "Islamabad · On-site",
    description:
      "I provided day-to-day IT support for company staff and office computers. I helped install and configure Windows, applications, drivers, and commonly used office software.",
  },
] as const;

export const education = [
  {
    institution: "Virtual University of Pakistan (VU)",
    program: "Computer Science",
    status: "Current student",
  },
] as const;

export const certifications = [
  {
    title: "AIRMUN'25",
    issuer: "Air University",
    issued: "2025",
  },
  {
    title: "Diploma in Information Technology",
    issuer: "Sindh Board of Technical Education",
  },
  {
    title: "Freedom with AI",
    issuer: "Independent learning",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issued: "Jun 2026",
  },
  {
    title: "C++ Essentials 1",
    issuer: "Cisco",
    issued: "Jun 2025",
    credentialId: "6e2694fa-4d00-49d6-911b-2b083754ba2f",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issued: "Dec 2024",
    credentialId: "9dc007d5-36fa-4a5d-9fa-679c272e3863",
  },
] as const;
