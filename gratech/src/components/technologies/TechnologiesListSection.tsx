"use client"

import React from 'react';

interface TechnologiesListData {
  hiringOptions?: {
    title: string;
    options: string[];
  };
  hiringProcess?: {
    title: string;
    steps: string[];
  };
  angularBenefits?: {
    title: string;
    description: string;
    benefits: string[];
  };
}

interface TechnologiesListSectionProps {
  data: TechnologiesListData;
}

const TechnologiesListSection: React.FC<TechnologiesListSectionProps> = ({ data }) => {
  return (
    <section className="technologies-list-section pt-120 pb-80">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Column: Intro text (if provided) else engagement options */}
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="content-section">
              {data.angularBenefits?.title && data.angularBenefits?.description ? (
                <>
                  <h2>
                    {data.angularBenefits.title}
                  </h2>
                  <div className="technologies-list-description">
                    {data.angularBenefits.description.split('\n\n').map((p, i, arr) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2>
                    {data.hiringOptions?.title || 'Engagement Options'}
                  </h2>
                  <p className="technologies-list-description mb-4">
                    Choose a model that fits your needs
                  </p>
                  <div className="technologies-list-options-list">
                    {data.hiringOptions?.options.map((option, index) => (
                      <div key={index} className="technologies-list-option-item">
                        <div className="technologies-list-option-dot"></div>
                        <span className="technologies-list-option-text">{option}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Right Column: Angular benefits (if provided) else onboarding process */}
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
            <div className="content-section">
              {data.angularBenefits?.benefits ? (
                <div className="technologies-list-benefits-list">
                  {data.angularBenefits.benefits.map((benefit, index) => (
                    <div key={index} className="technologies-list-benefit-item">
                      <span className="technologies-list-benefit-number">{index + 1}</span>
                      <span className="technologies-list-benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <h2>
                    {data.hiringProcess?.title || "Our simple onboarding process"}
                  </h2>
                  <div className="technologies-list-process-steps">
                    {data.hiringProcess?.steps.map((step, index) => (
                      <div key={index} className="technologies-list-process-step">
                        {step}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* No separate Angular benefits section below; rendered in right column when provided */}
    </section>
  );
};

export default TechnologiesListSection;
