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
    title: "Hire Angular Developers",
    subtitle: "Expert Angular Development Services",
    description: "Hire skilled Angular developers who excel in building modern, responsive web applications. Our developers are experts in Angular framework, TypeScript, and modern web development practices.",
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
    showServicesGrid: true
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