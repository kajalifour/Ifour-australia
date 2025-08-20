import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "C# Development Company - Gratech IT Services",
  description: "C# development services for web, desktop, and cloud applications using modern .NET ecosystem.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert C# Development Services",
    description: "Build modern, secure, and maintainable software with our experienced C# engineers across domains and platforms.",
    benefits: [
      "Modern C# and .NET Core",
      "Clean architecture & SOLID",
      "API-first development",
      "Automated testing",
      "DevOps readiness",
      "Cloud integrations",
    ],
    services: [
      "Custom Software Development",
      "C# SaaS Development",
      "C# PaaS Development",
      "C# Cloud Development",
      "C# Migration Services",
      "C# Integration Services",
      "Mobile App Development",
      "Windows App Development",
      "C# Support and Maintenance",
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
    ctaTitle: "Build with C# experts",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Kickstart your C# project",
    ctaTwoButtonText: "Get in touch now",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Talented Team",
      "Quick Hiring",
      "Industry Expertise",
      "Qualitative Solutions",
      "24*7 Support",
    ],
    serviceTwoTitle: "Why Choose iFour for C#?",
    serviceTwoSubtitle: "Reliable delivery with modern practices",
    hireAboutSection: {
      title: "C# Development Services We Provide",
      description: "We create robust, high-performing C# solutions with a focus on scalability and maintainability.",
      hiringOptions: {
        title: "Engagement Options",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our collaboration process",
        steps: [
          "Requirement Analysis",
          "Profile Sharing",
          "Shortlisting",
          "Contract & Kickoff",
          "Project Initiation",
        ],
      },
    },
    angularBenefits: {
      title: "Why C# is Ideal for Modern Software Development?",
      description: "C# is a powerful, object-oriented programming language developed by Microsoft that has become the cornerstone of modern software development. Since its introduction, C# has evolved into the preferred choice for building robust, scalable, and high-performance applications across web, desktop, mobile, and cloud platforms.\n\nWith its strong typing, extensive .NET ecosystem, and modern language features, C# stands as the top choice for enterprise development today. C# continues to dominate the software development landscape, thanks to its versatility, performance, and seamless integration with Microsoft technologies that enable rapid development and deployment.\n\nLet us explore the key reasons why businesses should consider C# for their software development:",
      benefits: [
        "Strong Typing System",
        "Object-Oriented Design",
        "Cross-Platform Support",
        "Rich .NET Ecosystem",
        "High Performance",
        "Modern Language Features",
        "Microsoft Backing",
        "Extensive Libraries"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="C# Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


