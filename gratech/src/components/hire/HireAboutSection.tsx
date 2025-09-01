"use client";

import React from 'react';
import Image from 'next/image';

import shape_5 from "@/assets/images/shape/about-line.png";

interface HireAboutSectionProps {
    title?: string;
    description?: string;
    hiringOptions?: {
        title: string;
        subtitle?: string;
        options: string[];
    };
    hiringProcess?: {
        title: string;
        steps: string[];
    };
}

const HireAboutSection: React.FC<HireAboutSectionProps> = ({
    title,
    description,
    hiringOptions = {
        title: "How to Hire Developers from iFour?",
        options: [
            "On an hourly basis",
            "As a part of the dedicated team"
        ]
    },
    hiringProcess = {
        title: "We have a straightforward hiring process, which is as follows:",
        steps: [
            "Gathering requirements",
            "Sending CVs of our developers",
            "Shortlisting the programmer",
            "Discussing contract and payment details",
            "Introducing the team to the client",
            "Project discussion",
            "Setting up the work environment",
            "Starting the project"
        ]
    }
}) => {
    return (
        <section className="about-area sub-bg pt-120 pb-120" style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
            marginTop: '70px'
        }}>
            <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                <Image src={shape_5} alt="shape" width={100} height={100} />
            </div>
            <div className="container">
                {/* Title and Description Section */}
                {title && description && (
                    <div className="row mb-5">
                        <div className="col-12 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                            <div className="section-header text-center mb-40">
                                <h2 style={{ 
                                    color: '#0f7a95', 
                                    fontSize: '2.5rem', 
                                    fontWeight: '700',
                                    marginBottom: '20px',
                                    lineHeight: '1.2'
                                }}>
                                    {title}
                                </h2>
                                <p style={{ 
                                    color: '#666', 
                                    fontSize: '1.1rem', 
                                    lineHeight: '1.6',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {description}
                                </p>
                                
                                {/* CTA Button - Positioned above the CTA section */}
                                <div className="cta-button-section" style={{ marginTop: '40px' }}>
                                    <a 
                                        href="/contact" 
                                        className="btn-one"
                                        style={{
                                            display: 'inline-block',
                                            backgroundColor: '#0f7a95',
                                            color: 'white',
                                            padding: '15px 30px',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontSize: '18px',
                                            fontWeight: '600',
                                            transition: 'all 0.3s ease',
                                            boxShadow: '0 4px 15px rgba(15, 122, 149, 0.2)',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#0a5a6a';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 122, 149, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#0f7a95';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 122, 149, 0.2)';
                                        }}
                                    >
                                        Schedule Your Free Consultation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="row g-4">
                    {/* Left Side - Empty for spacing */}
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    </div>

                    {/* Right Side - Removed */}
                </div>
            </div>
        </section>
    );
};

export default HireAboutSection;
