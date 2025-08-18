"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import icon_1 from "@/assets/images/icon/service-icon1.png";
import icon_2 from "@/assets/images/icon/service-icon2.png";
import icon_3 from "@/assets/images/icon/service-icon3.png";
import shape_1 from "@/assets/images/shape/service-two-shape-left.png";
import shape_2 from "@/assets/images/shape/service-two-shape-right.png";

// Hire-specific data structure matching the service grid design
interface HireItem {
    id: number;
    icon: any;
    title: string;
    desc: string;
}

// Props interface for HireGrid
interface HireGridProps {
    hireData?: any[]; // Hire data from the page
    services?: string[]; // Services array from the page
    title?: string; // Custom title for the section
}

const HireGrid: React.FC<HireGridProps> = ({ hireData, services, title = "Hiring Services" }) => {
    // Default hire data if none provided
    const defaultHireData: HireItem[] = [
        {
            id: 1,
            icon: icon_2,
            title: "Custom Development",
            desc: "Hire dedicated developers for custom software development projects. Our team specializes in building scalable solutions tailored to your business requirements."
        },
        {
            id: 2,
            icon: icon_1,
            title: "Web Application Development",
            desc: "Get expert web developers for building modern, responsive web applications. We focus on user experience and performance optimization."
        },
        {
            id: 3,
            icon: icon_3,
            title: "Mobile App Development",
            desc: "Hire mobile developers for iOS and Android applications. Our developers create native and cross-platform mobile solutions."
        },
        {
            id: 4,
            icon: icon_1,
            title: "API Development",
            desc: "Expert developers for RESTful API development and integration. We build robust backend services and ensure seamless connectivity."
        },
        {
            id: 5,
            icon: icon_2,
            title: "Database Management",
            desc: "Hire database specialists for design, optimization, and management. We ensure data security and performance for your applications."
        },
        {
            id: 6,
            icon: icon_3,
            title: "Cloud Solutions",
            desc: "Get cloud experts for migration, deployment, and management. We help you leverage cloud technologies for scalability and cost-effectiveness."
        }
    ];

    // Use provided hire data or default data
    let hireToDisplay: HireItem[] = defaultHireData;

    // If services array is provided, use it to create hire items
    if (services && services.length > 0) {
        // Create a mapping of service titles to their specific descriptions
        const hireDescriptions: { [key: string]: string } = {
            "Custom Product development": "Hire developers for custom product development. Our team transforms your vision into innovative solutions with end-to-end consultation from concept to product launch.",
            "Web application development": "Hire web developers who build stunning and user-centered web applications. We integrate modern tech stacks to deliver high-performing web apps that help you stand out.",
            "Client-server applications": "Hire experienced developers for client-server applications. Our team builds scalable and secure solutions that drive business agility and performance.",
            "Cloud application development": "Hire cloud developers for building scalable cloud applications. We create secure cloud solutions that drive business agility and cost optimization.",
            "Business line solutions": "Hire developers for business line solutions. We help simplify your business operations by designing tailored solutions that address your specific challenges.",
            "Desktop applications": "Hire desktop app developers for creating user-friendly and high-performing desktop solutions that maximize productivity and integrate seamlessly with your infrastructure.",
            "Internet or intranet applications": "Hire developers for internet and intranet applications. We provide reliable support and maintenance services to ensure continued performance and security.",
            "Software or web maintenance": "Hire maintenance specialists for ongoing software and web application support. We monitor your applications after deployment and address issues promptly.",
            
            // .NET specific services
            ".NET Web Development": "We specialize in designing and developing dynamic and responsive web-based software solutions using ASP.NET that help to ensure optimum user satisfaction.",
            ".NET Mobile App Development": "Our .NET developers have expertise in crafting high-quality mobile apps that can run on multiple platforms and offer a range of advanced features.",
            ".NET Desktop Development": "Build powerful and high-performing Windows applications with WPF to achieve an interface that is both intuitive and consistent with the Windows operating system.",
            ".NET Integration Services": "Our services include integrating .NET solutions with other powerful tools and we also help you upgrade your existing solutions to improve its performance.",
            ".NET Migration": "Receive expert guidance from our team of skilled .NET programmers to migrate your legacy .NET application and ensure long-term sustainability of your system.",
            ".NET Support & Maintenance": "By partnering with us clients can get continuous support and maintenance services which ensures optimal performance of your software and seamless user experience.",
            
            // Angular specific services
            "Angular Web Development": "With the expertise of Angular web development, our experts help you craft high-performing web apps with interactive UI and responsive app designs. Our coder uses Angular's robust toolkit to create enterprise-grade solutions.",
            "Angular App Development": "Our programmers help you build Angular mobile apps that are high-performing, secure, and scalable to help you provide a better user experience. Hire Angular developers from iFour to build tailored mobile apps for your needs.",
            "Angular UI/UX Design": "Our AngularJS experts help you create an interactive front end. Get help from our programmers to craft attractive UI/UX designs to improve app performance which ultimately benefits to boost user engagement.",
            "Migration Services": "Hire dedicated Angular experts to migrate your existing apps to Angular and improve performance to provide a feature-rich user experience. Our team works to improve the performance of the software with minimal downtime.",
            "API Development & Integration": "Get experts for custom API development using Angular for robust architectures and scalability. Apart from this, our developers also have expertise in integrating Angular software with third-party systems and services.",
            "Angular Support & Maintenance": "By hiring Angular developers from us you can access quick support and maintenance services for your projects. Our programmer promptly resolves bugs and improves performance to keep your software up to date.",
            
            // Node.js specific services
            "Node.js Web & Network App Development": "Our Node.js web and network app development services include building server-side apps, APIs, and real-time web apps using Node.js' asynchronous and event-driven I/O model.",
            "Node.js API Development Service": "Hire Node.js developers from us to leverage our API development services, our programmers build robust and secure APIs while ensuring smooth data exchange and communication between your applications and services.",
            "Consulting, Maintenance & Support Service": "Our Node JS experts provide expert guidance and consultation while offering maintenance and support services to help you ensure the app's performance and security.",
            "Custom Web App Development": "Engage with our coders to obtain dynamic and high-performing web app development services using Node.js. Our experts help you ensure a smooth and seamless user experience for your web apps.",
            "Content Management System": "Simplify the workflow of your corporate content management with our CMS development services. Our Node.js experts create flexible and dynamic content management systems that suit your business needs.",
            "Microservices Architecture": "Get help from our Node JS coders to design and implement microservices architecture which will help improve your app's flexibility, maintainability, and deployment efficiency.",
            "E-commerce Web Development": "Our Node.js specialist crafts scalable and reliable e-commerce web using Node technology, helping clients provide a smooth shopping experience and simplified transaction processes to the end user.",
            "Node.js Plugin Development": "We have a talent pool of Node JS developers to hire who can help you build node.js plugins. Leverage the expertise of our programmers to get functional plugins that enhance the capabilities of business apps.",
            "Migration to the Latest Version": "Our Node.js programmers utilize highly curated app migration best practices to help you migrate your web or mobile app to Node's latest dynamic architecture resulting in a faster and secure I/O process.",
            
            // Java specific services
            "Enterprise App Development": "Engage with a group of Java developers from iFour to build versatile and scalable enterprise software. Our Java programmers possess hands-on experience in crafting robust and user-friendly web apps for your needs.",
            "Product Development Expertise": "Our programmers possess in-depth expertise and experience to craft custom solutions that align with your business goals. With our innovative approach to software development, our Java team helps you transform your ideas into a market-ready product.",
            "Cloud-native Software Development": "Get the right assistance from our Java programmers who can help you build and deploy Java programs on cloud platforms like AWS, GCP, and Azure. Fuel your solution using the true power of cloud platforms at cost-effective budgeting.",
            "Software App Re-engineering": "Hire Java developers with us to improve the functionality and performance of your app. With our app re-engineering services, you can modernize your product by updating architecture and improving UI/UX. Our programmers provide consistent support to update software.",
            "Architecture & Design Consulting": "Our Java experts provide strategic guidance and subject matter specification to design eye-catching and efficient software architectures. Our programmers also focus on the flexibility of the architecture to design future-proof solutions.",
            "Support and Maintenance": "Our Java programmers offer continuous support and maintenance services to help you ensure the seamless performance of your software. Our Java developers will assist you resolve any queries or bugs to ensure the smooth working of the app.",
            
            // C# specific services
            "Custom Software Development": "Hire our C# experts to build custom solutions tailored to unique requirements that align with your business objectives. Our programmers build robust solutions to help you provide an unmatched user experience.",
            "C# SaaS Development": "Benefit your business with boosted efficiency and productivity by opting for SaaS development. Our coders create secure and performant SaaS-based apps that help you deliver reliable experiences to your users.",
            "C# PaaS Development": "Access the development platform remotely through PaaS powered by cloud computing and develop your apps without managing the underlying infrastructure. Get the right assistance to build, test, and use software in a single environment.",
            "C# Cloud Development": "We offer comprehensive cloud services including IaaS, SaaS, and PaaS offerings for your business. Hire C# developers with us having extensive experience in building highly interactive apps and platforms for the cloud.",
            "C# Migration Services": "Leverage our C# migration services to upgrade your legacy apps to keep your business functional and up to date. Our C# programmers help you effectively solve your legacy system concerns.",
            "C# Integration Services": "We specialize in optimizing data flow, and streamlining processes, through seamless integration of APIs, legacy systems, and cloud services. Onboard our C Sharp experts to ensure a smooth connection between your system and third-party services.",
            "Mobile App Development": "Hire our top C# experts to create dynamic and efficient Android and iOS apps. Our programmers follow coding best practices to deliver scalable and qualitative solutions that drive business growth.",
            "Windows App Development": "We have skilled programmers proficient in building impressive UIs, standalone intranet apps, and Windows desktop apps. Our experts provide top-notch services to help you streamline your business operations.",
            "C# Support and Maintenance": "Ensure the smooth performance and flawless functionality of your software with our support and maintenance services. Our programmers will help you resolve any issues that you encounter to help you enjoy a seamless performance.",
            
            // WPF specific services
            "Custom WPF Development": "iFour specializes in creating tailored WPF applications that align with specific business requirements, ensuring high functionality and efficiency. Our skilled team creates innovative applications and delivers tailored solutions that enhance your competitive edge.",
            "WPF Business Portals & Intelligence": "We consolidate information from various stages within an enterprise application, leading to reduced costs. Data is transmitted based on established trust levels, which boosts efficiency. We use Business Intelligence methods to generate reports contributing to a business's growth.",
            "Migration and Porting to .Net platform": "Our programmers at iFour help you seamlessly migrate your existing app to the .NET framework. Our WPF developers modernize and optimize the app to ensure smooth performance and improved user experiences.",
            "WPF Components Development": "Hire WPF developers with us who can create custom WPF components that enhance user interfaces, leading to engaging experiences for Windows applications. Our feature-rich designs improve usability and navigation, making your application more profitable for your brand.",
            "Legacy App Modernization": "Our experts specialize in revitalizing outdated WPF apps by modernizing their design, functionality, and performance. This process involves updating user interfaces to be more intuitive, enhancing features, and optimizing performance. By transforming legacy software into dynamic solutions, you can ensure these applications meet current industry standards and user expectations.",
            "WPF Add-in Development": "Our WPF programmers help you extend the functionality of WPF apps by developing custom add-ins. These custom tools empower users with innovative features designed to increase productivity and improve overall business efficiency. By integrating these add-ins, you can transform your app into powerful solutions that meet your organization's specific needs and drive growth.",
            
            // Vue.js specific services
            "Vue.js UI Development": "iFour provides Vue.js developers for hire who quickly integrate into your existing team to help you build interactive user interfaces for your web apps tailored to your precise needs.",
            "Vue.js Web App Development": "Hire Vue.js developers who have extensive experience in building secure, feature-rich, and highly scalable web apps customized according to your needs and help you achieve your business goals.", 
            "Progressive Web App (PWA) Development": "Partner with iFour to hire Vue.js developers who work to create Progressive Web Apps (PWAs) that are fast, reliable, and work across all devices and help you enjoy a native-like app experience.",
            "MVP/PoC Development": "Hire our top talent for Proof-of-Concept development and Minimum Viable Product development services. These services help you test a new idea quickly without any high investment.",
            "Vue.js App Migration": "Get assistance from our team to migrate your current application from another framework to Vue.js technology to improve the performance, responsiveness, and efficiency of your application.",
            "Vue.js Support & Maintenance": "Get post-launch app support and maintenance services from our Vue.js programmers. These ongoing support services will help to enhance the usability and seamlessness of your application."
        };

        // Create hire items from services array
        hireToDisplay = services.map((serviceTitle, index) => ({
            id: index + 1,
            icon: [icon_1, icon_2, icon_3][index % 3], // Cycle through icons
            title: serviceTitle,
            desc: hireDescriptions[serviceTitle] || `Hire expert developers for ${serviceTitle.toLowerCase()}. Our team provides professional development services tailored to your needs.`
        }));
    }

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
            <section id="service-section" className="service-two-area secondary-bg pt-120 pb-120">
            {/* Background shapes matching home-two */}
            <div className="service-two__shape-left sway_Y__animationY">
                <Image src={shape_1} alt="shape" />
            </div>
            <div className="service-two__shape-right sway_Y__animation">
                <Image src={shape_2} alt="shape" />
            </div>
            
            <div className="container">
                {/* Section Header - Exact copy from home-two */}
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
                            HIRING SERVICES
                        </h5>
                        <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            Exclusive Hiring Services
                        </h2>
                    </div>
                </div>

                {/* Hire Services Grid - 2 rows of 3 services each */}
                <div className="row g-4">
                    {hireToDisplay.map((service, index) => (
                        <div key={service.id} className="col-lg-4 col-md-6" 
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
                                            {service.title}
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
                                            {service.desc}
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

export default HireGrid;
