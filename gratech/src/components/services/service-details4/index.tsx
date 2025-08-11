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
    title: "Maximize the Potential of Microsoft 365 to ",
    subtitle:"Grow Your Business",
    description: "iFour Technolab is a trusted partner for Microsoft 365 development services with a proven track record in cloud computing and migration services. Backed by years of technology expertise as a Microsoft Solutions Partner, we bring unrivaled expertise and credibility to every project we undertake. Our commitment to excellence has allowed us to refine our skills and become a reliable choice for organizations seeking top-notch software solutions.\n\nWith a team of over 120 seasoned experts, we are driven by a passion for developing creative and customized software solutions that propel organizations forward in the dynamic digital market. Our talented professionals are equipped with the knowledge and skills to craft innovative solutions tailored to your specific needs, ensuring that your business stays ahead of the curve.\n\nAs an Australian software firm, we understand the significance of local knowledge combined with global expertise. This enables us to deliver solutions that not only meet your unique requirements but also adhere to industry best practices. We recognize the importance of scalability, security, and innovation in today's business landscape, and our Microsoft 365 development services are designed to empower your Australian business with all three.",
    benefits: [
        "Local Understanding, Global Expertise",
        "Tailored Solutions for Your Business",
        "Certified Microsoft Solutions Partner",
        "120+ veteran professionals",
        "Full-Cycle Development Services",
        "Quality Assurance and Security",
        "Expertise Across Industries",
        "Transparent Communication and Timely Delivery"
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
    showTechnologyPartners: true,
    showAbout: true,
    aboutData: {
        title: "Our Microsoft 365 Services",
        subtitle: "",
        description: "With our extensive experience and expertise as a trusted software development partner, we have honed our skills in Microsoft 365 development. Our team of seasoned professionals is well-versed in leveraging the full potential of Microsoft 365 to deliver customized solutions that align perfectly with your business objectives. Our Microsoft 365 services include -",
        additionalInfo: "Contact us today to leverage the full potential of Microsoft 365 platforms for your business.",
        services: [
            "Office 365 licenses",
            "Office 365managed services",
            "Migration from google workspace",
            "Migration from Exchange on-premises to Office 365",
            "Migration fromopensource email to Office 365"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Why Microsoft 365 Development Services?",
        description: "Microsoft 365 development enables you to focus on boosting productivity and efficiency within your company. It allows you to harness the capabilities of Microsoft 365 applications such as Word, Excel, PowerPoint, and more to streamline workflows, automate processes, and empower your workforce to work smarter and accomplish more.",
        additionalDescription: "At iFour, we believe in the power of customization. Our Microsoft 365 development services are specifically tailored to meet the unique needs of Australian businesses. We take the time to understand your organization's requirements, processes, and objectives to create bespoke solutions that drive productivity, collaboration, and growth. Given below are the reasons to choose iFour.",
        conclusion: "Ready to unlock your business potential? Contact us now and let us be your Microsoft technology partner on your digital transformation journey."
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
            <BreadCrumb sub_title="Microsoft 365 Development Company" title="Microsoft 365 Development Company" />
            <ServiceDetailsArea 
                data={serviceDetailsData} 
                BenefitsSection={<BenefitsSection data={serviceDetailsData} />} 
            />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
