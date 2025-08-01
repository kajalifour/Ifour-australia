"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"

import brand_1 from "@/assets/images/brand/brand-image6.webp"
import brand_2 from "@/assets/images/brand/brand-image7.webp"
import brand_3 from "@/assets/images/brand/brand-image8.webp"
import brand_4 from "@/assets/images/brand/brand-image-9.webp"
import brand_5 from "@/assets/images/brand/brand-image-10.webp"
import brand_6 from "@/assets/images/brand/brand-image11.webp"
import brand_7 from "@/assets/images/brand/brand-image12.webp"
import brand_8 from "@/assets/images/brand/brand-image13.webp"
import brand_9 from "@/assets/images/brand/brand-image14.webp"
import brand_10 from "@/assets/images/brand/brand-image-15.webp"
import shape_2 from "@/assets/images/icon/section-title.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, brand_9, brand_10];

const setting = {
   slidesPerView: 5,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 0,
      disableOnInteraction: false,
   },
   speed: 5000,
   pagination: false,
   navigation: false,
   breakpoints: {
      1200: {
         slidesPerView: 5,
      },
      992: {
         slidesPerView: 4,
      },
      575: {
         slidesPerView: 3,
      },
      320: {
         slidesPerView: 2,
      },
   },
};

const Brand = () => {
   return (
      <section className="brand-area" style={{
         marginTop: '0px',
         marginBottom: '0px',
         position: 'relative',
         zIndex: 2,
         paddingTop: '60px',
         paddingBottom: '60px'
      }}>
         <div className="container" style={{
            width: '80%',
            maxWidth: '80%',
            margin: '0 auto'
         }}>
            <div className="brand__wrp" style={{
               background: 'linear-gradient(135deg, #0f7a95 0%, #0a5a6f 50%, #083d4f 100%)',
               borderRadius: '0px',
               boxShadow: '0 30px 80px rgba(15, 122, 149, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
               padding: '68px 80px',
               position: 'relative',
               zIndex: 1,
               border: '2px solid rgba(255, 255, 255, 0.15)',
               overflow: 'hidden',
               transform: 'scale(1.02)'
            }}>
               {/* Animated background elements */}
               <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                  animation: 'float 8s ease-in-out infinite',
                  pointerEvents: 'none'
               }}></div>
               
               <div className="section-header mb-60 text-center">
                  <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
                     fontSize: '33px',
                     fontWeight: '800',
                     lineHeight: '1.1',
                     marginBottom: '0',
                     textShadow: '0 6px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                     letterSpacing: '2px',
                     textTransform: 'uppercase'
                  }}>
                     <span style={{ color: '#ffffff' }}>Clients</span> <span style={{ color: '#000000' }}>We've Served Thus Far</span>
                  </h2>
               </div>
               
               <Swiper {...setting} modules={[Autoplay]} className="swiper brand__slider" style={{
                  width: '100%',
                  height: 'auto',
                  overflow: 'visible'
               }}>
                  {brand_data.map((brand, i) => (
                     <SwiperSlide key={i} className="swiper-slide" style={{
                        width: 'auto',
                        height: 'auto'
                     }}>
                        <div className="brand__item wow bounceInUp" 
                           data-wow-delay={`${i * 100}ms`} 
                           data-wow-duration="1000ms"
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '24px 20px',
                              backgroundColor: 'rgba(255, 255, 255, 0.15)',
                              borderRadius: '0px',
                              border: '2px solid rgba(255, 255, 255, 0.25)',
                              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                              backdropFilter: 'blur(15px)',
                              height: '102px',
                              width: '100%',
                              position: 'relative',
                              overflow: 'hidden',
                              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                              e.currentTarget.style.transform = 'translateY(-12px) scale(1.08)';
                              e.currentTarget.style.boxShadow = '0 20px 50px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                              e.currentTarget.style.transform = 'translateY(0) scale(1)';
                              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                           }}>
                           
                           {/* Glowing effect */}
                           <div style={{
                              position: 'absolute',
                              top: '0',
                              left: '0',
                              right: '0',
                              bottom: '0',
                              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)',
                              transform: 'translateX(-100%)',
                              transition: 'transform 0.8s ease',
                              pointerEvents: 'none'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateX(100%)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateX(-100%)';
                           }}></div>
                           
                           <Image 
                              src={brand} 
                              alt="client logo" 
                              style={{
                                 maxWidth: '100%',
                                 maxHeight: '54px',
                                 objectFit: 'contain',
                                 transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                 filter: 'brightness(1.2) contrast(1.2)',
                                 transform: 'scale(1)'
                              }}
                              onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'scale(1.15)';
                                 e.currentTarget.style.filter = 'brightness(1.4) contrast(1.3)';
                              }}
                              onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'scale(1)';
                                 e.currentTarget.style.filter = 'brightness(1.2) contrast(1.2)';
                              }}
                           />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               
               {/* Decorative elements */}
               <div style={{
                  position: 'absolute',
                  top: '30px',
                  right: '30px',
                  width: '80px',
                  height: '80px',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%',
                  animation: 'rotate 12s linear infinite'
               }}></div>
               
               <div style={{
                  position: 'absolute',
                  bottom: '30px',
                  left: '30px',
                  width: '60px',
                  height: '60px',
                  border: '3px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '50%',
                  animation: 'rotate 10s linear infinite reverse'
               }}></div>
               
               {/* Additional decorative elements */}
               <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '20px',
                  width: '40px',
                  height: '40px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  animation: 'rotate 15s linear infinite'
               }}></div>
               
               <div style={{
                  position: 'absolute',
                  top: '20%',
                  right: '20px',
                  width: '30px',
                  height: '30px',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  animation: 'rotate 8s linear infinite reverse'
               }}></div>
            </div>
         </div>
         
         <style jsx>{`
            @keyframes float {
               0%, 100% { transform: translateY(0px) rotate(0deg); }
               50% { transform: translateY(-30px) rotate(180deg); }
            }
            @keyframes rotate {
               from { transform: rotate(0deg); }
               to { transform: rotate(360deg); }
            }
            
            .swiper {
               width: 100%;
               height: auto;
               overflow: visible;
            }
            
            .swiper-slide {
               width: auto;
               height: auto;
               display: flex;
               align-items: center;
               justify-content: center;
            }
            
            .brand__slider {
               width: 100%;
               height: auto;
               overflow: visible;
            }
         `}</style>
      </section>
   )
}

export default Brand
