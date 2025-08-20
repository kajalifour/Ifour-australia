"use client"

import React from 'react';

interface WhyChooseUsData {
  title: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
  ctaSuffix: string;
}

interface WhyChooseUsSectionProps {
  data: WhyChooseUsData;
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ data }) => {
  return (
    <section className="why-choose-us-section pt-120 pb-80" style={{ 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
      marginBottom: '50px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="content-section text-center">
              <h2 style={{ 
                color: '#0f7a95', 
                fontSize: '2.5rem', 
                fontWeight: '700',
                marginBottom: '2rem',
                lineHeight: '1.2'
              }}>
                {data.title}
              </h2>
              
              <div className="text-content" style={{ 
                color: '#666', 
                fontSize: '1.1rem', 
                lineHeight: '1.8',
                textAlign: 'left'
              }}>
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1.5rem' }}>
                    {paragraph}
                  </p>
                ))}
                
                <p style={{ 
                  marginBottom: '0',
                  fontWeight: '600',
                  color: '#0f7a95'
                }}>
                  <a href={data.ctaLink} style={{ 
                    color: '#0f7a95',
                    textDecoration: 'underline',
                    fontWeight: '600'
                  }}>
                    {data.ctaText}
                  </a> {data.ctaSuffix}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
