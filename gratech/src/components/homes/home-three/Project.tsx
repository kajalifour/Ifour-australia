"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import Case_data from '@/data/CaseData';

import shape_1 from "@/assets/images/shape/service-two-shape-left.png"
import shape_2 from "@/assets/images/shape/service-two-shape-right.png"
import shape_3 from "@/assets/images/icon/section-title.png"

const setting = {
   slidesPerView: 4,
   spaceBetween: 24,
   loop: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".case__dot",
      clickable: true,
   },
   navigation: false,
   breakpoints: {
      '1440': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '575': {
         slidesPerView: 2,
      },
      '320': {
         slidesPerView: 1,
      },
   },
};

const Project = () => {
   return (
      <section id="case-section" className="project-three-area secondary-bg">
         <div className="service-two__shape-left sway_Y__animationY">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="service-two__shape-right sway_Y__animation">
            <Image src={shape_2} alt="shape" />
         </div>
         <div className="case-two__container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape_3} alt="icon" />
                  Smart, Scalable Tech
               </h5>
               <h2 className="text-white wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  Latest Project Are Here</h2>
            </div>
            <Swiper {...setting} modules={[Autoplay, Pagination]} className="swiper case__slider ms-0">
               {Case_data.filter((items) => items.page === "home_1").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="project-three__item">
                        <div className="image case__image">
                           <Image src={item.thumb} alt="image" />
                        </div>
                        <div className="case__content">
                           <span className="primary-color sm-font">{item.sub_title}</span>
                           <h3><Link href="/case-details" className="text-white primary-hover">{item.title}</Link>
                           </h3>
                        </div>
                        <Link href="/case-details" className="case__btn">
                           <i className="fa-regular fa-arrow-right"></i>
                        </Link>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="mt-60 text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
               <div className="dot case__dot"></div>
            </div>
         </div>
      </section>
   )
}

export default Project
