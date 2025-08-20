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
        title: ".NET Engagement Models",
        options: ["Fixed-price projects", "Dedicated .NET team", "Hourly consulting"],
      },
      hiringProcess: {
        title: "Our .NET Development Process",
        steps: [
          "Requirement Analysis & Planning",
          "Architecture Design",
          "Development & Testing",
          "Deployment & Integration",
          "Support & Maintenance",
        ],
      },
    },
    whyChooseUs: {
      title: "Why Choose Us as Your .NET Development Company?",
      paragraphs: [
        "iFour Technolab specializes in enterprise-grade .NET solutions with deep expertise in ASP.NET Core, Azure, and modern Microsoft technologies. Our certified .NET developers deliver robust, scalable applications that drive business growth and digital transformation.",
        "With over a decade of .NET development experience, we've successfully delivered hundreds of projects across industries. Our commitment to Microsoft best practices, security-first approach, and performance optimization makes us your trusted .NET development partner."
      ],
      ctaText: "Hire .NET developers",
      ctaLink: "/hire-dot-net-developer",
      ctaSuffix: "from iFour to build enterprise-grade applications with cutting-edge Microsoft technologies."
    },
    angularBenefits: {
      title: "Why .NET is Ideal for Enterprise Application Development?",
      description: "Microsoft's .NET framework is a powerful, versatile platform that has revolutionized enterprise software development. Since its introduction, .NET has become the go-to choice for building robust, scalable, and secure applications that drive business success across industries.\n\nWith its comprehensive ecosystem, extensive library support, and seamless integration capabilities, .NET stands as the premier choice for enterprise development today. .NET continues to evolve and dominate, thanks to Microsoft's unwavering commitment, a vast developer community, and cutting-edge features that set it apart from other platforms.\n\nLet us explore the key reasons why businesses should consider .NET for their enterprise application development:",
      benefits: [
        "Enterprise-Grade Security",
        "Cross-Platform Compatibility",
        "High Performance & Scalability",
        "Rapid Development",
        "Rich Ecosystem",
        "Cloud-Native Support",
        "Comprehensive Testing",
        "Microsoft Backing"
      ]
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


