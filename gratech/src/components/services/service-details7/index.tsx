import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from '../ServiceDetailsArea';
import serviceData2 from "@/data/ServiceData2";
import Image from "next/image";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_1 from "@/assets/images/icon/section-title.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-two-circle.png";

const serviceDetailsData = {
    title: "Mobile App Development",
    subtitle: "Services",
    description: "Welcome to iFour, the leading provider of mobile app development services that are set to revolutionize the digital landscape. As a Microsoft Solutions Partner with 10 years of market experience, we have solidified our position as industry experts. Our team of 120+ veteran professionals is driven by a passion for crafting innovative applications that propel businesses to new heights.\n\nWith our global presence spanning four branches, we bring diverse perspectives and a wealth of knowledge to every project. Our multi-talented team leverages cutting-edge technologies and industry best practices to develop mobile apps that exceed expectations.\n\nAt iFour, we understand that mobile apps have become an essential component of modern business strategies. Whether you need a sleek e-commerce app, a feature-rich customer engagement platform, or a game-changing enterprise solution, we have the expertise to bring your vision to life.\n\nWe understand your vision and deliver a perfect mobile app solution that drives growth in your industry.",
    benefits: [
        "Certified Microsoft Solutions Partner",
        "Local Understanding, Global Expertise",
        "Tailored-made applications for Your Business",
        "120+ vetted professionals",
        "Expertise Across Industries",
        "Full-Cycle Development Services",
        "Quality Assurance and Security",
        "Transparent Communication and On-time Delivery"
    ],
    services: [
        "Discovery and planning",
        "Design and prototyping",
        "Development and coding",
        "Testing and Quality Assurance",
        "Deployment and Launch",
        "Post-Launch Support and Maintenance"
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
    showTechnologyPartners: true,
    showAbout: true,
    aboutData: {
        title: "Our Mobile App Development",
        subtitle: "Approach",
        description: "As an Australian-based software development company, we understand the unique needs and challenges faced by businesses in Australia. Our bespoke software development services are designed to help you overcome these challenges and achieve your business objectives. Our custom software services can assist you with",
        additionalInfo: "Contact us today to discuss how we can create a tailored software solution to drive innovation and growth for your organization.",
        services: [
            "iOS App Development",
            "Android App Development",
            "Cross-Platform Development",
            "App Maintenance & Support",
            "App Store Optimization",
            "Mobile App Testing"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Why Choose iFour?",
        description: "At iFour, we have in-depth knowledge of the Australian market, allowing us to deliver solutions that resonate with your target audience. We combine this local understanding with our global expertise, staying up-to-date with industry trends and technologies to ensure your software meets global standards. Given below are the reasons to choose iFour.",
        additionalDescription: "",
        conclusion: "Looking for Applications that resonate with your target audience? Avail of our mobile app development services. Contact us today to discuss your project requirements. Our team of experts is eager to collaborate with you, understand your vision, and deliver a mobile app solution that drives innovation and growth in your industry. Let us be your reliable technology partner on your digital transformation journey."
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
            <BreadCrumb sub_title="Mobile App Development Company" title="Mobile App Development Company" />
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
