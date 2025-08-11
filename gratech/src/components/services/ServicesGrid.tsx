"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import icon_1 from "@/assets/images/icon/service-icon1.png";
import icon_2 from "@/assets/images/icon/service-icon2.png";
import icon_3 from "@/assets/images/icon/service-icon3.png";
import shape_1 from "@/assets/images/shape/service-two-shape-left.png";
import shape_2 from "@/assets/images/shape/service-two-shape-right.png";

// Service data structure matching the home-two template
interface ServiceItem {
    id: number;
    thumb?: any;
    icon: any;
    title: string;
    desc: string;
}

// Props interface for ServicesGrid
interface ServicesGridProps {
    serviceData?: any[]; // Service data from the page
    services?: string[]; // Services array from the page
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ serviceData, services }) => {
    // Default service data if none provided
    const defaultServicesData: ServiceItem[] = [
        {
            id: 1,
            icon: icon_2,
            title: "Office 365 Licenses",
            desc: "We help you assist in finding the best plan to access a suite of productivity apps that satisfy your business needs. Businesses can leverage advanced security, compliance tools, and additional storage by choosing the best plan without breaking the bank."
        },
        {
            id: 2,
            icon: icon_1,
            title: "Office 365 Managed Services",
            desc: "Our Microsoft 365 managed services empower clients to fully leverage their subscriptions by handling routine maintenance and support tasks. This service alleviates the daily burden on IT teams, allowing them to focus on more important projects."
        },
        {
            id: 3,
            icon: icon_3,
            title: "Migration from Legacy Email Provider",
            desc: "iFour helps you migrate from legacy tools to the future-proof solutions. We provide migration services for Zoho Office Suite, IBM Connections, Word Perfect, Live Link, and G Suite like platforms to the latest version of Office 365."
        },
        {
            id: 4,
            icon: icon_1,
            title: "Migration from Google Workspace",
            desc: "We also assist clients to migrate from Google Workspace to Microsoft 365, which includes Mail & Rules, Contacts, and Calendar from G Suite to Microsoft 365. We ensure data integrity while transitioning from one platform to another."
        },
        {
            id: 5,
            icon: icon_2,
            title: "Migration from Exchange on-premises to Office 365",
            desc: "By migrating from Exchange on-premises to Office 365, businesses can take advantage of cloud benefits. The service includes migrating all emails, contacts, and calendars from user mailboxes to Office 365."
        },
        {
            id: 6,
            icon: icon_3,
            title: "Migration from open-source email to Office 365",
            desc: "We also help clients migrate from open-source email to Office 365 where clients can choose to migrate the content of user mailboxes from open-source mailbox to Microsoft 365. This helps clients improve productivity and scalability."
        }
    ];

    // Use provided service data or default data
    let servicesToDisplay: ServiceItem[] = defaultServicesData;

    // If services array is provided, use it to create service items (PRIORITY)
    if (services && services.length > 0) {
        // Create a mapping of service titles to their specific descriptions
        const serviceDescriptions: { [key: string]: string } = {
            // Microsoft 365 Services
            "Office 365 Licenses": "We help you assist in finding the best plan to access a suite of productivity apps that satisfy your business needs. Businesses can leverage advanced security, compliance tools, and additional storage by choosing the best plan without breaking the bank.",
            "Office 365 Managed Services": "Our Microsoft 365 managed services empower clients to fully leverage their subscriptions by handling routine maintenance and support tasks. This service alleviates the daily burden on IT teams, allowing them to focus on more important projects.",
            "Migration from Legacy Email Provider": "iFour helps you migrate from legacy tools to the future-proof solutions. We provide migration services for Zoho Office Suite, IBM Connections, Word Perfect, Live Link, and G Suite like platforms to the latest version of Office 365.",
            "Migration from Google Workspace": "We also assist clients to migrate from Google Workspace to Microsoft 365, which includes Mail & Rules, Contacts, and Calendar from G Suite to Microsoft 365. We ensure data integrity while transitioning from one platform to another.",
            "Migration from Exchange on-premises to Office 365": "By migrating from Exchange on-premises to Office 365, businesses can take advantage of cloud benefits. The service includes migrating all emails, contacts, and calendars from user mailboxes to Office 365.",
            "Migration from open-source email to Office 365": "We also help clients migrate from open-source email to Office 365 where clients can choose to migrate the content of user mailboxes from open-source mailbox to Microsoft 365. This helps clients improve productivity and scalability.",
            
            // Mobile App Development Services
            "Android App Development": "Our team holds the necessary expertise in Android app development. With a focus on smooth user experience and advanced functionalities, we build Android apps that help you grow in this competitive market.",
            "iOS App Development": "Build for Apple's ecosystem, our team delivers sleek and intuitive solutions for iOS app development. With extensive experience in building iOS solutions, our team crafts fully functional app that satisfies your needs.",
            "Xamarin App Development": "Get high-performing mobile apps that provide a smooth user experience across Android, iOS, and Windows platforms with our Xamarin app development services. Our team is proficient in building robust solutions that meet your business goals.",
            "React Native App Development": "Enjoy cross-platform mobile apps having native capabilities with React Native app development. Our programmers will help you build high-performing apps that suit your unique business needs.",
            "Hybrid App Development": "Get the features of HTML5 and native worlds with our Hybrid app development. With hybrid solutions, you can get a mobile app that seamlessly works across devices like iOS, Android, desktop, and laptop and gives a smooth user experience.",
            "Cross-platform App Development": "Reach a wider audience without spending too much time and money with cross-platform app development services. We craft cross-platform solutions using technologies like React Native to help you enjoy a native-like performance."
        };

        servicesToDisplay = services.slice(0, 6).map((service: string, index: number) => ({
            id: index + 1,
            icon: [icon_1, icon_2, icon_3][index % 3], // Cycle through available icons
            title: service,
            desc: serviceDescriptions[service] || `Professional ${service.toLowerCase()} services tailored to your business needs.`
        }));
    }
    // If serviceData is provided and has items, use it (LOWER PRIORITY)
    else if (serviceData && serviceData.length > 0) {
        servicesToDisplay = serviceData.slice(0, 6).map((item: any, index: number) => ({
            id: item.id || index + 1,
            icon: [icon_1, icon_2, icon_3][index % 3], // Cycle through available icons
            title: item.title || `Service ${index + 1}`,
            desc: item.desc || "Professional service description"
        }));
    }
    // Fallback to default services
    else {
        // servicesToDisplay already contains defaultServicesData
    }
    
    return (
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
                                    d="M3 6.00006C3 2.96249 5.46243 0.500061 8.5 0.500061H11.5C14.5376 0.500061 17 2.96249 17 6.00006C17 4.61935 15.2091 3.50006 13 3.50006C3 4.61935 3 6.00006ZM17 6.00006C17 9.03763 14.5376 11.5001 11.5 11.5001H8.5C5.46243 11.5001 3 9.03763 3 6.00006C3 7.38077 4.79086 8.50006 7 8.50006H13C15.2091 8.50006 17 7.38077 17 6.00006ZM3 10.0001V2.00006V10.0001ZM17 2.00006V10.0001V2.00006Z"
                                    fill="#0f7a95" mask="url(#path-2-inside-1_670_477)" />
                            </svg>
                            SERVICES WE'RE OFFERING
                        </h5>
                        <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            Exclusive IT Services
                        </h2>
                    </div>
                </div>

                {/* Services Grid - 2 rows of 3 services each */}
                <div className="row g-4">
                    {servicesToDisplay.map((service, index) => (
                        <div key={service.id} className="col-lg-4 col-md-6" 
                             style={{ 
                                 animationDelay: `${index * 100}ms`,
                                 animationDuration: '1000ms'
                             }}>
                            <div className="service-two__item wow fadeInUp" 
                                 data-wow-delay={`${index * 200}ms`} 
                                 data-wow-duration="1500ms">
                                {/* Service Image */}
                                <div className="image">
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        background: 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: '8px 8px 0 0',
                                        position: 'relative'
                                    }}>
                                        {/* Placeholder icon for the image area */}
                                        <div style={{
                                            fontSize: '48px',
                                            color: '#ffffff',
                                            opacity: '0.8'
                                        }}>
                                            🔧
                                        </div>
                                        
                                        {/* Circuit board pattern overlay */}
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
                                            opacity: '0.3'
                                        }}></div>
                                    </div>
                                </div>

                                {/* Service Content - Exact copy from home-two */}
                                <div className="service-two__content">
                                    <div className="icon">
                                        <Image src={service.icon} alt="icon" />
                                    </div>

                                    <h4>
                                        <Link href="/service-details" className="primary-hover">
                                            {service.title}
                                        </Link>
                                    </h4>
                                    <p>{service.desc}</p>
                                    <Link className="read-more-btn" href="/service-details">
                                        Read More <i className="fa-regular fa-arrow-right-long"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
