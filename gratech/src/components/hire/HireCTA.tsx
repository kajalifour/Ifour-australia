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
            
            <section className="hire-cta-section pt-80 pb-80" style={{ paddingBottom: '60px', marginBottom: '60px' }}>
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
