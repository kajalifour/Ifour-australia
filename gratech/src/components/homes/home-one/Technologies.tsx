"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image"

const tech_1 = "/assets/images/technologies/tech-image-01.png"
const tech_2 = "/assets/images/technologies/tech-image-02.png"
const tech_3 = "/assets/images/technologies/tech-image-03.png"
const tech_4 = "/assets/images/technologies/tech-image-04.png"
const tech_5 = "/assets/images/technologies/tech-image-05.png"
const tech_6 = "/assets/images/technologies/tech-image-06.webp"
const tech_7 = "/assets/images/technologies/tech-image-07.png"
const tech_8 = "/assets/images/technologies/tech-image-08.png"
const tech_9 = "/assets/images/technologies/tech-image-09.png"
const tech_10 = "/assets/images/technologies/tech-image-10.png"
import shape_2 from "@/assets/images/icon/section-title.png"

const tech_data = [
  { id: 1, icon: tech_1 },
  { id: 2, icon: tech_2 },
  { id: 3, icon: tech_3 },
  { id: 4, icon: tech_4 },
  { id: 5, icon: tech_5 },
  { id: 6, icon: tech_6 },
  { id: 7, icon: tech_7 },
  { id: 8, icon: tech_8 },
  { id: 9, icon: tech_9 },
  { id: 10, icon: tech_10 }
];

const setting = {
   slidesPerView: 4,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".technologies__dot",
      clickable: true,
   },
   navigation: {
      nextEl: ".technologies__arry-next",
      prevEl: ".technologies__arry-prev",
   },
   breakpoints: {
      1200: {
         slidesPerView: 4,
      },
      992: {
         slidesPerView: 3,
      },
      575: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },
};

const Technologies = () => {
   return (
      <section className="technologies-area pt-120 pb-120" style={{ backgroundColor: '#ffffff' }}>
         <div className="container">
            <div className="technologies__wrp">
               <div className="section-header mb-60">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{
                     backgroundColor: 'rgba(0, 0, 0, 0.1)',
                     color: '#000000',
                     padding: '8px 16px',
                     borderRadius: '20px',
                     fontSize: '12px',
                     fontWeight: '600',
                     textTransform: 'uppercase',
                     letterSpacing: '1px',
                     display: 'inline-block',
                     marginBottom: '15px',
                     backdropFilter: 'blur(10px)'
                  }}>
                     <Image className="me-1" src={shape_2} alt="icon" style={{ width: '16px', height: '16px' }} />
                     Tech Talent
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ 
                     color: '#000000', 
                     fontSize: '48px',
                     fontWeight: '700',
                     lineHeight: '1.2',
                     marginBottom: '20px'
                  }}>
                     Technologies We Utilise
                  </h2>
               </div>
               
               <div className="row justify-content-center">
                  {tech_data.map((tech, index) => (
                     <div key={tech.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" style={{ maxWidth: '20%' }}>
                        <div className="technology__item text-center wow fadeInUp" 
                           data-wow-delay={`${index * 100}ms`} 
                           data-wow-duration="1500ms"
                           style={{
                              backgroundColor: 'rgba(0, 0, 0, 0.05)',
                              borderRadius: '12px',
                              padding: '18px 12px',
                              border: '1px solid rgba(0, 0, 0, 0.1)',
                              transition: 'all 0.3s ease',
                              height: '60%',
                              backdropFilter: 'blur(10px)'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-5px)';
                              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.2)';
                              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                              e.currentTarget.style.boxShadow = 'none';
                           }}>
                           <img 
                              src={tech.icon} 
                              alt="technology" 
                              style={{ 
                                 width: '100%',
                                 height: '100%',
                                 objectFit: 'cover',
                                 borderRadius: '8px'
                              }}
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Technologies 