"use client"
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from "swiper";

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

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, brand_9, brand_10];

const setting = {
   slidesPerView: 5,
   spaceBetween: 30,
   loop: true,
   speed: 2000, // Consistent speed for smooth movement
   autoplay: {
      delay: 0, // NO delay between slides
      disableOnInteraction: false,
   },
   allowTouchMove: false,
   grabCursor: false,
   modules: [Autoplay],
   loopAdditionalSlides: 5,
   breakpoints: {
      1200: { slidesPerView: 5 },
      992: { slidesPerView: 4 },
      575: { slidesPerView: 3 },
      320: { slidesPerView: 2 },
   },
};

const Brand = () => {
   const swiperRef = useRef<SwiperType | null>(null);

   useEffect(() => {
      const swiper = swiperRef.current;
      if (swiper) {
         swiper.autoplay?.start();
         
         // Monitor autoplay status
         const interval = setInterval(() => {
            if (!swiper.autoplay?.running && swiper.activeIndex < swiper.slides.length - 1) {
               swiper.autoplay?.start();
            }
         }, 1000);
         
         // Handle slide changes
         swiper.on('slideChange', () => {
            // Only restart if not at the last slide
            if (swiper.activeIndex < swiper.slides.length - 1 && !swiper.autoplay?.running) {
               swiper.autoplay?.start();
            }
         });
         
         return () => {
            clearInterval(interval);
            swiper.off('slideChange');
         };
      }
   }, []);

   return (
      <section className="brand-area">
         <div className="brand-container">
            <div className="brand__wrp">
               
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
                     <span style={{ color: '#0f7a95' }}>Clients</span> <span style={{ color: '#000000' }}>We&apos;ve Served Thus Far</span>
                  </h2>
               </div>
               
               <Swiper 
                  onSwiper={(swiper) => {
                     swiperRef.current = swiper;
                  }}
                  {...setting} 
                  className="swiper brand__slider"
               >
                  {brand_data.map((brand, i) => (
                     <SwiperSlide key={i} className="swiper-slide">
                        <div className="brand__item wow bounceInUp" 
                           data-wow-delay={`${i * 100}ms`} 
                           data-wow-duration="1000ms">
                           
                           <Image 
                              src={brand} 
                              alt="client logo" 
                              width={120}
                              height={60}
                              style={{
                                 objectFit: 'contain',
                                 transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                 filter: 'brightness(1) contrast(1)',
                                 transform: 'scale(1)',
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
            .brand-area {
               margin-top: 0px;
               margin-bottom: 0px;
               position: relative;
               z-index: 2;
               padding-top: 60px;
               padding-bottom: 60px;
            }
            
            .brand-container {
               width: 80%;
               max-width: 80%;
               margin: 0 auto;
            }
            
            .brand__wrp {
               background: #ffffff;
               border-radius: 0px;
               box-shadow: none;
               padding: 68px 80px;
               position: relative;
               z-index: 1;
               border: none;
               overflow: hidden;
               transform: scale(1.02);
            }
            
            .brand__item {
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               padding: 24px 20px;
               background-color: transparent;
               border-radius: 0px;
               border: none;
               transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
               backdrop-filter: none;
               height: 102px;
               width: 100%;
               position: relative;
               overflow: hidden;
               box-shadow: none;
            }
            
            .brand__item:hover {
               transform: scale(1.05);
            }
            
            .brand__slider {
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
            
            .swiper-wrapper {
               transition-timing-function: linear !important;
               transition-duration: 2s !important;
            }
            
            .swiper-slide {
               transition-timing-function: linear !important;
               transition-duration: 2s !important;
            }
            
            .swiper {
               transition-timing-function: linear !important;
            }
            
            @keyframes float {
               0%, 100% { transform: translateY(0px) rotate(0deg); }
               50% { transform: translateY(-30px) rotate(180deg); }
            }
            
            @keyframes rotate {
               from { transform: rotate(0deg); }
               to { transform: rotate(360deg); }
            }
         `}</style>
      </section>
   )
}

export default Brand
