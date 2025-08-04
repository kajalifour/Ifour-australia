"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/service-bg-shape.png"
import shape_2 from "@/assets/images/icon/section-title.png"

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
};

const Service = () => {
   return (
      <section id="service-section" className="service-area pt-120 pb-160">
         <div className="service__shape wow slideInRight">
            <Image className="sway_Y__animation" src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Our Range of Software Development Services</span> to Achieve Your Goals
                  </h2>
                  <p className="wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ marginTop: '20px', lineHeight: '1.6' }}>
                     iFour Technolab has been helping businesses embrace innovation and the full potential of technology since its inception. No matter the requirements, whether it's developing custom software from scratch, reengineering an existing legacy system, or integrating new technologies into routine workflows, trust iFour Technolab to deliver. Our services include the following:
                  </p>
               </div>
            </div>
            <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper service__slider">
               {service_data.filter((items) => items.page === "home_1").map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className="service__item" style={{
                        backgroundColor: 'rgba(15, 122, 149, 0.15)',
                        borderRadius: '5px',
                        padding: '20px 20px 50px 20px',
                        transition: 'all 0.3s ease-in-out',
                        border: '1px solid rgba(15, 122, 149, 0.2)',
                        boxShadow: '0 2px 10px rgba(15, 122, 149, 0.1)',
                        height: '320px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'
                     }}>

                        <div className="service__icon">
                           <Image src={item.icon} alt="icon" />
                        </div>
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p style={{ flex: '1' }}>{item.desc}</p>
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
