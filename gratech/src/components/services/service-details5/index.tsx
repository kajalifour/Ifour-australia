"use client";

import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData7 from "@/data/ServiceData7";
import Image from "next/image";
import Link from "next/link";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_1 from "@/assets/images/icon/section-title.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-two-circle.png";

const serviceDetailsData = {
    title: "Software Development Company ",
    subtitle: "Australia",
    description: "iFour Technolab is a reliable partner for cloud computing and migration services. With over ten years of experience as a Microsoft Solutions Partner, we offer a depth of expertise and credibility to every project we tackle. We have developed our abilities and mastered our art, making us a dependable choice for organizations looking for high-quality software solutions.\n\nWe have more than 120 veteran experts that are passionate about developing creative and custom software solutions that move organizations forward in the ever-changing digital market.\n\nAs an Australian software firm, we realize the value of local knowledge and worldwide expertise in ensuring that our solutions not only satisfy your specific requirements but also adhere to industry best practices. \n\n Contact us today to schedule a consultation and embark on your journey to the cloud with Microsoft Azure. Let us empower your Australian business with scalability, security, and innovation like never before.",
    benefits: [
        "Unparalleled scalability",
        "Enhanced data security",
        "Seamless integration with Microsoft Products",
        "Geographically Distributed Data Centers",
        "Pay only for the resources you need"
    ],
    services: [
        "Server and licenses",
        "Cloud infrastructure migration service",
        "Cloud tenant migration service",
        "Cloud connectivity service",
        "Modern workplace service (AVD, Windows 365)",
        "Cloud identity services",
        "Cost analysis and optimization services",
        "Azure managed services",
        "Cloud security and assessments"
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
        title: "Microsoft Azure Services",
        subtitle: "",
        description: "Microsoft Azure provides unmatched scalability, allowing your business to grow effortlessly. Whether you're a startup or an enterprise, Azure's flexible infrastructure can accommodate your expanding needs, ensuring your applications and services can scale seamlessly. Take a look at our Microsoft Azure Services tailored for Australian Businesses:",
        additionalInfo: "Contact us today to discuss how we can create a tailored software solution to drive innovation and growth for your organization.",
        services: [
        "Server and licenses",
        "Cloud infrastructure migration service",
        "Cloud tenant migration service",
        "Cloud connectivity service",
        "Modern workplace service (AVD, Windows 365)",
        "Cloud identity services",
        "Cost analysis and optimization services",
        "Azure managed services",
        "Cloud security and assessments"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Why Choose Microsoft Azure for Your Australian Business?",
        description: "At iFour, we understand that modern businesses require flexible, scalable, and secure cloud solutions to stay ahead in today's competitive landscape. That's why we highly recommend Microsoft Azure, a cutting-edge cloud computing platform offering extensive services designed to elevate your business to new heights. Some of the benefits of Azure cloud services include:",
        additionalDescription: "",
        conclusion: "Ready to scale your business with Microsoft Azure cloud solutions? Contact us right away to discuss your requirements. Our team of experts is eager to work with you, understand your plan, and deliver solutions that drive innovation and growth in your industry. \n\n Let us be your trusted technology partner on your digital transformation journey."
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
                                            Infuse the power of Azure cloud services into your business.
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
                                           Get started now
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
   )
}

export default ServiceDetails
