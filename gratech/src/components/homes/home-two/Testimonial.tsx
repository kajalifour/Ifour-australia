"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image, { StaticImageData } from "next/image";
import { JSX } from "react";

import avatar_1 from "@/assets/images/testimonial/testimonial-two-image1.png"
import avatar_2 from "@/assets/images/testimonial/testimonial-two-image2.png"
import avatar_3 from "@/assets/images/testimonial/testimonial-two-image3.png"

interface DataType {
   id: number;
   avatar: StaticImageData;
   name: string;
   designation: string;
   desc: JSX.Element;
}

const testi_data: DataType[] = [
   {
      id: 1,
      avatar: avatar_1,
      name: "Alex Rony",
      designation: "Engineering",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo ”</>),
   },
   {
      id: 2,
      avatar: avatar_2,
      name: "Suborna Tarchera",
      designation: "UI/UX Designer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo ”</>),
   },
   {
      id: 3,
      avatar: avatar_3,
      name: "Kawser Ahmed",
      designation: "Web Designer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc nul viverra Aenean pulvinar maximus leo ”</>),
   },
];

const setting = {
   slidesPerView: 1,
		spaceBetween: 24,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".testimonial__dot",
      clickable: true,
   },
   navigation: false,
   breakpoints: {
      992: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },
};

interface StyleType {
   style: boolean;
}

const Testimonial = ({ style }: StyleType) => {
   return (
      <section className="testimonial-two-area pb-120">
         <div className="container">
            <div className="section-header text-center mb-40">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95"
                        strokeWidth="1.5" />
                     <mask id="path-2-inside-1_869_295" fill="white">
                        <path
                           d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
                     </mask>
                     <path
                        d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                        fill="#0f7a95" mask="url(#path-2-inside-1_869_295)" />
                  </svg>
                  Testimonials
               </h5>
               <h2 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">What Our
                  Client’s Say
                  About Us</h2>
            </div>
            <Swiper {...setting} modules={[Autoplay, Pagination]} className="swiper testimonial-two__slider">
               {testi_data.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide">
                     <div className={`testimonial-two__item ${style ? "dark-mode" : ""}`}>
                        <div className="star mb-10">
                           <i className="fa-sharp fa-solid fa-star"></i>
                           <i className="fa-sharp fa-solid fa-star"></i>
                           <i className="fa-sharp fa-solid fa-star"></i>
                           <i className="fa-sharp fa-solid fa-star"></i>
                           <i className="fa-sharp fa-solid fa-star disable"></i>
                        </div>
                        <p className="mb-30">({item.desc})</p>
                        <div className="d-flex align-items-center gap-3">
                           <Image src={item.avatar} alt="image" />
                           <div className="con">
                              <h4>{item.name}</h4>
                              <span>{item.designation}</span>
                           </div>
                        </div>
                        <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#0f7a95" />
                        </svg>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="text-center mt-40">
               <div className="dot testimonial__dot"></div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
