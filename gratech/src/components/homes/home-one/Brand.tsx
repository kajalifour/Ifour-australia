"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"

import brand_1 from "@/assets/images/brand/brand-image1.png"
import brand_2 from "@/assets/images/brand/brand-image2.png"
import brand_3 from "@/assets/images/brand/brand-image3.png"
import brand_4 from "@/assets/images/brand/brand-image4.png"
import brand_5 from "@/assets/images/brand/brand-image5.png"
import shape_1 from "@/assets/images/shape/brand-shape.png"

const brand_data: StaticImageData[] = [brand_1, brand_2, brand_3, brand_4, brand_5, brand_3];

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
