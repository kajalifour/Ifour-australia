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
    title: "Blockchain Consulting Services",
    subtitle: "Australia",
    description: "As the technology landscape continues to evolve, Blockchain has emerged as a transformative force, revolutionizing various industries. At iFour, we leverage our expertise in Blockchain development to help businesses harness the power of this decentralized technology and unlock new opportunities for growth and innovation.\n\n iFour Technolab is a Microsoft Certified Solutions Partner with 5+SCRUM masters and over 120 veteran professionals who are passionate about creating innovative blockchain solutions that provide security and propel businesses forward in the ever-changing digital landscape. \n\nWe can help you with personalized blockchain solutions adapted to your specific needs since we have decades of expertise in the IT business and thorough awareness of satisfying client expectations. \n\nWe recognize the value of local knowledge and impeccable expertise in ensuring that our solutions are in line with industry best practices and your organizational requirements.\n\nWhen you work with iFour, you can anticipate remarkable outcomes that will propel your company forward and set it apart from the competition. You can rely on us to be your technology partner on the road to success.",
    benefits: [
        "Enhanced Security and reduced fraud.",
        "Transparency and Trust with a shared view",
        " Improved Efficiency and Cost Savings",
        "Self-executing agreements and no intermediaries",
        "Traceability and Supply Chain Optimization"
    ],
    services: [
        "Blockchain consulting",
        "Smart contract development",
        "Apps development services",
        "Cryptocurrency development",
        "Blockchain integration and Migration"
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
        title: "Our Blockchain Development Services",
        subtitle: "",
        description: "As an Australian-based software development company, we understand the unique needs and difficulties that Australian businesses face. Our custom blockchain development services are designed to help you overcome these challenges and achieve your business objectives. Among our offerings are:",
        additionalInfo: "We prioritize quality and security in every aspect of our Blockchain development process. Our robust development methodologies and adherence to industry standards ensure that your Blockchain solution is reliable, secure, and scalable. Reach out us today to discuss your ideas.",
        services: [
            "Custom Blockchain Development",
            "Smart Contract Development",
            "DeFi Application Development",
            "NFT Platform Development",
            "Blockchain Integration",
            "Blockchain Consulting"
        ]
    },
    benefitsData: {
        title: "WHO WE ARE",
        subtitle: "Why Blockchain technology?",
        description: "Most individuals believe that Blockchain and cryptocurrency are interchangeable. However, it is not true. A cryptocurrency is a form of application that uses Blockchain technology. So, avoid confusing Blockchain for Cryptocurrency. Bitcoin is a popular example of cryptocurrency. Because of the numerous benefits offered by Blockchain, the entire globe is rushing to adopt this technology. Some key benefits of Blockchain include:",
        additionalDescription: "",
        conclusion: "Ready to unlock your business potential with Blockchain development? Contact iFour today to discuss your project requirements. Our dedicated team is eager to work with you, understand your vision, and create a software solution that fosters innovation and success in your sector. Allow us to be your trusted technology partner on your digital transformation journey."
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
            <BreadCrumb sub_title="Blockchain Development Company" title="Blockchain Development Company" />
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
