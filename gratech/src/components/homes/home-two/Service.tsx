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
      delay: 4000,
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
      <section id="service-section" className="service-two-area secondary-bg pt-120 pb-120">
         <div className="service-two__shape-left sway_Y__animationY">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="service-two__shape-right sway_Y__animation">
            <Image src={shape_2} alt="shape" />
         </div>
         <div className="container">
            <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.75" y="0.750061" width="18.5" height="10.5" rx="5.25" stroke="#3C72FC"
                           strokeWidth="1.5" />
                        <mask id="path-2-inside-1_670_477" fill="white">
                           <path
                              d="M3 6.00006C3 3.79092 4.79086 2.00006 7 2.00006H13C15.2091 2.00006 17 3.79092 17 6.00006C17 8.2092 15.2091 10.0001 13 10.0001H7C4.79086 10.0001 3 8.2092 3 6.00006Z" />
                        </mask>
                        <path
                           d="M3 6.00006C3 2.96249 5.46243 0.500061 8.5 0.500061H11.5C14.5376 0.500061 17 2.96249 17 6.00006C17 4.61935 15.2091 3.50006 13 3.50006H7C4.79086 3.50006 3 4.61935 3 6.00006ZM17 6.00006C17 9.03763 14.5376 11.5001 11.5 11.5001H8.5C5.46243 11.5001 3 9.03763 3 6.00006C3 7.38077 4.79086 8.50006 7 8.50006H13C15.2091 8.50006 17 7.38077 17 6.00006ZM3 10.0001V2.00006V10.0001ZM17 2.00006V10.0001V2.00006Z"
                           fill="#3C72FC" mask="url(#path-2-inside-1_670_477)" />
                     </svg>
                     SERVICES WE’RE OFFERING
                  </h5>
                  <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     Exclusive IT Services</h2>
               </div>
               <div className="arry-btn  d-flex gap-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <button className="arry-prev service__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                  <button className="arry-next service__arry-next active"><i
                     className="fa-light fa-chevron-right"></i></button>
               </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper service-two__slider">
               {service_data.filter((items) => items.page === "home_2").map((item) => (
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
                           <Link className="read-more-btn" href="/service-details">Read More <i
                              className="fa-regular fa-arrow-right-long"></i></Link>
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
