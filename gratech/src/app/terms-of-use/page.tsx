import Wrapper from "@/layouts/Wrapper";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import NewsletterSection from "@/components/common/NewsletterSection";
import BreadCrumb from "@/components/common/BreadCrumb";
import Image from "next/image";

export const metadata = {
  title: "Terms of Use - iFour Technolab",
  description: "Terms and conditions for using iFour Technolab services and website.",
};

const TermsOfUsePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        {/* Breadcrumb Banner */}
        <BreadCrumb sub_title="Legal" title="Terms and Conditions" />

                 {/* Terms Image Section */}
         <section className="terms-image-section pt-80 pb-80" style={{ background: '#ffffff' }}>
           <div className="container">
             <div className="row">
               <div className="col-lg-10 mx-auto">
                                   <div className="terms-image wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <img 
                      src="/assets/images/case/terms-and-conditions-ifour-aus.webp"
                      alt="Terms and Conditions - iFour Australia"
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        maxWidth: '100%',
                        display: 'block'
                      }}
                    />
                  </div>
               </div>
             </div>
           </div>
         </section>

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default TermsOfUsePage;
