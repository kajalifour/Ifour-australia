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
    showServicesGrid: true
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