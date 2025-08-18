"use client";

import React from 'react';
import Link from 'next/link';

interface HireCTAProps {
    title: string;
    buttonText?: string;
    buttonLink?: string;
}

const HireCTA: React.FC<HireCTAProps> = ({ 
    title, 
    buttonText = "GET STARTED NOW", 
    buttonLink = "/contact" 
}) => {
    return (
        <>
            {/* Global CSS for CTA styling */}
            <style jsx global>{`
                .hire-cta-section {
                    background: linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%);
                    position: relative;
                    overflow: hidden;
                }
                
                .hire-cta-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
                    animation: shimmer 3s ease-in-out infinite;
                }
                
                @keyframes shimmer {
                    0%, 100% { transform: translateX(-100%); }
                    50% { transform: translateX(100%); }
                }
                
                .hire-cta-content {
                    position: relative;
                    z-index: 2;
                }
                
                .hire-cta-button {
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                    border: none;
                    border-radius: 8px;
                    padding: 16px 32px;
                    font-weight: 600;
                    font-size: 16px;
                    color: #2c3e50;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                
                .hire-cta-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                    transition: left 0.5s;
                }
                
                .hire-cta-button:hover::before {
                    left: 100%;
                }
                
                .hire-cta-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                    background: linear-gradient(135deg, #ffffff 0%, #e9ecef 100%);
                }
                
                .hire-cta-button:active {
                    transform: translateY(0);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                }
            `}</style>
            
            <section className="hire-cta-section pt-80 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="hire-cta-content">
                                <h2 
                                    className="text-white mb-4 wow fadeInUp" 
                                    data-wow-delay="200ms" 
                                    data-wow-duration="1500ms"
                                    style={{
                                        fontSize: '36px',
                                        fontWeight: '700',
                                        lineHeight: '1.3',
                                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {title}
                                </h2>
                                
                                <div className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <Link href={buttonLink}>
                                        <button className="hire-cta-button">
                                            {buttonText}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HireCTA;
