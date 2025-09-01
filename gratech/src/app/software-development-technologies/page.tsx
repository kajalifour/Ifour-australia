import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"
import Technologies from "@/components/homes/home-one/Technologies"

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
    showTechnologies: false, // Prevent duplicate Technologies section
    showMediaCoverage: false, // Remove Media Coverage section
    showTechnologiesList: false, // Remove the TechnologiesListSection with onboarding process
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true,
    showAbout: false, // Remove the entire Engagement Options section
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
      title: "We use the best Technology to solve your business Problems",
      description: "A Microsoft Solutions Partner with over 10 years of market experience and helping clients with sustainable software solutions.\n\nAt iFour Technolab Australia, we have skilled developers, designers, and engineers dedicated to finding innovative solutions and resolving business challenges with efficiency and precision. When you choose us as your software development partner, you can trust that you are working with the best in the industry.\n\nLet us transform your ideas into reality and propel your business to new heights."
    }
  };

  // Custom CTASection that includes both CTA and Technologies We Utilise
  const CustomCTASection = () => (
    <>
      {/* Technologies We Utilise Section */}
      <Technologies />
    </>
  );

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Software Development Technologies" />
        <HireDetailsArea 
          data={technologiesData} 
          CTASection={<CustomCTASection />}
          isTechnologyPage={true}
        />
      </main>
      <FooterOne />
    </>
  )
}

export default page
