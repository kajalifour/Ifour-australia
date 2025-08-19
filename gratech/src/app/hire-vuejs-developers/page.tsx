import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire Vue.js Developers - Gratech IT Services",
  description: "Hire experienced Vue.js developers for your web application projects. Professional Vue.js development services.",
};

const page = () => {
  const hireData = {
    title: "Hire Vue.js Developers",
    subtitle: "Expert Vue.js Development Services",
    description: "Hire skilled Vue.js developers who excel in building modern, responsive web applications. Our developers are experts in Vue.js framework, JavaScript, and modern web development practices.",
    benefits: [
      "Expert knowledge of Vue.js framework",
      "JavaScript and TypeScript expertise",
      "Component-based architecture design",
      "Vuex state management experience",
      "Responsive design and mobile-first approach",
      "Testing with Jest and Vue Test Utils"
    ],
    services: [
      "Vue.js UI Development",
      "Custom Web App Development",
      "Progressive Web App (PWA) Development",
      "MVP/PoC Development",
      "Vue.js App Migration",
      "Support & Maintenance"
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
    ctaTitle: "Need expert Vue.js developers to enhance your project?",
    ctaButtonText: "Let’s Discuss Your Project",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Engage with Top Vue.js Developers Within Minutes.",
    ctaTwoButtonText: "Let’s Connect",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Technical Efficiency",
      "Cost Saving",
      "Assured Quality",
      "Hassle-Free Recruitment",
      "User-centered Approach",
      "Cloud Solutions & Migration"
    ],
    serviceTwoTitle: "Why Work with iFour?",
    serviceTwoSubtitle: "iFour provides a reliable team of Vue.js programmers who dedicatedly work toward bringing your ideas to reality by incorporating the best development methods. By joining hands with iFour, clients can obtain the following benefits.",
    hireAboutSection: {
      hiringOptions: {
        title: "How to Hire Vue.js Developers from iFour?",
        subtitle: "Our specialists provide more than code, assisting at every step to lead you to the right path of success. Our hassle-free hiring process helps clients get the right resources on time.\n\nHire Vue,js developers in two following ways:",
        options: [
          "On an hourly basis",
          "As a part of the dedicated team"
        ]
      },
      hiringProcess: {
        title: "Hire top-tier Vue.js developers in just a few easy steps.",
        steps: [
          "Collecting Project Requirements",
          "Sharing CVs of Vue.js Developers",
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
        <BreadCrumb sub_title="Hire Developers" title="Hire Vue.js Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 