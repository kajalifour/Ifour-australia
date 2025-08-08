import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData2 from "@/data/ServiceData2";

const serviceDetailsData = {
    title: "IoT Software Development",
    subtitle: "Services",
    description: "iFour Technolab is a leading IoT software development company in Australia, specializing in creating innovative IoT solutions that connect devices, collect data, and drive intelligent business decisions. Our expert team delivers cutting-edge IoT applications that transform your business operations and enhance user experiences.",
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
        "IoT Platform Development",
        "Sensor Integration",
        "Real-time Data Analytics",
        "IoT Device Management",
        "Cloud IoT Solutions",
        "IoT Security Implementation"
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
            <BreadCrumb sub_title="IoT Software Development Company" title="IoT Software Development Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails;
