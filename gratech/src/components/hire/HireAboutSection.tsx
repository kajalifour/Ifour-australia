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
                            </div>
                        </div>
                    </div>
                )}
                <div className="row g-4">
                    {/* Left Side - Hiring Options */}
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-header mb-40">
                                                         {/* Hiring Options Section - Left Side */}
                             <div className="hiring-options wow fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms" style={{ marginTop: '0px' }}>
                                 <h4 style={{ color: '#0f7a95', marginTop: '40px', marginBottom: '15px', fontSize: '24px', fontWeight: '600' }}>
                                     {hiringOptions.title}
                                 </h4>
                                <p style={{ color: '#666', marginBottom: '20px', fontSize: '16px' }}>
                                    {hiringOptions.subtitle || "You can hire professionals in two ways:"}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {hiringOptions.options.map((option, index) => (
                                        <li key={index} style={{ 
                                            color: '#0f7a95', 
                                            fontSize: '18px', 
                                            fontWeight: '500',
                                            marginBottom: '10px',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                            <span style={{ 
                                                marginRight: '10px', 
                                                fontSize: '20px',
                                                fontWeight: 'bold'
                                            }}>
                                                -
                                            </span>
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Hiring Process Steps */}
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="hiring-process-section" style={{ marginTop: '0px' }}>
                            <h4 style={{ color: '#0f7a95', marginTop: '20px', marginBottom: '25px', fontSize: '24px', fontWeight: '600' }}>
                                {hiringProcess.title}
                            </h4>
                            <div className="process-steps">
                                {hiringProcess.steps.map((step, index) => (
                                    <div key={index} className="process-step" style={{ marginBottom: '15px' }}>
                                        <div style={{
                                            backgroundColor: '#0f7a95',
                                            color: 'white',
                                            padding: '15px 20px',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            fontWeight: '500',
                                            display: 'flex',
                                            alignItems: 'center',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer',
                                            boxShadow: '0 4px 15px rgba(15, 122, 149, 0.2)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#0a5a6a';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(15, 122, 149, 0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = '#0f7a95';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(15, 122, 149, 0.2)';
                                        }}>
                                            <span style={{ lineHeight: '1.4', color: '#ffffff' }}>
                                                {step}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HireAboutSection;
