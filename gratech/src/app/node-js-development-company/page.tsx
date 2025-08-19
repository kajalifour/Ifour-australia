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


