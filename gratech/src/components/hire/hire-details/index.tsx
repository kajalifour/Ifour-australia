"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceDetailsArea from "@/components/hire/HireDetailsArea";
import Image from "next/image";
import Link from "next/link";
import shape_1 from "@/assets/images/icon/section-title.png";
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-two-image2.png";
import shape_2 from "@/assets/images/shape/about-two-dot.png";
import shape_3 from "@/assets/images/shape/about-circle-helper.png";
import shape_4 from "@/assets/images/shape/about-circle.png";

interface HireDetailsProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  services: string[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

// Benefits Section Component
const BenefitsSection = ({ data }: { data: HireDetailsProps }) => {
  return (
    <section id="success-section" className="about-two-area" style={{ 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)', 
      paddingTop: '50px', 
      paddingBottom: '50px', 
      minHeight: '600px',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="about-two__left-item" style={{ 
              marginLeft: '30px', 
              marginTop: '100px', 
              transform: 'scale(1.2)', 
              transformOrigin: 'center center' 
            }}>
              <div className="dots">
                <Image className="sway_Y__animation" src={shape_2} alt="shape" />
              </div>
              <div className="shape-halper">
                <Image className="sway__animation" src={shape_3} alt="shape" />
              </div>
              <div className="image big-image">
                <Image src={about_thumb1} alt="image" />
              </div>
              <div className="image sm-image">
                <Image src={about_thumb2} alt="image" />
              </div>
              <div className="circle-shape">
                <Image className="animation__rotate" src={shape_4} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ 
              marginRight: '0', 
              transform: 'none', 
              paddingLeft: '20px', 
              paddingRight: '10px' 
            }}>
              <div className="section-header mb-30">
                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff', fontSize: '1.2rem' }}>
                  <Image className="me-1" src={shape_1} alt="icon" />
                  WHO WE ARE
                </h5>
                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff', fontSize: '2.5rem', marginBottom: '20px' }}>
                  <span style={{ color: '#0f7a95' }}>Why Choose Our {data.title}?</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '15px' }}>
                  We provide exceptional {data.title.toLowerCase()} services with a team of experienced professionals who are passionate about delivering high-quality solutions. Our developers bring years of expertise and stay up-to-date with the latest technologies and best practices.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                {data.benefits && data.benefits.map((benefit: string, index: number) => (
                  <li key={index} style={{ marginBottom: '12px', color: '#ffffff', fontSize: '1rem' }}>
                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>{index + 1}.</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                Ready to hire skilled {data.title.toLowerCase()} for your project? Contact us today to discuss your requirements and get started with our professional development services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = ({ data }: { data: HireDetailsProps }) => {
  return (
    <section className="cta-area pt-96 pb-96" style={{
      background: 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)',
      textAlign: 'center',
      marginBottom: '70px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="cta-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
              paddingTop: '15px'
            }}>
              <h2 style={{
                color: '#ffffff',
                fontSize: '2rem',
                fontWeight: '600',
                marginBottom: '2rem',
                lineHeight: '1.3'
              }}>
                {data.ctaTitle || `Ready to hire skilled ${data.title.toLowerCase()}?`}
              </h2>
              <p style={{
                color: '#ffffff',
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: '0.9',
                lineHeight: '1.6'
              }}>
                {data.ctaDescription || `Get in touch with us today to discuss your project requirements and find the perfect ${data.title.toLowerCase()} for your team.`}
              </p>
              <Link href={data.ctaButtonLink || "/contact"} className="btn btn-primary" style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
                border: 'none',
                color: '#0f7a95',
                padding: '15px 40px',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '30px',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #0f7a95 0%, #0d6b7f 50%, #0a5a6a 100%)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)';
                e.currentTarget.style.color = '#0f7a95';
              }}>
                {data.ctaButtonText || "Get Started Now"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HireDetails = ({ 
  title, 
  subtitle, 
  description, 
  benefits, 
  services,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink
}: HireDetailsProps) => {
  const hireData = {
    title,
    subtitle,
    description,
    benefits,
    services,
    ctaTitle,
    ctaDescription,
    ctaButtonText,
    ctaButtonLink,
    showBlog: true,
    showTechnologyPartners: true,
    showAgileApproach: true,
    showAbout: true,
    showServicesGrid: true
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title={title} title={title} />
        <ServiceDetailsArea 
          data={hireData} 
          BenefitsSection={<BenefitsSection data={hireData} />} 
          CTASection={<CTASection data={hireData} />}
        />
      </main>
      <FooterOne />
    </>
  );
};

export default HireDetails;
