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
    <section className="technologies-list-section pt-120 pb-80" style={{ 
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
      marginBottom: '50px'
    }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Column: Intro text (if provided) else engagement options */}
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="content-section">
              {data.angularBenefits?.title && data.angularBenefits?.description ? (
                <>
                  <h2 style={{ 
                    color: '#0f7a95', 
                    fontSize: '2.5rem', 
                    fontWeight: '700',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}>
                    {data.angularBenefits.title}
                  </h2>
                  <div style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.8' }}>
                    {data.angularBenefits.description.split('\n\n').map((p, i, arr) => (
                      <p key={i} style={{ marginBottom: i < arr.length - 1 ? '1rem' : 0 }}>{p}</p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 style={{ 
                    color: '#0f7a95', 
                    fontSize: '2.5rem', 
                    fontWeight: '700',
                    marginBottom: '20px',
                    lineHeight: '1.2'
                  }}>
                    {data.hiringOptions?.title || 'Engagement Options'}
                  </h2>
                  <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Choose a model that fits your needs
                  </p>
                  <div className="options-list">
                    {data.hiringOptions?.options.map((option, index) => (
                      <div key={index} style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        padding: '1rem',
                        background: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                        border: '1px solid #e0e0e0'
                      }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0f7a95', marginRight: '1rem' }}></div>
                        <span style={{ color: '#0f7a95', fontSize: '1.1rem', fontWeight: 500 }}>{option}</span>
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
                <div className="benefits-list">
                  {data.angularBenefits.benefits.map((benefit, index) => (
                    <div key={index} style={{ 
                      background: '#0f7a95',
                      color: '#fff',
                      padding: '0.86rem 1rem',
                      borderRadius: '7px',
                      marginBottom: '0.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: '0 2px 10px rgba(15, 122, 149, 0.3)',
                      fontSize: '0.85rem'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        background: '#fff',
                        color: '#0f7a95',
                        borderRadius: '999px',
                        padding: '0.15rem 0.5rem',
                        marginRight: '0.5rem',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        minWidth: '1.3rem',
                        textAlign: 'center'
                      }}>{index + 1}</span>
                      <span style={{ fontWeight: 600, color: '#fff' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <h2 style={{ 
                    color: '#0f7a95', 
                    fontSize: '2.5rem', 
                    fontWeight: '700',
                    marginBottom: '2rem',
                    lineHeight: '1.2'
                  }}>
                    {data.hiringProcess?.title || "Our simple onboarding process"}
                  </h2>
                  <div className="process-steps">
                    {data.hiringProcess?.steps.map((step, index) => (
                      <div key={index} style={{ 
                        background: index < 2 ? '#0f7a95' : '#15a4c7',
                        color: '#fff',
                        padding: '1.5rem',
                        borderRadius: '10px',
                        marginBottom: '1rem',
                        textAlign: 'center',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 15px rgba(15, 122, 149, 0.3)',
                        transition: 'all 0.3s ease'
                      }}>
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
