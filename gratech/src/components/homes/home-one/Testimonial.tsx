"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import TestimonialForm from "@/components/forms/TestimonialForm"
import Image, { StaticImageData } from "next/image"
import { JSX } from "react";

import shape_1 from "@/assets/images/icon/section-title.png"
import avatar_1 from "@/assets/images/testimonial/testimonial-image1.png"
import avatar_2 from "@/assets/images/testimonial/testimonial-image2.png"

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
      name: "Suborna Tarchera",
      designation: "Web Developer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</>)
   },
   {
      id: 2,
      avatar: avatar_2,
      name: "Alex Rony",
      designation: "Web Designer",
      desc: (<>“ Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo ”</>)
   },
];

const setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      nextEl: ".testimonial__arry-next",
      prevEl: ".testimonial__arry-prev",
   },
};

const Testimonial = () => {
   return (
      <section id="testimonial-section" className="testimonial-area bg-image pt-120 pb-120" style={{ backgroundImage: `url(/assets/images/bg/testimonial-bg.png)` }}>
         <div className="container">
            <div className="row g-4">
               <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="talk-us__item">
                     <div className="section-header mb-30">
                        <h5 className="text-white">
                           <svg width="28" height="12" viewBox="0 0 28 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white"
                                 strokeWidth="1.5" />
                              <rect x="8" width="20" height="12" rx="6" fill="white" />
                           </svg>
                           TALK TO US
                        </h5>
                        <h2 className="text-white">How May We Help You!</h2>
                     </div>
                     <TestimonialForm />
                  </div>
               </div>
               <div className="col-lg-6 ps-2 ps-lg-5">
                  <div className="section-header mb-40">
                     <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <Image className="me-1" src={shape_1} alt="icon" />
                        Client's Talk
                     </h5>
                     <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">What Clients Say About Us</h2>
                     <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">We have added undeniable value to our clients’ projects and ensured quantifiable results through our outcome-focused approach, ingenious thinking, and practical innovation. We don't want you to rely on our word alone. See for yourself what our valuable clients have to say about us and how we helped them succeed.</p>
                  </div>
                  <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial__slider wow fadeInDown" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                     {testi_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="testimonial__item">
                              <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                                    fill="#3C72FC" />
                              </svg>
                              <div className="d-flex align-items-center gap-3">
                                 <Image src={item.avatar} alt="image" />
                                 <div className="testi-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.designation}</p>
                                    <div className="star mt-1">
                                       <i className="fa-sharp fa-solid fa-star"></i>
                                       <i className="fa-sharp fa-solid fa-star"></i>
                                       <i className="fa-sharp fa-solid fa-star"></i>
                                       <i className="fa-sharp fa-solid fa-star"></i>
                                       <i className="fa-sharp fa-solid fa-star disable"></i>
                                    </div>
                                 </div>
                              </div>
                              <p className="mt-30">{item.desc}</p>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="testimonial__arry-btn mt-40 wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <button className="arry-prev testimonial__arry-prev"><i
                        className="fa-light fa-chevron-left"></i></button>
                     <button className="arry-next testimonial__arry-next active"><i
                        className="fa-light fa-chevron-right"></i></button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
