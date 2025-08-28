"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Case_data from "@/data/CaseData"
import Image from "next/image"
import Link from "next/link"

import case_bg from "@/assets/images/bg/case-two-bg.png"

const setting = {
   slidesPerView: 4,
   spaceBetween: 8,
   loop: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      nextEl: ".case__arry-next",
      prevEl: ".case__arry-prev",
   },
   breakpoints: {
      1440: {
         slidesPerView: 4,
      },
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

const Case = () => {
  // Define the 4 specific case studies we want to show
  const specificCaseStudies = [
    {
      id: 1,
      sub_title: "AI Healthcare Monitoring System",
      title: "AI system that automates manual diagnostics and removes unpredictability from the healthcare",
      thumb: Case_data[0].thumb, // Using the first case study image
      url: "/case-study/ai-healthcare-monitoring-system"
    },
    {
      id: 2,
      sub_title: "Life Cycle Assessment Software",
      title: "An integrated system that analyses project aspects and automates operations to save time",
      thumb: Case_data[1].thumb, // Using the second case study image
      url: "/case-study/life-cycle-assessment-software"
    },
    {
      id: 3,
      sub_title: "Airport Parking Booking System",
      title: "A Resilient booking engine with capacity to handle more than three digit bookings per day.",
      thumb: Case_data[2].thumb, // Using the third case study image
      url: "/case-study/airport-parking-operator-booking-system"
    },
    {
      id: 4,
      sub_title: "Life Cycle Assessment for Packaging Industry",
      title: "An efficient tool for assessing the Product Life Cycle and environmental impact of packages.",
      thumb: Case_data[3].thumb, // Using the fourth case study image
      url: "/case-study/life-cycle-assessment-for-packaging-industry"
    }
  ];

  return (
     <section className="case-two-area pt-60 pb-60">
        <div className="case-two__bg">
           <Image src={case_bg} alt="image" />
        </div>
        <div className="container">
           <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-60">
              <div className="section-header">
                 <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                    <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                       <rect x="0.75" y="0.747803" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95"
                          strokeWidth="1.5" />
                       <mask id="path-2-inside-1_1120_297" fill="white">
                          <path
                             d="M3 5.9978C3 3.78866 4.79086 1.9978 7 1.9978H13C15.2091 1.9978 17 3.78866 17 5.9978C17 8.20694 15.2091 9.9978 13 9.9978H7C4.79086 9.9978 3 8.20694 3 5.9978Z" />
                       </mask>
                       <path
                          d="M3 5.9978C3 2.96024 5.46243 0.497803 8.5 0.497803H11.5C14.5376 0.497803 17 2.96024 17 5.9978C17 4.61709 15.2091 3.4978 13 3.4978H7C4.79086 3.4978 3 4.61709 3 5.9978ZM17 5.9978C17 9.03537 14.5376 11.4978 11.5 11.4978H8.5C5.46243 11.4978 3 9.03537 3 5.9978C3 7.37851 4.79086 8.4978 7 8.4978H13C15.2091 8.4978 17 7.37851 17 5.9978ZM3 9.9978V1.9978V9.9978ZM17 1.9978V9.9978V1.9978Z"
                          fill="#0f7a95" mask="url(#path-2-inside-1_1120_297)" />
                    </svg>
                    Smart, Scalable Tech
                 </h5>
                 <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                    Proven Technology Solutions That Drive Results</h2>
              </div>
              <div className="arry-btn  d-flex gap-3 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                 <button className="arry-prev case__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                 <button className="arry-next case__arry-next active"><i
                    className="fa-light fa-chevron-right"></i></button>
              </div>
           </div>
        </div>
        <div className="case-two__container">
           <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper case-two__slider">
              {specificCaseStudies.map((item) => (
                 <SwiperSlide key={item.id} className="swiper-slide">
                    <div className="case-two__item" style={{ 
                      transform: 'scale(0.75)', 
                      transformOrigin: 'top left',
                      marginBottom: '-50px',
                      marginLeft: '-50px',
                      marginRight: '-50px'
                    }}>
                       <div className="image case-two__image">
                          <Image src={item.thumb} alt="image" />
                       </div>
                       <div className="case-two__content">
                          <span>{item.sub_title}</span>
                          <h4 style={{ fontSize: '200%' }}><Link href={item.url} className="text-white">{item.title}</Link></h4>
                       </div>
                       <Link href={item.url} className="case-two__btn">
                          <i className="fa-regular fa-arrow-right"></i>
                       </Link>
                    </div>
                 </SwiperSlide>
              ))}
           </Swiper>
        </div>
     </section>
  )
}

export default Case
