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
import shape_1 from "@/assets/images/shape/brand-shape.png"
import shape_2 from "@/assets/images/icon/section-title.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, brand_9, brand_10];

const setting = {
   slidesPerView: 5,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
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
      <div className="brand-area">
         <div className="container">
            <div className="brand__wrp">
               <div className="brand__shape">
                  <Image src={shape_1} alt="" />
               </div>
               <div className="section-header mb-60">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_2} alt="icon" />
                     OUR CLIENTS
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">Clients We've Served Thus Far</h2>
               </div>
               <Swiper {...setting} modules={[Autoplay]} className="swiper brand__slider">
                  {brand_data.map((brand, i) => (
                     <SwiperSlide key={i} className="swiper-slide">
                        <div className="brand__image image">
                           <Image src={brand} alt="image" />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </div>
   )
}

export default Brand
