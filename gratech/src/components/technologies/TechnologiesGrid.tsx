"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import shapeLeft from "@/assets/images/shape/service-two-shape-left.png";
import shapeRight from "@/assets/images/shape/service-two-shape-right.png";

interface TechnologyItem {
    id: number;
    title: string;
    desc: string;
    link: string;
    icon?: string; // path under public assets
}

interface TechnologiesGridProps {
    items?: TechnologyItem[];
}

const defaultItems: TechnologyItem[] = [
    { id: 1, title: "Angular Development", link: "/angular-development-company", desc: "Build dynamic, scalable SPAs with Angular and TypeScript.", icon: "/assets/images/technologies/tech-image-01.png" },
    { id: 2, title: ".NET Development", link: "/dotnet-development-company", desc: "Enterprise-grade solutions using ASP.NET Core and Azure.", icon: "/assets/images/technologies/tech-image-02.png" },
    { id: 3, title: "Node.js Development", link: "/node-js-development-company", desc: "High‑performance APIs and real-time apps with Node.js.", icon: "/assets/images/technologies/tech-image-03.png" },
    { id: 4, title: "C# Development", link: "/c-sharp-development-company", desc: "Robust applications leveraging modern C# and .NET.", icon: "/assets/images/technologies/tech-image-04.png" },
    { id: 5, title: "Java Development", link: "/java-development-company", desc: "Cloud‑ready, scalable Java platforms and services.", icon: "/assets/images/technologies/tech-image-05.png" },
    { id: 6, title: "Salesforce Development", link: "/salesforce-development-company", desc: "Customize, integrate, and extend your Salesforce org.", icon: "/assets/images/technologies/tech-image-06.webp" },
    { id: 7, title: "WPF Development", link: "/wpf-application-development-company", desc: "Modern Windows desktop apps with WPF and MVVM.", icon: "/assets/images/technologies/tech-image-07.png" },
    { id: 8, title: "React.js Development", link: "/reactjs-development-company", desc: "Fast, accessible, and maintainable React frontends.", icon: "/assets/images/technologies/tech-image-08.png" },
];

const TechnologiesGrid: React.FC<TechnologiesGridProps> = ({ items = defaultItems }) => {
    return (
        <section id="technologies-grid" className="service-two-area secondary-bg pt-120 pb-120">
            <div className="service-two__shape-left sway_Y__animationY">
                <Image src={shapeLeft} alt="shape" />
            </div>
            <div className="service-two__shape-right sway_Y__animation">
                <Image src={shapeRight} alt="shape" />
            </div>

            <div className="container">
                <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-60">
                    <div className="section-header">
                        <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="0.750061" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95" strokeWidth="1.5" />
                                <mask id="path-2-inside-1_670_477" fill="white">
                                    <path d="M3 6.00006C3 3.79092 4.79086 2.00006 7 2.00006H13C15.2091 2.00006 17 3.79092 17 6.00006C17 8.2092 15.2091 10.0001 13 10.0001H7C4.79086 10.0001 3 8.2092 3 6.00006Z" />
                                </mask>
                                <path d="M3 6.00006C3 2.96249 5.46243 0.500061 8.5 0.500061H11.5C14.5376 0.500061 17 2.96249 17 6.00006C17 4.61935 15.2091 3.50006 13 3.50006C3 4.61935 3 6.00006ZM17 6.00006C17 9.03763 14.5376 11.5001 11.5 11.5001H8.5C5.46243 11.5001 3 9.03763 3 6.00006ZM3 10.0001V2.00006V10.0001ZM17 2.00006V10.0001V2.00006Z" fill="#0f7a95" mask="url(#path-2-inside-1_670_477)" />
                            </svg>
                            TECHNOLOGIES WE WORK WITH
                        </h5>
                        <h2 className="text-white wow fadeInLeft technologies-grid-header" data-wow-delay="200ms" data-wow-duration="1500ms">
                            Explore Our Technology Capabilities
                        </h2>
                    </div>
                </div>

                <div className="row g-4">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="col-lg-4 col-md-6 col-sm-12 technologies-grid-column wow fadeInUp"
                            data-wow-delay={`${index * 100}ms`}
                            data-wow-duration="1000ms"
                        >
                            <Link href={item.link} className="text-decoration-none">
                                <div className="technologies-grid-item wow fadeInUp" data-wow-delay={`${index * 200}ms`} data-wow-duration="1500ms">
                                    <div className="technologies-grid-overlay"></div>
                                    <div className="image">
                                        <div className="technologies-grid-image-container">
                                            {item.icon && (
                                                <Image src={item.icon} alt={`${item.title} icon`} width={48} height={48} className="technologies-grid-icon" />
                                            )}
                                            <h4 className="technologies-grid-title">{item.title}</h4>
                                        </div>
                                    </div>
                                    <div className="technologies-grid-content-wrapper">
                                        <div className="technologies-grid-content">
                                            <p className="technologies-grid-description">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesGrid;


