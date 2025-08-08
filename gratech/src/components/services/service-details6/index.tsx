import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData2 from "@/data/ServiceData2";

const serviceDetailsData = {
    title: "Blockchain Development",
    subtitle: "Services",
    description: "iFour Technolab is a leading blockchain development company in Australia, specializing in creating innovative blockchain solutions that drive transparency, security, and efficiency. Our expert team delivers cutting-edge blockchain applications that transform business processes and create new opportunities.",
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
        "Custom Blockchain Development",
        "Smart Contract Development",
        "DeFi Application Development",
        "NFT Platform Development",
        "Blockchain Integration",
        "Blockchain Consulting"
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
            <BreadCrumb sub_title="Blockchain Development Company" title="Blockchain Development Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
