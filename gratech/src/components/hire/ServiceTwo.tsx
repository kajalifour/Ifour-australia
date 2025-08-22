"use client";

import React from 'react';
import Image from 'next/image';
import icon_1 from "@/assets/images/icon/service-icon1.png";
import icon_2 from "@/assets/images/icon/service-icon2.png";
import icon_3 from "@/assets/images/icon/service-icon3.png";
import shape_1 from "@/assets/images/shape/service-two-shape-left.png";
import shape_2 from "@/assets/images/shape/service-two-shape-right.png";

interface ServiceTwoProps {
    services?: string[];
    title?: string;
    subtitle?: string;
}

const ServiceTwo: React.FC<ServiceTwoProps> = ({ 
    services = [], 
    title = "Additional Services", 
    subtitle = "Explore More Development Solutions" 
}) => {
    // Default services if none provided
    const defaultServices = [
        "Custom Software Development",
        "Web Application Development", 
        "Mobile App Development",
        "API Development & Integration",
        "Database Design & Management",
        "Cloud Solutions & Migration"
    ];

    // Service descriptions mapping
    const serviceDescriptions: { [key: string]: string } = {
        "Quick Onboarding": "iFour Australia has a straightforward hiring approach, allowing clients to onboard the talent in just a few steps so they can kickstart their projects without wasting time.",
        "Proven Track Record": "With a decade of experience and a portfolio of successful projects, iFour created an image of a trustable tech partner for businesses looking to launch their Angular projects.",
        "User-centric Approach": "Our team works closely with clients to understand their needs and builds a solution that delivers the expected results, prioritizing user satisfaction.",
        "Competitive Pricing": "We deliver high-quality Angular solutions at competitive pricing. With flexible hiring models, clients can choose what suits them most without disrupting their budget.",
        "Comprehensive Services": "We provide a comprehensive suite of services including custom development tailored to meet your unique requirements.",
        "Experienced Team": "iFour has a team of highly skilled Angular developers to hire, experienced in building dynamic web apps, mobile apps, and enterprise solutions.",
        // Keep the original descriptions for backward compatibility
        "Extensive Expertise": "Our team consists of talented Node.js experts with extensive experience in building robust and efficient web solutions.",
        "End-to-end Solution": "With iFour you can obtain end-to-end solutions for your project requirements hence you don't have to go back and forth to fulfill your certain requirements.",
        "Total Transparency": "We maintain total workflow transparency during the development cycle and maintain frequent communication to help you keep informed regarding project progress.",
        "Faster Delivery": "Our team of developers adheres to the agile methodology, which enables us to rapidly develop applications and faster to market.",
        "Cutting-edge Technology": "Our programmers utilize modern tech stacks to help you get the most benefits of technological advancements so you can stay ahead in this competitive edge.",
        "Customized Solution": "Off-the-shelf solutions don't work all the time, since everyone has their unique needs. Hence by choosing iFour, you can be assured of getting tailored solutions for all your requirements.",
        // New descriptions from the image
        "Custom Solutions": "We craft tailored solutions that cater specifically to your unique needs, helping you achieve your business objectives.",
        "Agile Methodology": "Our coders embrace agile development methodologies to ensure seamless collaboration, timely delivery, and continuous improvement.",
        "Secured Solutions": "We adhere to industry best practices and standards for security, protecting your data and applications from potential threats.",
        "Timely Delivery": "Our experienced developers deliver high-quality work within tight deadlines, helping you meet your business objectives.",
        "Cost-effectiveness": "We offer competitive pricing packages without compromising on app quality, ensuring you get the best value for your investment.",
        // Vue.js specific benefits
        "Technical Efficiency": "Our Vue.js experts use their expertise and skills in cutting-edge technology and best practices to build robust solutions tailored to the unique needs of clients across various industry sectors.",
        "Cost Saving": "You can hire programmers based on project needs and enjoy cost-saving opportunities to build feature-rich solutions. This helps you expand your budget to 2-4x further without any high markups.",
        "Assured Quality": "Hiring talent with us comes with 100% satisfaction and quality-oriented solutions. Our Vue.js experts employ industry best practices to build powerful software that ensures quality and longevity.",
        "Hassle-Free Recruitment": "You can quickly onboard the talent with iFour, as we have a very straightforward hiring approach. We also ensure that you get to work with the right talent who understands your project needs insight out.",
        "User-centered Approach": "iFour brings together people who understand user requirements and work accordingly to build the solution. Our programmers let you ensure you get the solution meeting all your needs.",
        "Cloud Solutions & Migration": "Our Vue.js experts provide comprehensive cloud solutions and migration services to help you modernize your applications and leverage cloud infrastructure for better scalability and performance.",
        // C# specific benefits
        "Talented Team": "Our team of programmers undergoes rigorous background checks to ensure that you work with talented programmers who understand your requirements promptly.",
        "Quick Hiring": "Our hassle-free hiring procedure lets you hire C# developers instantly without going back and forth to find and onboard the right talent.",
        "Industry Expertise": "Our team of programmers has industry expertise and helps clients build industry-specific software that aligns with business goals.",
        "Qualitative Solutions": "Our codes prioritize product quality on top and follow industry best practices and coding standards to build secure, feature-rich, and quality-oriented solutions.",
        "24*7 Support": "Our support team is highly active and helps you resolve any issues or queries to ensure the smooth running of software without any errors.",
        // WPF specific benefits
        "Vetted WPF Experts": "Our WPF developers have extensive experience in using the Windows Presentation Foundation framework to create visually appealing and functional apps. Our team comprises multiple experts having distinctive specializations, ensuring comprehensive support for your project.",
        "Qualitative Solution": "By hiring WPF developers from us you can be assured of getting quality solutions as programmers follow strict quality checks to ensure the bug-free outcome before deployment. Moreover, our programmers also adhere to security standards to ensure data privacy.",
        "Hire 4X Faster": "By connecting with iFour, you can get quick access to the vetted experts ready to work on your project. Our straightforward hiring approach helps you find the right talent without struggling to go through time-consuming procedures.",
        "100% Transparency": "A great benefit of hiring programmers with us is that we maintain project transparency throughout the development process. Our programmers maintain clear communication to keep you informed regarding the project's progress.",
        "Cost Effectiveness": "iFour helps you hire WPF developers at competitive pricing giving value for money. With our flexible hiring models, you can save on additional costs, and hire the right candidates to build your project without breaking the bank.",
        "Ongoing Tech Support": "By hiring programmers with us you can get ongoing technical support. Our programmers let you ensure the smooth working of your app by helping you resolve bugs and errors and provide solutions to your queries instantly.",

         // java specific benefits
        "Vast Talent Pool": "At iFour, we have a team of talented and skilled professionals driven by creativity and productivity. Our experts can help you build tailored solutions addressing multiple business challenges while ensuring client satisfaction.",
        "Java Industry Expertise": "Our Java developer team has enough expertise to build industry-specific solutions for clients. Moreover, the team is well-versed in working with the latest technologies and tools to produce robust and profitable outcomes.", 
        "Java Communication": "Collaboration and communication remain the prime factors in every project's success. Our Java experts maintain clear communication throughout the project and keep you updated with the project's progress regularly.",
        "Java Cost Solutions": "We offer cost-effective engagement models to hire Java developers. Connect with our top Java programmers who can help you build feature-rich and customized solutions at competitive pricing.",
        "Java Agile Process": "We follow an agile development methodology to help you ensure the software aligns with the changing business requirements. This interactive approach unlocks more space for continuous feedback and improvements in project development.",
        "Java Quick Hiring": "We follow a straightforward approach to help you hire Java developers quickly. With our flexible hiring options, clients can select the best model suiting their project needs, which allows you to optimize your budget without interfering with quality."
    };

    const servicesToDisplay = services.length > 0 ? services : defaultServices;

    return (
        <>
            {/* Global CSS for service grid styling */}
            <style jsx global>{`
                .service-two-area {
                    background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%) !important;
                }
                .service-two__item {
                    border-radius: 0 !important;
                    border-top-left-radius: 0 !important;
                    border-top-right-radius: 0 !important;
                    border-bottom-left-radius: 0 !important;
                    border-bottom-right-radius: 0 !important;
                }
            `}</style>
            
            <section id="service-two-section" className="service-two-area secondary-bg pt-120 pb-120" style={{ marginTop: '70px', marginBottom: '70px' }}>
                {/* Background shapes matching home-two */}
                <div className="service-two__shape-left sway_Y__animationY">
                    <Image src={shape_1} alt="shape" />
                </div>
                <div className="service-two__shape-right sway_Y__animation">
                    <Image src={shape_2} alt="shape" />
                </div>
                
                <div className="container">
                    {/* Section Header */}
                    <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-60">
                        <div className="section-header">
                            <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.75" y="0.750061" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95"
                                        strokeWidth="1.5" />
                                    <mask id="path-2-inside-1_670_477" fill="white">
                                        <path
                                            d="M3 6.00006C3 3.79092 4.79086 2.00006 7 2.00006H13C15.2091 2.00006 17 3.79092 17 6.00006C17 8.2092 15.2091 10.0001 13 10.0001H7C4.79086 10.0001 3 8.2092 3 6.00006Z" />
                                    </mask>
                                    <path
                                        d="M3 6.00006C3 2.96249 5.46243 0.500061 8.5 0.500061H11.5C14.5376 0.500061 17 2.96249 17 6.00006C17 4.61935 15.2091 3.50006 13 3.50006C3 4.61935 3 6.00006ZM17 6.00006C17 9.03763 14.5376 11.5001 11.5 11.5001H8.5C5.46243 11.5001 3 9.03763 3 6.00006ZM3 10.0001V2.00006V10.0001ZM17 2.00006V10.0001V2.00006Z"
                                        fill="#0f7a95" mask="url(#path-2-inside-1_670_477)" />
                                </svg>
                                {title.toUpperCase()}
                            </h5>
                            <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ fontSize: '24px', fontWeight: '400', opacity: '0.9' }}>
                                {subtitle}
                            </h2>
                        </div>
                    </div>

                    {/* Services Grid - 2 rows of 3 services each */}
                    <div className="row g-4">
                        {servicesToDisplay.map((serviceTitle, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12" 
                                 style={{ 
                                     animationDelay: `${index * 100}ms`,
                                     animationDuration: '1000ms',
                                     padding: '12px'
                                 }}>
                                <div className="service-two__item wow fadeInUp" 
                                     data-wow-delay={`${index * 200}ms`} 
                                     data-wow-duration="1500ms"
                                     style={{
                                         height: '100%',
                                         display: 'flex',
                                         flexDirection: 'column',
                                         transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                         cursor: 'pointer',
                                         position: 'relative',
                                         borderTopLeftRadius: '0',
                                         borderTopRightRadius: '0',
                                         borderBottomLeftRadius: '0',
                                         borderBottomRightRadius: '0',
                                         background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                                         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                                         border: '2px solid transparent',
                                         overflow: 'hidden'
                                     }}
                                     onMouseEnter={(e) => {
                                         e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                         e.currentTarget.style.boxShadow = '0 25px 50px rgba(15, 122, 149, 0.2), 0 0 0 1px rgba(15, 122, 149, 0.1)';
                                         e.currentTarget.style.border = '2px solid #0f7a95';
                                         e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
                                     }}
                                     onMouseLeave={(e) => {
                                         e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                         e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                                         e.currentTarget.style.border = '2px solid transparent';
                                         e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)';
                                     }}>
                                    
                                    {/* Ripple Effect Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '0',
                                        right: '0',
                                        bottom: '0',
                                        background: 'radial-gradient(circle at center, rgba(15, 122, 149, 0.1) 0%, transparent 70%)',
                                        opacity: '0',
                                        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        pointerEvents: 'none',
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                        borderBottomLeftRadius: '0',
                                        borderBottomRightRadius: '0'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = '0';
                                    }}></div>
                                    
                                    {/* Service Header - Teal area with title */}
                                    <div className="image">
                                        <div style={{
                                            width: '100%',
                                            height: '120px',
                                            background: 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '0',
                                            position: 'relative',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            overflow: 'hidden',
                                            padding: '12px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%), linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)';
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)';
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}>
                                            {/* Service Title in teal area */}
                                            <h4 style={{
                                                color: '#ffffff',
                                                fontSize: '22px',
                                                fontWeight: '600',
                                                margin: '0 0 8px 0',
                                                textAlign: 'center',
                                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                            }}>
                                                {serviceTitle}
                                            </h4>
                                            
                                            {/* Subtle pattern overlay */}
                                            <div style={{
                                                position: 'absolute',
                                                top: '0',
                                                left: '0',
                                                right: '0',
                                                bottom: '0',
                                                backgroundImage: `
                                                    linear-gradient(90deg, transparent 98%, rgba(255,255,255,0.1) 100%),
                                                    linear-gradient(0deg, transparent 98%, rgba(255,255,255,0.1) 100%)
                                                `,
                                                backgroundSize: '20px 20px',
                                                opacity: '0.2'
                                            }}></div>
                                        </div>
                                    </div>

                                    {/* Service Content - Description */}
                                    <div className="service-two__content" style={{
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        padding: '24px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '0'
                                    }}>
                                        {/* Content overlay */}
                                        <div style={{
                                            position: 'relative',
                                            zIndex: '2',
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            padding: '16px',
                                            borderRadius: '0',
                                            backdropFilter: 'blur(5px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)'
                                        }}>
                                            <p style={{
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                textShadow: '0 0 0 rgba(15, 122, 149, 0)',
                                                color: '#666',
                                                fontSize: '16px',
                                                lineHeight: '1.6',
                                                margin: '0',
                                                textAlign: 'center'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.textShadow = '0 0 8px rgba(15, 122, 149, 0.3)';
                                                e.currentTarget.style.color = '#2c3e50';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.textShadow = '0 0 0 rgba(15, 122, 149, 0)';
                                                e.currentTarget.style.color = '#666';
                                            }}>
                                                {serviceDescriptions[serviceTitle] || `Hire expert developers for ${serviceTitle.toLowerCase()}. Our team provides professional development services tailored to your needs.`}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceTwo;
