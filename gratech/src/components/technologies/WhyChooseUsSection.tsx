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
    <section className="why-choose-us-section pt-120 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="content-section text-center">
              <h2>
                {data.title}
              </h2>
              
              <div className="why-choose-us-text-content">
                {data.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
                
                <p className="why-choose-us-cta-text">
                  <a href={data.ctaLink} className="why-choose-us-cta-link">
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
