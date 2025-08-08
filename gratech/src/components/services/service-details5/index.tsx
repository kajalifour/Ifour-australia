import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData7 from "@/data/ServiceData7";

const serviceDetailsData = {
    title: "Microsoft Azure Cloud Services",
    subtitle: "Services",
    description: "iFour Technolab is a premier Microsoft Azure cloud services company in Australia, specializing in designing, implementing, and managing cloud solutions that drive business transformation. Our expert team delivers scalable, secure, and cost-effective Azure solutions that help businesses leverage the full power of cloud computing.",
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
        "Azure Cloud Migration",
        "Azure App Development",
        "Azure DevOps Services",
        "Azure Infrastructure Setup",
        "Azure Security & Compliance",
        "Azure Monitoring & Support"
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
            <BreadCrumb sub_title="Microsoft Azure Cloud Services Company" title="Microsoft Azure Cloud Services Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
