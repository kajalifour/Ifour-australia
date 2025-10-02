"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/service-two-shape-left.png"
import shape_2 from "@/assets/images/shape/service-two-shape-right.png"
import shape_3 from "@/assets/images/shape/service-two-item-shape.png"

const setting = {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      nextEl: ".service__arry-next",
      prevEl: ".service__arry-prev",
   },
   breakpoints: {
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
const Service = () => {
   return (
      <section id="service-section" className="service-two-area sub-bg pt-120 pb-100">
         <div className="service-two__shape-left sway_Y__animationY">
            <Image className="filter-brightness" src={shape_1} alt="shape" />
         </div>
         <div className="service-two__shape-right sway_Y__animation">
            <Image className="filter-brightness" src={shape_2} alt="shape" />
         </div>
         <div className="container">
            <div className="d-flex gap-4 flex-wrap align-items-center justify-content-end mb-60">
               <div className="section-header">
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span className="primary-color">Our Range of Software Development Services</span> to Achieve Your Goals</h2>
                  <p className="wow fadeInLeft mt-20" data-wow-delay="400ms" data-wow-duration="1500ms">
                     iFour Technolab has been helping businesses embrace innovation and the full potential of technology since its inception. No matter the requirements, whether it&#39;s developing custom software from scratch, reengineering an existing legacy system, or integrating new technologies into routine workflows, trust iFour Technolab to deliver. Our services include the following:
                  </p>
               </div>
               <div className="arry-btn  d-flex gap-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <button className="arry-prev service__arry-prev" aria-label="Previous Slide"><i className="fa-light fa-chevron-left"></i></button>
                  <button className="arry-next service__arry-next active" aria-label="Next Slide"><i
                     className="fa-light fa-chevron-right"></i></button>
               </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper service-two__slider">
               {service_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="service-two__item">
                        <div className="image">
                           <Image src={item.thumb ? item.thumb : ""} alt="image" />
                        </div>
                        <div className="service-two__content">
                           <div className="icon">
                              <Image src={item.icon} alt="icon" />
                           </div>
                           <div className="shape"><Image src={shape_3}
                              alt="shape" /></div>
                           <h4><Link href="/service-details" className="primary-hover">{item.title}</Link></h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   )
}

export default Service