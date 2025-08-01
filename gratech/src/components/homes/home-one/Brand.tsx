"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"
import { useEffect, useRef } from 'react';

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
   speed: 2000,
   pagination: false,
   navigation: false,
   allowTouchMove: false,
   observer: false,
   observeParents: false,
   loopAdditionalSlides: 5,
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
   const swiperRef = useRef<any>(null);

   useEffect(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
         const swiper = swiperRef.current.swiper;
         swiper.autoplay.start();
         
         // Ensure autoplay never stops, especially during loop transitions
         const interval = setInterval(() => {
            if (swiper && !swiper.autoplay.running) {
               swiper.autoplay.start();
            }
         }, 500);
         
         // Force autoplay to continue even during transitions
         swiper.on('slideChange', () => {
            if (!swiper.autoplay.running) {
               swiper.autoplay.start();
            }
         });
         
         return () => {
            clearInterval(interval);
            if (swiper) {
               swiper.off('slideChange');
            }
         };
      }
   }, []);

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
               background: '#ffffff',
               borderRadius: '0px',
               boxShadow: 'none',
               padding: '68px 80px',
               position: 'relative',
               zIndex: 1,
               border: 'none',
               overflow: 'hidden',
               transform: 'scale(1.02)'
            }}>
               
               <div className="section-header mb-60 text-center">
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
                     fontSize: '33px',
                     fontWeight: '800',
                     lineHeight: '1.1',
                     marginBottom: '0',
                     textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                     letterSpacing: '2px',
                     textTransform: 'uppercase'
                  }}>
                     <span style={{ color: '#0f7a95' }}>Clients</span> <span style={{ color: '#000000' }}>We've Served Thus Far</span>
                  </h2>
               </div>
               
               <Swiper 
                  ref={swiperRef}
                  {...setting} 
                  modules={[Autoplay]} 
                  className="swiper brand__slider" 
                  style={{
                     width: '100%',
                     height: 'auto',
                     overflow: 'visible'
                  }}
               >
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
                              backgroundColor: 'transparent',
                              borderRadius: '0px',
                              border: 'none',
                              transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                              backdropFilter: 'none',
                              height: '102px',
                              width: '100%',
                              position: 'relative',
                              overflow: 'hidden',
                              boxShadow: 'none'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.05)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                           }}>
                           
                           <Image 
                              src={brand} 
                              alt="client logo" 
                              style={{
                                 maxWidth: '100%',
                                 maxHeight: '54px',
                                 objectFit: 'contain',
                                 transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                 filter: 'brightness(1) contrast(1)',
                                 transform: 'scale(1)',
                                 border: 'none',
                                 outline: 'none'
                              }}
                              onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'scale(1.1)';
                              }}
                              onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'scale(1)';
                              }}
                           />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
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
            
            .brand__item {
               border: none !important;
               outline: none !important;
            }
            
            .brand__item img {
               border: none !important;
               outline: none !important;
            }
            
            .swiper-slide {
               border: none !important;
               outline: none !important;
            }
            
            .swiper-wrapper {
               transition-timing-function: linear !important;
            }
            
            .swiper-slide {
               transition-timing-function: linear !important;
            }
         `}</style>
      </section>
   )
}

export default Brand
