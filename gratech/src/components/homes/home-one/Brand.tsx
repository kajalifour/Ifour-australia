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
      delay: 1000,
      disableOnInteraction: false,
   },
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
         marginTop: '-85px',
         marginBottom: '-45px',
         position: 'relative',
         zIndex: 2
      }}>
         <div className="container">
            <div className="brand__wrp gradient-bg" style={{
               borderRadius: '20px',
               boxShadow: '0 15px 50px rgba(0,0,0,0.15)',
               padding: '65px',
               position: 'relative',
               zIndex: 1
            }}>
               <div className="section-header mb-60 text-center">
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
                     fontSize: '36px',
                     fontWeight: '700',
                     lineHeight: '1.2',
                     marginBottom: '0',
                     color: '#000000'
                  }}>
                     <span style={{ color: '#ffffff' }}>Clients</span> We've Served Thus Far
                  </h2>
               </div>
               <Swiper {...setting} modules={[Autoplay]} className="swiper brand__slider">
                  {brand_data.map((brand, i) => (
                     <SwiperSlide key={i} className="swiper-slide">
                        <div className="brand__item wow bounceInUp" 
                           data-wow-delay={`${i * 100}ms`} 
                           data-wow-duration="1000ms"
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '17px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '12px',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'all 0.3s ease',
                              backdropFilter: 'blur(10px)',
                              height: '102px',
                              width: '115%',
                              marginLeft: '-7.5%'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                              e.currentTarget.style.transform = 'translateY(-5px)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                              e.currentTarget.style.transform = 'translateY(0)';
                           }}>
                           <Image 
                              src={brand} 
                              alt="client logo" 
                              style={{
                                 maxWidth: '100%',
                                 maxHeight: '51px',
                                 objectFit: 'contain',
                                 filter: 'brightness(0) invert(1)',
                                 transition: 'all 0.3s ease',
                                 marginBottom: '8px'
                              }}
                              onMouseEnter={(e) => {
                                 e.currentTarget.style.filter = 'brightness(1) invert(0)';
                                 e.currentTarget.style.transform = 'scale(1.05)';
                              }}
                              onMouseLeave={(e) => {
                                 e.currentTarget.style.filter = 'brightness(0) invert(1)';
                                 e.currentTarget.style.transform = 'scale(1)';
                              }}
                           />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </section>
   )
}

export default Brand
