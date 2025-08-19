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


