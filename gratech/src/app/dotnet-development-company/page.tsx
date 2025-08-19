import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: ".NET Development Company - Gratech IT Services",
  description: ".NET development company for enterprise-grade solutions using ASP.NET, Azure, and modern Microsoft stack.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert .NET Development Services",
    description: "iFour builds scalable, secure, and high-performing .NET solutions for web, desktop, and cloud. We provide end-to-end development across domains and complexities.",
    benefits: [
      "ASP.NET Core expertise",
      "Cloud-native with Azure",
      "Microservices & APIs",
      "Enterprise security",
      "CI/CD automation",
      "Performance optimization",
    ],
    services: [
      ".NET Web Development",
      ".NET Mobile App Development",
      ".NET Desktop Development",
      ".NET Integration Services",
      ".NET Migration",
      ".NET Support & Maintenance",
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
    ctaTitle: "Build robust solutions on .NET",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Ready to modernize with .NET?",
    ctaTwoButtonText: "Talk to experts",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Quick Onboarding",
      "Proven Track Record",
      "User-centric Approach",
      "Competitive Pricing",
      "Comprehensive Services",
      "Experienced Team",
    ],
    serviceTwoTitle: "Why Choose iFour for .NET?",
    serviceTwoSubtitle: "Enterprise-grade delivery and reliability",
    hireAboutSection: {
      title: ".NET Development Services We Provide",
      description: "From greenfield development to modernization and integration, our .NET team delivers secure, fast, and scalable applications.",
      hiringOptions: {
        title: "Engagement Options",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our collaboration process",
        steps: [
          "Requirement Analysis",
          "Solution Proposal",
          "Team Onboarding",
          "Execution & Sprints",
          "Delivery & Support",
        ],
      },
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title=".NET Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


