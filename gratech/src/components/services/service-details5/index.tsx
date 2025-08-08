import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData7 from "@/data/ServiceData7";
import Image from "next/image";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_1 from "@/assets/images/icon/section-title.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-two-circle.png";

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
    showTechnologyPartners: true,
    showAbout: true,
    aboutData: {
        title: "Microsoft Azure Cloud Services",
        subtitle: "Transforming Business Through Cloud Innovation",
        description: "Our Microsoft Azure cloud services expertise spans the entire cloud journey, from initial planning and migration to ongoing optimization and management. We specialize in designing and implementing scalable, secure, and cost-effective Azure solutions that drive business transformation and digital innovation.",
        additionalInfo: "Whether you're migrating existing applications to Azure or building new cloud-native solutions, our team ensures optimal performance, security, and cost efficiency. We focus on creating robust cloud architectures that support your business growth while maintaining compliance and operational excellence.",
        services: [
            "Azure Cloud Migration",
            "Azure App Development",
            "Azure DevOps Services",
            "Azure Infrastructure Setup",
            "Azure Security & Compliance",
            "Azure Monitoring & Support"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Benefits of Microsoft Azure Cloud Services",
        description: "We create powerful Azure cloud solutions that offer exceptional performance, security, and robust processing capabilities. Our Azure cloud services grant you complete control over the cloud infrastructure and user experience, allowing for tailored and customized cloud experiences that align precisely with your business requirements and scalability needs.",
        additionalDescription: "",
        conclusion: "Are you ready to unleash the full potential of your company with our Microsoft Azure cloud services? Contact us right away to discuss your business needs and get a powerful cloud solution."
    }
};

// Benefits Section Component
const BenefitsSection = ({ data }: { data: any }) => {
    return (
        <section id="success-section" className="about-two-area" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)', paddingTop: '50px', paddingBottom: '20px' }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__left-item" style={{ marginLeft: '30px', marginTop: '200px', transform: 'scale(1.3)', transformOrigin: 'center center' }}>
                            <div className="dots">
                                <Image className="sway_Y__animation" src={shape_2} alt="shape" />
                            </div>
                            <div className="shape-halper">
                                <Image className="sway__animation" src={shape_3} alt="shape" />
                            </div>
                            <div className="image big-image">
                                <Image src={about_thumb1} alt="image" />
                            </div>
                            <div className="image sm-image">
                                <Image src={about_thumb2} alt="image" />
                            </div>
                            <div className="circle-shape">
                                <Image className="animation__rotate" src={shape_4} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ marginRight: '0', transform: 'none', paddingLeft: '20px', paddingRight: '10px' }}>
                            <div className="section-header mb-30">
                                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                                    <Image className="me-1" src={shape_1} alt="icon" />
                                    {data.benefitsData?.title || "WHO WE ARE"}
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95' }}>{data.benefitsData?.subtitle || "Benefits of our services"}</span>
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {data.benefitsData?.description || "We create applications that offer exceptional performance, security, and robust processing capabilities. Our applications grant you complete control over the user interface and user experience, allowing for tailored and customized experiences that align precisely with your preferences and branding."}
                                </p>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {data.benefitsData?.additionalDescription || ""}
                                </p>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {data.benefits.map((benefit: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px', color: '#ffffff' }}>
                                        <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>{index + 1}.</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                                {data.benefitsData?.conclusion || "Are you ready to unleash the full potential of your company with our services? Contact us right away to discuss your business needs."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Microsoft Azure Cloud Services Company" title="Microsoft Azure Cloud Services Company" />
            <ServiceDetailsArea data={serviceDetailsData} />
            <BenefitsSection data={serviceDetailsData} />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
