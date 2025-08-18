import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire Java Developers - Gratech IT Services",
  description: "Hire experienced Java developers for your enterprise application projects. Professional Java development services.",
};

const page = () => {
  const hireData = {
    title: "Hire Java Developers",
    subtitle: "Expert Java Development Services",
    description: "Hire skilled Java developers who excel in building robust enterprise applications, web solutions, and scalable systems. Our developers are experts in Java, Spring Boot, and modern development practices.",
    benefits: [
      "Access to top-tier Java talent",
      "Flexible engagement models",
      "Cost-effective development",
      "Timely project delivery",
      "Scalable and secure solutions",
      "Ongoing support and maintenance"
    ],
    services: [
      "Enterprise App Development",
      "Product Development Expertise",
      "Cloud-native Software Development",
      "Software App Re-engineering",
      "Architecture & Design Consulting",
      "Support and Maintenance"
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
    ctaTitle: "Looking for an expert Java development team? Get started with us.",
    ctaButtonText: "Let’s Discuss Your Project",
    ctaButtonLink: "/contact",
    serviceTwoServices: [
      "Vast Talent Pool",
      "Industry Expertise",
      "Transparent Communication",
      "Cost-effective Solution",
      "Agile Methodology",
      "Quick Hiring"
    ],
    serviceTwoTitle: "Why Hire Java Developers from iFour?",
    serviceTwoSubtitle: "With a team of certified Java experts, we specialize in creating secure and scalable solutions tailored to your unique business needs. Here are the potential benefits of relying on iFour to onboard the dedicated Java expert.",
    hireAboutSection: {
      hiringOptions: {
        title: "How to Hire Java Developers from iFour?",
        subtitle: "You can hire Java developers in two following ways.",
        options: [
          "On an hourly basis",
          "As a part of the dedicated team"
        ]
      },
      hiringProcess: {
        title: "Easy steps to onboard the top Java programmers.",
        steps: [
          "Share with us your requirements",
          "Analyze resumes of qualified resources",
          "Shortlist and interview the programmer",
          "Agreement and Payment Procedure",
          "Introducing Team Members to the Client",
          "Discussing Project Objectives",
          "Preparing the Work Environment",
          "Project Begins"
        ]
      }
    }
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Hire Developers" title="Hire Java Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 