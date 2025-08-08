import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData2 from "@/data/ServiceData2";

const serviceDetailsData = {
    title: "Desktop App Development",
    subtitle: "Services",
    description: "In today's digital world, desktop applications continue to play a crucial role in enhancing productivity, streamlining operations, and delivering seamless user experiences. iFour Technolab is a leading desktop application development company specializing in creating robust and customized applications that cater to the unique needs of businesses in Australia.",
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
        "Custom Desktop Application Development",
        "Legacy Application Modernization",
        "Application Integration",
        "Application Maintenance and Support",
        "Cross Platform Desktop App Development",
        "UWP App Development"
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

const ServiceDetails2 = () => {
    return (
        <>
            <HeaderOne />
            <main>
                <BreadCrumb sub_title="Desktop Application Development Company" title="Desktop Application Development Company" />
                <ServiceDetailsArea data={serviceDetailsData} />
            </main>
            <FooterOne />
        </>
    );
};

export default ServiceDetails2;
