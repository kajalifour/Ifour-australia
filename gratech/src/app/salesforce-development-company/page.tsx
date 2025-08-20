import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "Salesforce Development Company - Gratech IT Services",
  description: "Salesforce development, customization, and integration services to extend your CRM capabilities.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert Salesforce Development Services",
    description: "We help businesses customize, integrate, and extend Salesforce to streamline operations and drive growth.",
    benefits: [
      "Custom objects & workflows",
      "Apex & Lightning components",
      "Third‑party integrations",
      "Automation & reporting",
      "Data migration",
      "Ongoing support",
    ],
    services: [
      "Salesforce Implementation",
      "Custom App Development",
      "Salesforce Integration",
      "Salesforce Migration",
      "Salesforce Support & Maintenance",
      "Analytics & Reporting",
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
    ctaTitle: "Enhance your Salesforce platform",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Talk to our Salesforce specialists",
    ctaTwoButtonText: "Get in touch now",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Custom Solutions",
      "Agile Methodology",
      "Secured Solutions",
      "Timely Delivery",
      "Cost-effectiveness",
      "Ongoing Tech Support",
    ],
    serviceTwoTitle: "Why Choose iFour for Salesforce?",
    serviceTwoSubtitle: "Tailored CRM solutions for growth",
    hireAboutSection: {
      title: "Salesforce Services We Provide",
      description: "End‑to‑end Salesforce consulting, development, and support to unlock CRM value.",
      hiringOptions: {
        title: "Engagement Options",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our collaboration process",
        steps: ["Discovery", "Solutioning", "Onboarding", "Build", "Rollout"],
      },
    },
    angularBenefits: {
      title: "Why Salesforce is Ideal for CRM Development?",
      description: "Salesforce is the world's leading customer relationship management (CRM) platform that has revolutionized how businesses manage customer interactions. Since its introduction, Salesforce has become the preferred choice for building comprehensive, scalable, and intelligent CRM solutions that drive business growth and customer satisfaction.\n\nWith its cloud-native architecture, extensive customization capabilities, and powerful automation features, Salesforce stands as the top choice for CRM development today. Salesforce continues to dominate the CRM landscape, thanks to its innovative features, robust ecosystem, and continuous innovation that keeps businesses ahead of the competition.\n\nLet us explore the key reasons why businesses should consider Salesforce for their CRM development:",
      benefits: [
        "Cloud-Native Platform",
        "Comprehensive CRM Features",
        "Extensive Customization",
        "Powerful Automation",
        "Rich App Ecosystem",
        "AI-Powered Insights",
        "Scalable Architecture",
        "Enterprise Security"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Salesforce Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


