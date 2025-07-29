"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"

import shape_1 from "@/assets/images/shape/brand-three-line1.png"
import shape_2 from "@/assets/images/shape/brand-three-shape1.png"
import shape_3 from "@/assets/images/shape/brand-three-line2.png"
import shape_4 from "@/assets/images/shape/brand-three-shape2.png"
import brand_1 from "@/assets/images/brand/brand-image1.png"
import brand_2 from "@/assets/images/brand/brand-image2.png"
import brand_3 from "@/assets/images/brand/brand-image3.png"
import brand_4 from "@/assets/images/brand/brand-image4.png"
import brand_5 from "@/assets/images/brand/brand-image5.png"

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
      <div className="brand-three-area bg-image pt-100 pb-100" style={{ backgroundImage: `url(/assets/images/bg/case-three-bg.jpg)` }}>
         <div className="brand-three__line1">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="brand-three__shape1">
            <Image src={shape_2} alt="shape" />
         </div>
         <div className="brand-three__line2">
            <Image src={shape_3} alt="shape" />
         </div>
         <div className="brand-three__shape2">
            <Image src={shape_4} alt="shape" />
         </div>
         <div className="container">
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
   )
}

export default Brand
