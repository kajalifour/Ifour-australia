"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from "next/image"

import tech_1 from "@/assets/images/icon/service-icon1.png"
import tech_2 from "@/assets/images/icon/service-icon2.png"
import tech_3 from "@/assets/images/icon/service-icon3.png"
import tech_4 from "@/assets/images/icon/counter-icon1.png"
import tech_5 from "@/assets/images/icon/counter-icon2.png"
import tech_6 from "@/assets/images/icon/counter-icon3.png"
import tech_7 from "@/assets/images/icon/counter-icon4.png"
import shape_2 from "@/assets/images/icon/section-title.png"

const tech_data = [
  {
    id: 1,
    icon: tech_1,
    title: "Hire .Net Developer"
  },
  {
    id: 2,
    icon: tech_2,
    title: "Hire Angular Developer"
  },
  {
    id: 3,
    icon: tech_3,
    title: "Hire Node.js Developer"
  },
  {
    id: 4,
    icon: tech_4,
    title: "Hire Vue.js Developer"
  },
  {
    id: 5,
    icon: tech_5,
    title: "Hire C# Developer"
  },
  {
    id: 6,
    icon: tech_6,
    title: "Hire WPF Developer"
  },
  {
    id: 7,
    icon: tech_7,
    title: "Hire Java Developer"
  }
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
      <section className="technologies-area pt-120 pb-120" style={{ 
         backgroundColor: '#000000',
         background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, rgba(0, 0, 0, 1) 70%)',
         position: 'relative'
      }}>
         <div className="container">
            <div className="technologies__wrp">
               <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                  <div className="section-header">
                     <div className="mb-3">
                        <span style={{
                           backgroundColor: '#3B82F6',
                           color: '#ffffff',
                           padding: '8px 16px',
                           borderRadius: '20px',
                           fontSize: '12px',
                           fontWeight: '600',
                           textTransform: 'uppercase',
                           letterSpacing: '1px'
                        }}>
                           TECH TALENT
                        </span>
                     </div>
                     <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ 
                        color: '#ffffff', 
                        fontSize: '48px',
                        fontWeight: '700',
                        lineHeight: '1.2',
                        marginBottom: '20px'
                     }}>
                        Build The Future With Our Developers & Latest Tech
                     </h2>
                  </div>
                  <div className="wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                     <button style={{
                        backgroundColor: '#0F7A95',
                        color: '#ffffff',
                        border: 'none',
                        padding: '15px 30px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                     }}>
                        Explore More →
                     </button>
                  </div>
               </div>
               
               <div className="row">
                  {tech_data.map((tech, index) => (
                     <div key={tech.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                        <div className="technology__item text-center wow fadeInUp" 
                             data-wow-delay={`${index * 100}ms`} 
                             data-wow-duration="1500ms"
                             style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '12px',
                                padding: '30px 20px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.3s ease',
                                height: '100%',
                                backdropFilter: 'blur(10px)'
                             }}
                             onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.2)';
                             }}
                             onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                             }}>
                           <div className="technology__icon mb-4" style={{ margin: '0 auto', width: '60px', height: '60px' }}>
                              <div style={{
                                 width: '60px',
                                 height: '60px',
                                 borderRadius: '50%',
                                 backgroundColor: '#3B82F6',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 margin: '0 auto'
                              }}>
                                 <Image 
                                    src={tech.icon} 
                                    alt="icon" 
                                    width={30} 
                                    height={30}
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                 />
                              </div>
                           </div>
                           <h4 style={{ 
                              color: '#ffffff', 
                              fontSize: '16px', 
                              fontWeight: '600', 
                              margin: '0',
                              textAlign: 'center'
                           }}>
                              {tech.title}
                           </h4>
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