import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "Node.js Development Company - Gratech IT Services",
  description: "Node.js development services for APIs, real-time apps, and scalable backends.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert Node.js Development Services",
    description: "Build reliable, scalable, and high‑performance backends and APIs with our Node.js specialists.",
    benefits: [
      "Event‑driven architecture",
      "API performance",
      "Microservices & messaging",
      "DevOps & CI/CD",
      "Security best practices",
      "Cloud deployments",
    ],
    services: [
      "Node.js Web & Network App Development",
      "Node.js API Development Service",
      "Consulting, Maintenance & Support Service",
      "Custom Web App Development",
      "Content Management System",
      "Microservices Architecture",
      "E-commerce Web Development",
      "Node.js Plugin Development",
      "Migration to the Latest Version",
    ],
    showServiceCards: true,
    showProjects: true,
    showClients: true,
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true,
    showAbout: true,
    showServicesGrid: true,
    ctaTitle: "Scale with Node.js",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Build fast, reliable APIs",
    ctaTwoButtonText: "Talk to experts",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Extensive Expertise",
      "End-to-end Solution",
      "Total Transparency",
      "Faster Delivery",
      "Cutting-edge Technology",
      "Customized Solution",
    ],
    serviceTwoTitle: "Why Choose iFour for Node.js?",
    serviceTwoSubtitle: "High‑performance backends at speed",
    hireAboutSection: {
      title: "Node.js Development Services We Provide",
      description: "From APIs to microservices, we deliver performant, secure Node.js solutions.",
      hiringOptions: {
        title: "Engagement Options",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our collaboration process",
        steps: ["Requirements", "Team match", "Onboarding", "Sprints", "Delivery"],
      },
    },
    angularBenefits: {
      title: "Why Node.js is Ideal for Backend Development?",
      description: "Node.js is a powerful JavaScript runtime that has revolutionized server-side development. Since its introduction, Node.js has become the preferred choice for building fast, scalable, and efficient backend applications and APIs that power modern web and mobile applications.\n\nWith its event-driven, non-blocking I/O architecture and extensive npm ecosystem, Node.js stands as the top choice for backend development today. Node.js continues to dominate the server-side landscape, thanks to its exceptional performance, developer-friendly nature, and seamless JavaScript integration that enables full-stack development.\n\nLet us explore the key reasons why businesses should consider Node.js for their backend development:",
      benefits: [
        "Event-Driven Architecture",
        "Non-Blocking I/O",
        "Fast Performance",
        "Scalable Applications",
        "Rich NPM Ecosystem",
        "Full-Stack JavaScript",
        "Real-Time Capabilities",
        "Cross-Platform Support"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Node.js Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


