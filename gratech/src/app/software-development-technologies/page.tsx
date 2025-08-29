import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Software Development Technologies - Gratech IT Services",
  description: "Explore our comprehensive software development technologies and solutions. Professional technology services.",
};

const page = () => {
  const technologiesData = {
    title: "Comprehensive Software Development Technologies",
    subtitle: "Advanced Technology Solutions",
    description: "iFour is a leading software development company with expertise in cutting-edge technologies to help you build innovative solutions. Our expert team excels in various programming languages, frameworks, and platforms, delivering high-quality software solutions for businesses of all sizes.\n\nOur technology experts work closely with clients to understand their requirements and craft solutions that drive business growth. By partnering with us, you can access a wide range of technology services and gain a competitive edge in the market.",
    benefits: [
      "Expert knowledge of modern programming languages",
      "Full-stack development capabilities",
      "Cloud-native application development",
      "Mobile and web application expertise",
      "Database design and optimization",
      "DevOps and CI/CD implementation"
    ],
    services: [
      "Custom Software Development",
      "Web Application Development", 
      "Mobile App Development",
      "Cloud Solutions & Integration",
      "Database Design & Management",
      "API Development & Integration"
    ],
    showServiceCards: false,
    showProjects: false, // Remove the "Our Project" section with 3 project images
    showClients: false, // Remove the "Clients We've Served Thus Far" section
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true,
    showAbout: false, // Remove the "Hiring Options" and "Our Process" section
    showServicesGrid: false,
    showServiceTwo: false,
    showMainServiceSection: false,
    showCTATwo: false,
    ctaTitle: "Transform your business with our technology expertise",
    ctaButtonText: "GET STARTED",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Ready to Start Your Project?",
    ctaTwoButtonText: "GET STARTED NOW",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "Cloud Solutions & Integration",
      "Database Design & Management",
      "API Development & Integration"
    ],
    serviceTwoTitle: "Why Choose iFour for Technology Solutions?",
    serviceTwoSubtitle: "Comprehensive Technology Services",
    hireAboutSection: {
      title: "How to Work with iFour Technologies?",
      description: "We have a streamlined process that ensures efficient collaboration and successful project delivery. Our approach is designed to maximize productivity while maintaining the highest quality standards.",
      hiringOptions: {
        title: "Hiring Options",
        options: [
          "Dedicated Team - Get a complete team of developers, designers, and project managers working exclusively on your project.",
          "Individual Developers - Hire individual developers with specific skills to augment your existing team.",
          "Project-Based - Complete project delivery with fixed timelines and deliverables."
        ]
      },
      hiringProcess: {
        title: "Our Process",
        steps: [
          "Requirement Analysis - We thoroughly analyze your project requirements and business objectives.",
          "Team Selection - Based on your needs, we select the most suitable team members with relevant expertise.",
          "Development & Testing - Agile development process with regular testing and quality assurance.",
          "Deployment & Support - Smooth deployment and ongoing support to ensure your project's success."
        ]
      }
    }
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Software Development Technologies" />
        <HireDetailsArea data={technologiesData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page
