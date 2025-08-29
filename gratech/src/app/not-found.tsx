"use client";

import Link from "next/link";
import NewsletterSection from "@/components/common/NewsletterSection";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const NotFoundPage = () => {
  return (
    <>
      <HeaderOne />
             <main>
         <section className="pt-120 pb-120" style={{ backgroundColor: '#f8f9fa' }}>
           <div className="container">
             <div className="row justify-content-center">
               <div className="col-lg-8 text-center">
                 <div className="section-header mb-20">
                   <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ fontSize: '3.5rem', fontWeight: 700, color: '#0f7a95' }}>
                     404
                   </h2>
                   <p className="wow fadeInUp mt-3" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ fontSize: '1.2rem', color: '#666' }}>
                     Oops! Page not found.
                   </p>
                 </div>
                 
                 <div className="error-content wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                   <div style={{
                     background: '#ffffff',
                     borderRadius: '20px',
                     padding: '40px',
                     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                     marginBottom: '40px'
                   }}>
                     <div style={{
                       width: '80px',
                       height: '80px',
                       background: '#ff6b6b',
                       borderRadius: '50%',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       margin: '0 auto 20px',
                       boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
                     }}>
                       <i className="fa-solid fa-exclamation-triangle" style={{ fontSize: '32px', color: '#fff' }}></i>
                     </div>
                     
                     <p className="mb-4" style={{ fontSize: '1.1rem', color: '#666', lineHeight: 1.6 }}>
                       The page you&apos;re looking for doesn&apos;t exist or has been moved.
                     </p>
                     
                     <div style={{
                       display: 'flex',
                       justifyContent: 'center',
                       gap: '20px',
                       flexWrap: 'wrap'
                     }}>
                       <Link href="/" className="btn btn-primary" style={{
                         backgroundColor: '#0f7a95',
                         color: '#ffffff',
                         padding: '15px 35px',
                         borderRadius: '8px',
                         textDecoration: 'none',
                         display: 'inline-block',
                         fontWeight: '600',
                         transition: 'all 0.3s ease',
                         border: '2px solid #0f7a95'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.backgroundColor = '#ffffff';
                         e.currentTarget.style.color = '#0f7a95';
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.backgroundColor = '#0f7a95';
                         e.currentTarget.style.color = '#ffffff';
                       }}>
                         <i className="fa-solid fa-home me-2"></i>
                         Back to Home
                       </Link>
                       
                       <Link href="/contact" className="btn btn-outline-primary" style={{
                         backgroundColor: 'transparent',
                         color: '#0f7a95',
                         padding: '15px 35px',
                         borderRadius: '8px',
                         textDecoration: 'none',
                         display: 'inline-block',
                         fontWeight: '600',
                         transition: 'all 0.3s ease',
                         border: '2px solid #0f7a95'
                       }}
                       onMouseEnter={(e) => {
                         e.currentTarget.style.backgroundColor = '#0f7a95';
                         e.currentTarget.style.color = '#ffffff';
                       }}
                       onMouseLeave={(e) => {
                         e.currentTarget.style.backgroundColor = 'transparent';
                         e.currentTarget.style.color = '#0f7a95';
                       }}>
                         <i className="fa-solid fa-envelope me-2"></i>
                         Contact Us
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

export default NotFoundPage;
