import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData from "@/data/ServiceData";

const serviceDetailsData = {
    title: "Custom Software Development",
    subtitle: "Services",
    description: "iFour Technolab is a leading custom software development company in Australia, specializing in creating tailored software solutions that drive business growth and operational efficiency. Our expert team delivers innovative, scalable, and secure software applications that meet your unique business requirements.",
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
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development",
        "Cloud Application Development",
        "API Development and Integration",
        "Software Maintenance and Support"
    ],
    serviceData: serviceData,
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
            <BreadCrumb sub_title="Custom Software Development Company" title="Custom Software Development Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
