import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData4 from "@/data/ServiceData4";

const serviceDetailsData = {
    title: "Ecommerce Website Development",
    subtitle: "Services",
    description: "iFour Technolab is a premier ecommerce website development company in Australia, specializing in creating powerful, user-friendly, and scalable online stores that drive sales and enhance customer experience. Our expert team delivers cutting-edge ecommerce solutions that help businesses thrive in the digital marketplace.",
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
        "Custom Ecommerce Development",
        "Ecommerce Platform Migration",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Mobile Commerce Solutions",
        "Ecommerce Maintenance and Support"
    ],
    serviceData: serviceData4,
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
            <BreadCrumb sub_title="Ecommerce Website Development Company" title="Ecommerce Website Development Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
