"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceDetailsArea from '../ServiceDetailsArea';
import ServicesGrid from '../ServicesGrid';
import serviceData from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";
import about_thumb3 from "@/assets/images/about/about-image1.jpg";
import about_thumb4 from "@/assets/images/about/about-image2.png";
import shape_1 from "@/assets/images/icon/section-title.png";
import shape_5 from "@/assets/images/shape/about-line.png";
import shape_6 from "@/assets/images/shape/about-circle.png";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-two-circle.png";

const serviceDetailsData = {
    title: "Custom Software Development Brings Value to Your Business",
    subtitle: "Solution",
    description: "Welcome to iFour, your trusted partner for custom software development services in Australia. As a Microsoft Solutions Partner, we bring a wealth of expertise and credibility to every project we undertake. With over 10 years of market experience, we have honed our skills and perfected our craft, making us a reliable choice for businesses seeking top-notch software solutions.\n\nOur team consists of over 120 veteran professionals who are passionate about creating innovative and tailor-made software that propels businesses forward in the ever-changing digital landscape.\n\nWe understand the importance of local understanding and global expertise, ensuring that our solutions not only meet your unique needs but also align with industry best practices. When you choose iFour, you can expect exceptional results that drive growth and set your business apart from the competition. Trust us to be your technology partner on the path to success.",
    benefits: [
        "Local Understanding, Global Expertise",
        "Tailored Solutions for Your Business",
        "120+ veteran professionals",
        "Certified Microsoft Solutions Partner",
        "Full-Cycle Development Services",
        "Expertise Across Industries",
        "Quality Assurance and Security",
        "Transparent Communication and Timely Delivery",
    ],
    services: [
        "Product development",
        "Web application development",
        "Client-server applications",
        "Cloud application development",
        "Business line solutions",
        "Desktop applications",
        "Internet or intranet applications",
        "Software or web maintenance"
    ],
    serviceData: serviceData,
    showServiceCards: false,
    showProjects: true,
    showClients: true,
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true,
    showAbout: true,
    showServicesGrid: true, // New option to control ServicesGrid display
    aboutData: {
        title: "Our Custom Software",
        subtitle: "Services",
        description: "As an Australian-based software development company, we understand the unique needs and challenges faced by businesses in Australia. Our bespoke software development services are designed to help you overcome these challenges and achieve your business objectives. Our custom software services can assist you with",
        additionalInfo: "Contact us today to discuss how we can create a tailored software solution to drive innovation and growth for your organization.",
        services: [
            "Product development",
            "Web application development",
            "Client-server applications",
            "Cloud application development",
            "Business line solutions",
            "Desktop applications",
            "Internet or intranet applications",
            "Software or web maintenance"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Why Choose iFour?",
        description: "At iFour, we have in-depth knowledge of the Australian market, allowing us to deliver solutions that resonate with your target audience. We combine this local understanding with our global expertise, staying up-to-date with industry trends and technologies to ensure your software meets global standards. Given below are the reasons to choose iFour.",
        additionalDescription: "",
        conclusion: "Ready to unlock the full potential of your business with custom software development? Contact iFour today to discuss your project requirements. Our team of experts is eager to collaborate with you, understand your vision, and deliver a software solution that drives innovation and growth in your industry. Let us be your trusted technology partner on your digital transformation journey."
    }
};

// Benefits Section Component
const BenefitsSection = ({ data }: { data: any }) => {
    return (
        <section id="success-section" className="about-two-area" style={{ 
            background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)', 
            paddingTop: '50px', 
            paddingBottom: '50px', 
            minHeight: '600px',
            position: 'relative',
            zIndex: 1
        }}>
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__left-item" style={{ 
                            marginLeft: '30px', 
                            marginTop: '100px', 
                            transform: 'scale(1.2)', 
                            transformOrigin: 'center center' 
                        }}>
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
                        <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ 
                            marginRight: '0', 
                            transform: 'none', 
                            paddingLeft: '20px', 
                            paddingRight: '10px' 
                        }}>
                            <div className="section-header mb-30">
                                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff', fontSize: '1.2rem' }}>
                                    <Image className="me-1" src={shape_1} alt="icon" />
                                    {data.benefitsData?.title || "WHO WE ARE"}
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '20px' }}>
                                    <span style={{ color: '#0f7a95' }}>{data.benefitsData?.subtitle || "Benefits of our services"}</span>
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                    {data.benefitsData?.description || "We create applications that offer exceptional performance, security, and robust processing capabilities. Our applications grant you complete control over the user interface and user experience, allowing for tailored and customized experiences that align precisely with your preferences and branding."}
                                </p>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                    {data.benefitsData?.additionalDescription || ""}
                                </p>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                                {data.benefits && data.benefits.map((benefit: string, index: number) => (
                                    <li key={index} style={{ marginBottom: '12px', color: '#ffffff', fontSize: '1rem' }}>
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
            <BreadCrumb sub_title="Custom Software Development Company" title="Custom Software Development Company" />
                
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
                                                Looking for reliable bespoke software development solutions?
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
                                                START YOUR SOFTWARE JOURNEY
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

export default ServiceDetails;
