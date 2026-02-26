// Joan Runyiri Portfolio Data - Updated
import jojosBoutick from "@/assets/JojosBoutick.webp"
import lipay from "@/assets/Lipay.webp"
import findAVet from "@/assets/FindAVet.webp"
import project from "@/assets/project.webp"

export const profileData = {
  name: "Joan Runyiri",
  title: "Software Developer",
  tagline: "Crafting elegant digital experiences",
  email: "joanrnyarua@gmail.com",
  phone: "+254111620459",
  location: "Nairobi, Kenya",
  yearsExperience: 4,
  bio: "I’m a full-stack developer with 4+ years of experience building products across fintech, e-commerce, and SaaS; working with teams in Kenya, Australia, Denmark, and the US. I’m drawn to collaborative environments where there’s room to grow, learn better ways of doing things, and ship work that actually goes live. I care about clean, purposeful code and building things that solve real problems for real people."
};

export const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "React Native", "JavaScript", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Django", "Spring Boot", "Python", "Java"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { category: "Tools", items: ["AWS", "Azure", "Docker", "Git"] }
];

export const projects = [
  {
    id: 1,
    title: "Jojo's Boutique",
    description: "A curated fashion e-commerce store built for the Kenyan market, with M-Pesa payments and Pick Up Mtaani delivery integration for a fully local shopping experience.",
    tech: ["React", "Node.js", "MongoDB", "M-Pesa API"],
    image: jojosBoutick,
    features: ["E-commerce", "M-Pesa Payments", "Order Tracking", "Product Reviews"],
    link: "#"
  },
  {
    id: 2,
    title: "Lipay",
    description: "A payment platform that lets businesses send invoices, collect payments in-app, and automate recurring billing; with a Kotlin mobile companion for on-the-go management.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Kotlin"],
    image: lipay,
    features: ["Stripe Payments", "PDF Invoices", "Mobile App", "Real-time Tracking"],
    link: "#"
  },
  {
    id: 3,
    title: "Trace",
    description: "A project progress tool that keeps clients in the loop. Teams publish updates, clients comment and give feedback; no email chains, no status-update calls.",
    tech: ["Next.js", "TypeScript", "Supabase"],
    image: project,
    features: ["Project Management", "Progress Updates", "Client Feedback"],
    link: "#"
  },
  {
    id: 4,
    title: "FindAVet",
    description: "FindAVet helps pet owners in underserved areas locate and book veterinary care fast.",
    tech: ["Python", "React", "MongoDB"],
    image: findAVet,
    features: ["Easy Booking", "Direct Chat", "Emergency Care", "Pet Profiles"],
    link: "#"
  },
  {
    id: 5,
    title: "Campaign Management Platform",
    description: "A marketing platform where teams build, preview, and track campaigns in real time; with A/B testing and an analytics dashboard to measure what's actually working.",
    tech: ["Vue.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: ["Analytics Dashboard", "A/B Testing", "Template Builder", "Real-time Preview"],
    link: "#"
  },
  {
    id: 6,
    title: "Bancassurance Platform",
    description: "A backend system connecting banks and insurance providers, with automated claims processing, refund handling, and a maker-checker approval flow for financial compliance.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    features: ["Claims Management", "Refund Processing", "Holiday Handler", "Maker-Checker Auth"],
    link: "#"
  }
];

export const experience = [
  {
    company: "Fluentos",
    location: "Denmark",
    role: "Software Developer",
    period: "Sep 2025 - Present",
    highlights: [
      "Built a campaign management platform enabling marketers to create, schedule, and track campaigns in real time",
      "Developed analytics dashboards that surfaced actionable performance insights across active campaigns",
      "Optimised frontend rendering pipeline for seamless live campaign previews"
    ]
  },
  {
    company: "E&M Technologies",
    location: "Kenya",
    role: "Software Developer",
    period: "Apr 2025 - Sep 2025",
    highlights: [
      "Developed a bancassurance platform bridging banks and insurance providers for streamlined policy management",
      "Built a claims management system that reduced manual processing through automated approval workflows",
      "Designed core backend services handling financial data exchange between institutional partners"
    ]
  },
  {
    company: "Lipay",
    location: "Australia",
    role: "Full-stack Developer",
    period: "Nov 2024 - Mar 2025",
    highlights: [
      "Built an invoicing and payment platform allowing businesses to bill clients and collect payments in-app",
      "Implemented recurring billing functionality to automate subscription and retainer payment cycles",
      "Integrated Stripe for secure, real-time payment processing across web and mobile"
    ]
  },
  {
    company: "Cybasoft",
    location: "USA",
    role: "Full Stack Developer",
    period: "Dec 2023 - May 2024",
    highlights: [
      "Designed and built RESTful APIs consumed across web and mobile clients",
      "Delivered full-stack features using Laravel and Filament within an agile cross-functional team",
      "Contributed to internal tooling that improved operational efficiency for client workflows"
    ]
  },
  {
    company: "RealTime Knowledge",
    location: "Australia",
    role: "Full-Stack Developer",
    period: "May 2022 - Apr 2023",
    highlights: [
      "Optimised frontend and backend performance, significantly improving page load times",
      "Implemented SEO best practices that improved organic search visibility for client platforms",
      "Maintained and enhanced existing JavaScript and Python codebases across multiple projects"
    ]
  }
];

export const education = [
  {
    institution: "Strathmore University",
    degree: "MSc Information Technology",
    year: "2025",
    focus: "Business Intelligence & Data Analytics"
  },
  {
    institution: "KCA University",
    degree: "BSc Business & Information Technology",
    year: "2022",
    focus: "Software Engineering"
  }
];

export const certifications = [
  { name: "Microsoft Azure", issuer: "Institute of Advanced Technology", year: "2022" },
  { name: "Cloud Development", issuer: "Udacity", year: "2022" },
  { name: "Full Stack Development", issuer: "Emobilis", year: "2021" }
];
