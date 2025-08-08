import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData2 from "@/data/ServiceData2";

const serviceDetailsData = {
    title: "Mobile App Development",
    subtitle: "Services",
    description: "iFour Technolab is a leading mobile app development company in Australia, specializing in creating innovative, user-friendly, and high-performance mobile applications for iOS and Android platforms. Our expert team delivers cutting-edge mobile solutions that drive user engagement and business growth.",
    benefits: [
        "Tailor-made solutions",
        "Dedicated software development team",
        "Business-friendly hiring models",
        "Competitive pricing model",
        "Teams at scale",
        "Cost-effective",
        "Rapid delivery",
        "100% transparency",
        "Effortless communication",
        "Flawless design"
    ],
    services: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Development",
        "App Maintenance & Support",
        "App Store Optimization",
        "Mobile App Testing"
    ],
    serviceData: serviceData2,
    showServiceCards: true,
    showProjects: true,
    showClients: true,
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true
};

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Mobile App Development Company" title="Mobile App Development Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
