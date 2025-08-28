"use client";

import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import Image from "next/image";
import shape from "@/assets/images/icon/section-title.png";
import NewsletterSection from "@/components/common/NewsletterSection";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const ThankYouPage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <section className="banner__inner-page bg-image pt-180 pb-180 bg-image"
        style={{ backgroundImage: `url(/assets/images/banner/banner-inner-page.jpg)` }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
                             <div className="section-header mb-20">
                 <h2 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ fontSize: '3.5rem', fontWeight: 700 }}>
                   Thank You!
                 </h2>
                 <p className="wow fadeInUp mt-3 text-white" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                   Your message has been sent successfully.
                 </p>
               </div>
              
              <div className="thank-you-content wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '40px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  marginBottom: '40px'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: '#0f7a95',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 8px 25px rgba(15, 122, 149, 0.3)'
                  }}>
                    <i className="fa-solid fa-check" style={{ fontSize: '32px', color: '#fff' }}></i>
                  </div>
                  
                                     <p className="text-white mb-4" style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.6 }}>
                     We'll get back to you within 24 hours.
                   </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    flexWrap: 'wrap'
                  }}>
                    <Link href="/" className="btn btn-primary" style={{
                      backgroundColor: '#ffffff',
                      color: '#0f7a95',
                      padding: '15px 35px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      border: '2px solid #ffffff'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0f7a95';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#0f7a95';
                    }}>
                      <i className="fa-solid fa-home me-2"></i>
                      Back to Home
                    </Link>
                    
                    <Link href="/contact" className="btn btn-outline-light" style={{
                      backgroundColor: 'transparent',
                      color: '#ffffff',
                      padding: '15px 35px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      border: '2px solid #ffffff'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#0f7a95';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#ffffff';
                    }}>
                      <i className="fa-solid fa-envelope me-2"></i>
                      Send Another Message
                    </Link>
                  </div>
                                 </div>
              </div>
            </div>
                     </div>
         </div>
       </section>
       
               <NewsletterSection />
        </main>
        <FooterOne />
      </>
  );
};

export default ThankYouPage;
