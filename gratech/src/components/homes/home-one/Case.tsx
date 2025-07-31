"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import Case_data from '@/data/CaseData';

import shape_1 from "@/assets/images/icon/section-title.png"
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-two-image2.png"
import shape_2 from "@/assets/images/shape/about-two-dot.png"
import shape_3 from "@/assets/images/shape/about-circle-helper.png"
import shape_4 from "@/assets/images/shape/about-two-circle.png"

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

const Case = () => {
   return (
      <>
         {/* Ensuring Your Success Through Reliable IT Solutions Section */}
         <section id="success-section" className="about-two-area pt-120 pb-120">
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="about-two__left-item">
                        <div className="dots">
                           <Image className="sway_Y__animation" src={shape_2} alt="shape" />
                        </div>
                        <div className="shape-halper">
                           <Image className="sway__animation" src={shape_3} alt="shape" />
                        </div>
                        <div className="image big-image">
                           <Image src={about_thumb1} alt="image" />
                        </div>
                        <div className="image sm-image">
                           <Image src={about_thumb2} alt="image" />
                        </div>
                        <div className="circle-shape">
                           <Image className="animation__rotate" src={shape_4} alt="shape" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="section-header mb-40">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <Image className="me-1" src={shape_1} alt="icon" />
                           WHO WE ARE
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                           Ensuring Your Success Through Reliable IT Solutions
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                           We are committed to delivering exceptional IT solutions that drive your business forward. 
                           Our team of experts combines technical excellence with strategic thinking to ensure your 
                           success in the digital landscape.
                        </p>
                     </div>
                     <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <ul>
                           <li><i className="fa-solid fa-check"></i>Technology Consultancy</li>
                           <li><i className="fa-solid fa-check"></i>We Provide best services</li>
                        </ul>
                        <ul>
                           <li><i className="fa-solid fa-check"></i>Maintenance And Support</li>
                           <li><i className="fa-solid fa-check"></i>Requirements Gathering</li>
                        </ul>
                     </div>
                     <div className="about__info mt-50 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <Link href="/about" className="btn-one">
                           About Us <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Case
