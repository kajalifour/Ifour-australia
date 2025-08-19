import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "React.js Development Company - Gratech IT Services",
  description: "React.js development services for modern, scalable, and high‑performing frontend applications.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert React.js Development Services",
    description: "Build responsive, maintainable, and fast React applications with our experienced engineers and UI experts.",
    benefits: [
      "Modern React & TypeScript",
      "Component-driven development",
      "State management",
      "SSR/SSG with Next.js",
      "Testing & accessibility",
      "Performance best practices",
    ],
    services: [
      "React Web App Development",
      "Next.js Development",
      "UI/UX Implementation",
      "API Development & Integration",
      "Migration to React",
      "Support & Maintenance",
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
    ctaTitle: "Build with React experts",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Move faster with React",
    ctaTwoButtonText: "Talk to experts",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Technical Efficiency",
      "User-centered Approach",
      "Custom Solutions",
      "Agile Methodology",
      "Secured Solutions",
      "Timely Delivery",
    ],
    serviceTwoTitle: "Why Choose iFour for React?",
    serviceTwoSubtitle: "Modern, scalable frontends",
    hireAboutSection: {
      title: "React.js Development Services We Provide",
      description: "We craft interactive, accessible, and maintainable React applications for the web.",
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
        <BreadCrumb sub_title="Technologies" title="React.js Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


