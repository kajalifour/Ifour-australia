"use client";

import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData4 from "@/data/ServiceData4";
import Image from "next/image";
import Link from "next/link";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_1 from "@/assets/images/icon/section-title.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-two-circle.png";

const serviceDetailsData = {
    title: "Retail Software Development Company Australia",
    subtitle: "",
    description: "Welcome to iFour, your trusted partner for top-notch E-commerce development services in Australia. In the fast-paced world of digital commerce, having a robust and user-friendly online platform is essential to stay ahead of the competition and reach a broader audience. With our mastery in e-commerce software development, we are committed to empowering your online success. Let's explore how our tailored E-commerce solutions can transform your business and elevate your brand presence in the Australian market.\n\nWe recognize the value of having both local knowledge and worldwide competence, therefore we make sure that our solutions not only satisfy your particular demands but also follow industry best practices. When you pick iFour, you can count on outstanding outcomes that promote growth and distinguish your company from the competition. Count on us to be your successful technology partner.",
    additionalInfo: "",
    benefits: [
        "Local Understanding, Global Expertise",
        "Microsoft Solutions Partner",
        "Tailored Solutions for Your Business",
        "120+ veteran professionals",
        "Full-Cycle Development Services",
        "Quality Assurance and Security",
        "Transparent Communication and Timely Delivery",
        "Expertise Across Industries",
        "Transparent Communication and Timely Delivery",
    ],
    services: [
        "Custom Ecommerce Development",
        "Ecommerce Platform Migration",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Mobile Commerce Solutions",
        "Ecommerce Maintenance and Support"
    ],
    serviceData: serviceData4,
    showServiceCards: false,
    showServicesGrid: false,
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
        title: "Our E-commerce development Services",
        subtitle: "",
        description: "At iFour, more than 120 seasoned individuals make up our team, and they are enthusiastic about developing unique, custom software that helps organizations succeed in the rapidly evolving digital environment.Our professionals can assist you with:",
        additionalInfo: "Contact us today to discuss your unique needs and how we can create a tailored solution to drive innovation and growth for your e-commerce business.",
        services: [
            "E-commerce App development",
            "E-commerce website design and development",
            " Custom eCommerce storefront designs",
            "E-commerce marketplace development",
            " Plugin and module development",
            "Custom eCommerce functionality",
            "Integration with multiple platforms",
            "Payment gateway integration"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Why Choose iFour?",
        description: "At iFour, we are not just another software development company – we are your strategic partner in conquering the Australian market. Our team boasts an in-depth knowledge of the Australian landscape, giving us a unique advantage in crafting solutions that truly speak to your target audience. But we don't stop there! Embracing a global outlook, we stay ahead of the game by keeping a finger on the pulse of industry trends and cutting-edge technologies. With iFour, your software will not only meet Australian standards but will also soar to international acclaim.",
        additionalDescription: "",
        conclusion: "Ready to unlock the full potential of your Retail business? Contact us now"
    }
};

// Benefits Section Component
const BenefitsSection = ({ data }: { data: {
    benefits: string[];
    benefitsData?: {
        title?: string;
        subtitle?: string;
        description?: string;
        additionalDescription?: string;
        conclusion?: string;
    };
} }) => {
    return (
        <section id="success-section" className="about-two-area service-details-benefits-section">
            <div className="container">
                <div className="row g-4">
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
                                <p className="wow fadeInUp service-details-description" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    {data.benefitsData?.additionalDescription || ""}
                                </p>
                            </div>
                            <ul className="service-details-benefits-list">
                                {data.benefits.map((benefit: string, index: number) => (
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
            <BreadCrumb sub_title="Ecommerce Website Development Company" title="Ecommerce Website Development Company" />
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
                                          Revolutionise your business with custom software solutions.
                                        </h2>
                                        <p className="service-details-cta-description">
                                            
                                        </p>
                                        <Link href="/contact-us" className="btn btn-primary service-details-cta-button">
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
