import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "Java Development Company - Gratech IT Services",
  description: "Java development services for enterprise apps, cloud-native systems, and platform engineering.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert Java Development Services",
    description: "We build scalable, secure, and high-availability Java applications with modern architectures and DevOps.",
    benefits: [
      "Spring Boot microservices",
      "Cloud-native delivery",
      "Enterprise integrations",
      "Performance tuning",
      "Automated QA",
      "Observability",
    ],
    services: [
      "Enterprise App Development",
      "Product Development Expertise",
      "Cloud-native Software Development",
      "Software App Re-engineering",
      "Architecture & Design Consulting",
      "Support and Maintenance",
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
    ctaTitle: "Accelerate with Java",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Let’s discuss your Java roadmap",
    ctaTwoButtonText: "Talk to experts",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Vast Talent Pool",
      "Java Industry Expertise",
      "Java Communication",
      "Java Cost Solutions",
      "Java Agile Process",
      "Java Quick Hiring",
    ],
    serviceTwoTitle: "Why Choose iFour for Java?",
    serviceTwoSubtitle: "Scalable delivery with modern Java",
    hireAboutSection: {
      title: "Java Development Services We Provide",
      description: "From greenfield to modernization, we deliver reliable Java solutions across industries.",
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
      title: "Why Java is Ideal for Enterprise Development?",
      description: "Java is a robust, object-oriented programming language that has been the backbone of enterprise software development for decades. Since its introduction by Sun Microsystems, Java has become the preferred choice for building scalable, secure, and high-performance applications that power businesses worldwide.\n\nWith its 'Write Once, Run Anywhere' philosophy, extensive ecosystem, and enterprise-grade features, Java stands as the top choice for enterprise development today. Java continues to dominate the enterprise landscape, thanks to its reliability, security, and vast community support that ensures long-term stability and growth.\n\nLet us explore the key reasons why businesses should consider Java for their enterprise development:",
      benefits: [
        "Platform Independence",
        "Enterprise-Grade Security",
        "High Performance",
        "Scalable Architecture",
        "Rich Ecosystem",
        "Strong Typing",
        "Garbage Collection",
        "Extensive Libraries"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Java Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


