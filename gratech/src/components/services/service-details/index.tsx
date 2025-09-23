"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import dynamic from "next/dynamic";
const ServiceDetailsArea = dynamic(() => import('../ServiceDetailsArea'), { ssr: false });
import serviceData from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";
import shape_1 from "@/assets/images/icon/section-title.png";
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
        "Custom Product development",
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
            "Custom Product Development",
            "Web Application Development",
            "Cloud Application Development",
            "Business Line Solutions",
            "Desktop App Development",
            "Internet or Intranet Services"
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
const BenefitsSection = ({ data }: { data: typeof serviceDetailsData }) => {
    return (
        <section id="success-section" className="about-two-area service-details-benefits-section">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__left-item service-details-left-item">
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
                        <div className="about-two__right-item wow fadeInDown service-details-right-item" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-header mb-30">
                                <h5 className="wow fadeInUp service-details-section-title" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <Image className="me-1" src={shape_1} alt="icon" />
                                    {data.benefitsData?.title || "WHO WE ARE"}
                                </h5>
                                <h2 className="wow fadeInUp service-details-main-title" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <span className="service-details-teal-text">{data.benefitsData?.subtitle || "Benefits of our services"}</span>
                                </h2>
                                <p className="wow fadeInUp service-details-description" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    {data.benefitsData?.description || "We create applications that offer exceptional performance, security, and robust processing capabilities. Our applications grant you complete control over the user interface and user experience, allowing for tailored and customized experiences that align precisely with your preferences and branding."}
                                </p>
                                <p className="wow fadeInUp service-details-description-large" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    {data.benefitsData?.additionalDescription || ""}
                                </p>
                            </div>
                            <ul className="service-details-benefits-list">
                                {data.benefits && data.benefits.map((benefit: string, index: number) => (
                                    <li key={index} className="service-details-benefit-item">
                                        <span className="service-details-benefit-number">{index + 1}.</span>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <p className="wow fadeInUp service-details-conclusion" data-wow-delay="400ms" data-wow-duration="1500ms">
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
                        <section className="cta-area pt-96 pb-96 service-details-cta-section text-center mb-70px">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-8">
                                        <div className="cta-content wow fadeInUp service-details-cta-content" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <h2 className="service-details-cta-title">
                                                Looking for reliable bespoke software development solutions?
                                            </h2>
                                            <p className="service-details-cta-description">
                                            </p>
                                            <Link href="/contact" className="btn btn-primary service-details-cta-button">
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
    );
};

export default ServiceDetails;
