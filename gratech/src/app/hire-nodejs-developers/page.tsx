import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire Node.js Developers - Gratech IT Services",
  description: "Hire experienced Node.js developers for your backend and web application projects. Professional Node.js development services.",
};

const page = () => {
  const hireData = {
    title: "Hire Node.js Developers",
    subtitle: "Expert Node.js Development Services",
    description: "Hire skilled Node.js developers who excel in building scalable backend applications, APIs, and real-time web solutions. Our developers are experts in Node.js, Express.js, and modern JavaScript development practices.",
    benefits: [
      "Expert knowledge of Node.js runtime environment",
      "JavaScript and TypeScript expertise",
      "Express.js and middleware development",
      "Real-time applications with Socket.io",
      "Microservices architecture design",
      "Performance optimization and scalability"
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
      "Migration to the Latest Version"
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
    ctaTitle: "Overcome Scalability Issues with Our Node.js Solutions",
    ctaButtonText: "Let’s Discuss Your Project",
    ctaButtonLink: "/contact"
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Hire Developers" title="Hire Node.js Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 