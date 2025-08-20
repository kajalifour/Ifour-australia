"use client"

import React from 'react';

interface AngularBenefitsData {
  title: string;
  description: string;
  benefits: string[];
}

interface AngularBenefitsSectionProps {
  data: AngularBenefitsData;
}

const AngularBenefitsSection: React.FC<AngularBenefitsSectionProps> = ({ data }) => {
  return (
    <section className="angular-benefits-section pt-120 pb-80" style={{ 
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
              
              <div className="description" style={{ 
                color: '#666', 
                fontSize: '1.1rem', 
                lineHeight: '1.8',
                marginBottom: '3rem',
                textAlign: 'left'
              }}>
                <p>
                  {data.description}
                </p>
              </div>
              
              <div className="benefits-grid" style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                {data.benefits.map((benefit, index) => (
                  <div key={index} style={{ 
                    background: '#fff',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    textAlign: 'left',
                    border: '2px solid #f0f0f0',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #0f7a95, #15a4c7)'
                    }}></div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <div style={{ 
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #0f7a95, #15a4c7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }}>
                        {index + 1}
                      </div>
                      <h4 style={{ 
                        color: '#0f7a95',
                        fontSize: '1.3rem',
                        fontWeight: '600',
                        margin: '0'
                      }}>
                        {benefit}
                      </h4>
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

export default AngularBenefitsSection;
