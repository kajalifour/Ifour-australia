import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData7 from "@/data/ServiceData7";

const serviceDetailsData = {
    title: "Microsoft 365 Development",
    subtitle: "Services",
    description: "iFour Technolab is a leading Microsoft 365 development company in Australia, specializing in creating custom solutions that leverage the power of Microsoft 365 to enhance productivity and streamline business operations. Our expert team delivers innovative applications and integrations that maximize the value of your Microsoft 365 investment.",
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
        "Custom Microsoft 365 Applications",
        "Power Platform Development",
        "SharePoint Development",
        "Teams App Development",
        "Office Add-ins Development",
        "Microsoft 365 Integration"
    ],
    serviceData: serviceData7,
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
            <BreadCrumb sub_title="Microsoft 365 Development Company" title="Microsoft 365 Development Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
