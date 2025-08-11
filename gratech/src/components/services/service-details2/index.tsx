"use client";

import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData2 from "@/data/ServiceData2";
import Image from "next/image";
import Link from "next/link";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_1 from "@/assets/images/icon/section-title.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-two-circle.png";

const serviceDetailsData = {
    title: "Desktop App Development",
    subtitle: "Services",
    description: "Desktop App Development Services: In today's digital world, desktop applications continue to play a crucial role in enhancing productivity, streamlining operations, and delivering seamless user experiences. iFour Technolab is a leading desktop application development company specializing in creating robust and customized applications that cater to the unique needs of businesses in Australia.\n\nYour company's success begins with selecting the proper provider for application development. Millions of applications enter the market with the expectation of success, yet only a small percentage of them are successful.\n\niFour meticulously handles everything from design through production and release. We have decades of experience and have provided flawless and strong desktop apps to a wide range of industrial clients.\n\nEven, if you have existing legacy desktop applications that need to be updated or modernized, we can help. Our experts analyze your legacy system, identify areas for improvement, and provide a roadmap for transforming your outdated application into a modern and efficient solution.",
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
    showServiceCards: false,
    showServicesGrid: true,
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
        title: "Our Desktop App Services",
        subtitle: "",
        description: "As an Australian-based desktop App development company, we have comprehensive understanding of the unique needs and user demands in Australia. At iFour, we offer a comprehensive range of desktop application development services to address your unique business needs. Our team of skilled developers and designers leverage the latest technologies and frameworks to create robust and user-friendly desktop applications. Our services include:",
        additionalInfo: "Whether you need a new desktop application or want to modernize existing legacy systems, our development team ensures optimal performance, security, and user experience. We leverage modern frameworks and technologies to create applications that are not only feature-rich but also maintainable and scalable for future growth.",
        services: [
            "Custom Desktop Application Development",
            "Legacy Application Modernization",
            "Application Integration",
            "Application Maintenance and Support",
            "Cross Platform Desktop App Development",
            "UWP App Development"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Benefits of Desktop Application Development",
        description: "We create powerful desktop applications that offer exceptional performance, security, and robust processing capabilities. Our desktop applications grant you complete control over the user interface and user experience, allowing for tailored and customized experiences that align precisely with your business workflows and requirements.",
        additionalDescription: "",
        conclusion: "Are you ready to unleash the full potential of your company with our desktop application development services? Contact us right away to discuss your business needs and get a powerful desktop solution."
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

const ServiceDetails2 = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Desktop Application Development Company" title="Desktop Application Development Company" />
                <ServiceDetailsArea 
                    data={serviceDetailsData} 
                    BenefitsSection={<BenefitsSection data={serviceDetailsData} />} 
                    CTASection={
                        <section className="cta-area pt-96 pb-96" style={{
                            background: 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)',
                            textAlign: 'center',
                            marginBottom: '70px'
                        }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div className="cta-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
                                            paddingTop: '15px'
                                        }}>
                                            <h2 style={{
                                                color: '#ffffff',
                                                fontSize: '2rem',
                                                fontWeight: '600',
                                                marginBottom: '2rem',
                                                lineHeight: '1.3'
                                            }}>
                                               Business complexities to take care of? We are here!
                                            </h2>
                                            <p style={{
                                                color: '#ffffff',
                                                fontSize: '1.1rem',
                                                marginBottom: '2rem',
                                                opacity: '0.9',
                                                lineHeight: '1.6'
                                            }}>   
                                            </p>
                                            <Link href="/contact" className="btn btn-primary" style={{
                                                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
                                                border: 'none',
                                                color: '#0f7a95',
                                                padding: '15px 40px',
                                                fontSize: '1.1rem',
                                                fontWeight: '600',
                                                borderRadius: '8px',
                                                textDecoration: 'none',
                                                display: 'inline-block',
                                                transition: 'all 0.3s ease',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px',
                                                marginBottom: '30px',
                                                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
                                            }}
                                            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                e.currentTarget.style.background = 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)';
                                                e.currentTarget.style.color = '#ffffff';
                                            }}
                                            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                                e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)';
                                                e.currentTarget.style.color = '#0f7a95';
                                            }}>
                                                BUILD YOUR DESKTOP APP
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                />
         </main>
         <FooterOne />
      </>
    );
};

export default ServiceDetails2;
