"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/service-bg-shape.png"
import shape_2 from "@/assets/images/icon/section-title.png"
import shape_3 from "@/assets/images/shape/service-item-shape.png"

const setting = {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".service__dot",
      clickable: true,
   },
   navigation: {
      nextEl: ".service__arry-next",
      prevEl: ".service__arry-prev",
   },
   breakpoints: {
      1200: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 2,
      },
      575: {
         slidesPerView: 1,
      },
   },
};

const Service = () => {
   return (
      <section id="service-section" className="service-area pt-120 pb-120">
         <div className="service__shape wow slideInRight">
            <Image className="sway_Y__animation" src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_2} alt="icon" />
                     What We OFFER
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">Excellent IT
                     Services</h2>
               </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper service__slider">
               {service_data.filter((items) => items.page === "home_1").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="service__item">
                        <div className="service-shape">
                           <Image src={shape_3} alt="shape" />
                        </div>
                        <div className="service__icon">
                           <Image src={item.icon} alt="icon" />
                        </div>
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p>{item.desc}</p>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="service__navigation wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
               <button className="arry-prev service__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
               <div className="service__dot"></div>
               <button className="arry-next service__arry-next active"><i className="fa-light fa-chevron-right"></i></button>
            </div>
         </div>
      </section>
   )
}

export default Service
