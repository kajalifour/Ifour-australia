"use client"
import Image from "next/image"
import shape_2 from "@/assets/images/icon/section-title.png"

const partner_image = "/assets/images/logo/technology partner.webp"

const TechnologyPartners = () => {
   return (
      <section className="technology-partners-area pt-120 pb-120" style={{ backgroundColor: '#f8f9fa' }}>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_2} alt="icon" />
                     Partnerships
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Our</span> Technology Partners
                  </h2>
               </div>
            </div>
            
            <div className="technology-partners__container wow fadeInUp" 
               data-wow-delay="300ms" 
               data-wow-duration="1500ms"
               style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '48px 32px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  width: '80%',
                  margin: '0 auto',
                  cursor: 'pointer'
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.15)';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
               }}>
               
               <Image 
                  src={partner_image} 
                  alt="Our Technology Partners" 
                  width={800}
                  height={400}
                  style={{ 
                     maxWidth: '100%',
                     height: 'auto',
                     objectFit: 'contain',
                     borderRadius: '10px',
                     filter: 'grayscale(100%)',
                     transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.filter = 'grayscale(100%)';
                  }}
               />
            </div>
         </div>
      </section>
   )
}

export default TechnologyPartners 