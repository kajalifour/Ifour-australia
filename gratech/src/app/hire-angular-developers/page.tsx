import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire Angular Developers - Gratech IT Services",
  description: "Hire experienced Angular developers for your web application projects. Professional Angular development services.",
};

const page = () => {
  const hireData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert Angular Development Services",
    description: "iFour specializes in developing secure web and mobile applications using Angular, catering to a wide range of established businesses, from startups to large enterprises. Whether you want to build small or large projects, we provide end-to-end development solutions to suit your needs.\n\nMoreover, with a straightforward hiring approach, the client gets quick access to the right resources to get started with their project. We are not just a tech partner but a growth partner that leads you to the right path of success.",
    benefits: [
      "Expert knowledge of Angular framework",
      "TypeScript and JavaScript expertise",
      "Component-based architecture design",
      "State management with RxJS and NgRx",
      "Responsive design and mobile-first approach",
      "Testing with Jasmine and Karma"
    ],
    services: [
      "Angular Web Development",
      "Angular App Development",
      "Angular UI/UX Design",
      "Migration Services",
      "API Development & Integration",
      "Angular Support & Maintenance"
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
    ctaTitle: "Hire Angular JS Developers to Accelerate Your Frontend Architecture",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Hire Angular JS Developers and Unlock the Full Potential of Robust Framework",
    ctaTwoButtonText: "Get in touch now",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Quick Onboarding",
      "Proven Track Record",
      "User-centric Approach",
      "Competitive Pricing",
      "Comprehensive Services",
      "Experienced Team"
    ],
    serviceTwoTitle: "Why Choose iFour to Hire Angular Developers?",
    serviceTwoSubtitle: "iFour has helped multiple industries and clients worldwide to help them establish their digital workflows. Connect with us and get access to skilled programmers having extensive coding skills to build your dream project.",
         hireAboutSection: {
               hiringOptions: {
          title: "How to Hire Angular Developers from iFour?",
          subtitle: "Hire Angular programmers with the two following options",
          options: [
            "On an hourly basis",
            "As a part of the dedicated team"
          ]
        },
        hiringProcess: {
          title: "We have a straightforward hiring process, which is as follows:",
          steps: [
            "Gather Project Requirements",
            "Sharing CVs of our Angular Experts",
            "Shortlisting The Programmer",
            "Contract Signing and Payment Details",
            "Introducing The Team to The Client",
            "Project Discussion",
            "Setting Up The Work Environment",
            "Starting The Project"
          ]
        }
     }
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Hire Developers" title="Hire Angular Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 