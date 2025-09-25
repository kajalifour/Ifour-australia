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
        <section className="pt-120 pb-120 nf-section">
           <div className="container">
             <div className="row justify-content-center">
               <div className="col-lg-8 text-center">
                 <div className="section-header mb-20">
                  <h2 className="wow fadeInUp nf-title" data-wow-delay="200ms" data-wow-duration="1500ms">
                     404
                   </h2>
                  <p className="wow fadeInUp mt-3 nf-subtitle" data-wow-delay="400ms" data-wow-duration="1500ms">
                     Oops! Page not found.
                   </p>
                 </div>
                 
                 <div className="error-content wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                   <div className="nf-card">
                     <div className="nf-icon-wrap">
                       <i className="fa-solid fa-exclamation-triangle nf-icon"></i>
                     </div>
                     
                     <p className="mb-4 nf-text">
                       The page you&apos;re looking for doesn&apos;t exist or has been moved.
                     </p>
                     
                    <div className="nf-actions">
                      <Link href="/" className="btn btn-primary nf-btn-primary">
                         <i className="fa-solid fa-home me-2"></i>
                         Back to Home
                       </Link>
                      <Link href="/contact" className="btn btn-primary nf-btn-primary" aria-label="Contact iFour Technolabs support">
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
