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
    <section className="angular-benefits-section pt-120 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="content-section text-center">
              <h2>
                {data.title}
              </h2>
              
              <div className="angular-benefits-description">
                <p>
                  {data.description}
                </p>
              </div>
              
              <div className="angular-benefits-grid">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="angular-benefits-item">
                    <div className="angular-benefits-top-bar"></div>
                    
                    <div className="angular-benefits-item-content">
                      <div className="angular-benefits-number">
                        {index + 1}
                      </div>
                      <h4 className="angular-benefits-title">
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
