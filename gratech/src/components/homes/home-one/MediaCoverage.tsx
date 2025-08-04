"use client"
import Image from "next/image"
import shape_2 from "@/assets/images/icon/section-title.png"

const media_1 = "/assets/images/logo/mediacoverage-1.webp"
const media_2 = "/assets/images/logo/mediacoverage-2.webp"
const media_3 = "/assets/images/logo/mediacoverage-3.webp"
const media_4 = "/assets/images/logo/mediacoverage-4.webp"
const media_5 = "/assets/images/logo/mediacoverage-5.webp"
const media_6 = "/assets/images/logo/mediacoverage-6.webp"
const media_7 = "/assets/images/logo/mediacoverage-7.webp"
const media_8 = "/assets/images/logo/mediacoverage-8.webp"
const media_9 = "/assets/images/logo/mediacoverage-9.webp"
const media_10 = "/assets/images/logo/mediacoverage-10.webp"
const media_11 = "/assets/images/logo/mediacoverage-11.webp"
const media_12 = "/assets/images/logo/mediacoverage-12.webp"
const media_13 = "/assets/images/logo/mediacoverage-13.webp"
const media_14 = "/assets/images/logo/mediacoverage-14.webp"
const media_15 = "/assets/images/logo/mediacoverage-15.webp"

const media_data = [
  { id: 1, icon: media_1 },
  { id: 2, icon: media_2 },
  { id: 3, icon: media_3 },
  { id: 4, icon: media_4 },
  { id: 5, icon: media_5 },
  { id: 6, icon: media_6 },
  { id: 7, icon: media_7 },
  { id: 8, icon: media_8 },
  { id: 9, icon: media_9 },
  { id: 10, icon: media_10 },
  { id: 11, icon: media_11 },
  { id: 12, icon: media_12 },
  { id: 13, icon: media_13 },
  { id: 14, icon: media_14 },
  { id: 15, icon: media_15 }
];

const MediaCoverage = () => {
   return (
      <section className="media-coverage-area pt-120 pb-80" style={{ backgroundColor: '#ffffff' }}>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_2} alt="icon" />
                     Press & Media
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Media</span> Coverage
                  </h2>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {media_data.map((media, index) => (
                  <div key={media.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" style={{ maxWidth: '20%' }}>
                     <div className="media__item text-center wow fadeInUp" 
                        data-wow-delay={`${index * 100}ms`} 
                        data-wow-duration="1500ms"
                        style={{
                           backgroundColor: 'rgba(0, 0, 0, 0.05)',
                           borderRadius: '12px',
                           padding: '22px 14px', // Increased padding by 20%
                           border: '1px solid rgba(0, 0, 0, 0.1)',
                           transition: 'all 0.3s ease',
                           height: '120px', // Fixed height for better consistency
                           backdropFilter: 'blur(10px)',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-5px)';
                           e.currentTarget.style.borderColor = '#0f7a95';
                           e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 122, 149, 0.2)';
                           e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                           e.currentTarget.style.boxShadow = 'none';
                           e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                        }}>
                        <img 
                           src={media.icon} 
                           alt="media coverage" 
                           style={{ 
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain', // Changed to contain for better image display
                              borderRadius: '8px',
                              transition: 'filter 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.filter = 'none';
                           }}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default MediaCoverage 