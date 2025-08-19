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
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Outsource Dedicated Node.js Developers from iFour Technolab",
    ctaTwoButtonText: "Let’s Connect",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Extensive Expertise",
      "Custom Solutions",
      "Agile Methodology",
      "Secured Solutions",
      "Timely Delivery",
      "Cost-effectiveness"
    ],
    serviceTwoTitle: "Why Hire Node.js Developers from iFour?",
    serviceTwoSubtitle: "Being a reliable and top-notch IT company, iFour aims to bring innovative solutions that help clients stay ahead of the race. iFour has helped more than 50+ start-ups with 15 industry verticals across the globe. Hence by connecting with us, clients can get solutions for all sorts of needs, no matter if they are starting small or have a big enterprise.",
    hireAboutSection: {
      hiringOptions: {
        title: "How to Hire Node.js Developers from iFour?",
        subtitle: "We have a team of programmers proficient in building robust solutions and helping you achieve the full potential of node technology",
        options: [
          "On an hourly basis",
          "As a part of the dedicated team"
        ]
      },
      hiringProcess: {
        title: "Hire top-tier Node.js developers in just a few easy steps.",
        steps: [
          "Collecting Project Requirements",
          "Sharing CVs of Node.js Developers",
          "Shortlisting The Programmer",
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
        <BreadCrumb sub_title="Hire Developers" title="Hire Node.js Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 