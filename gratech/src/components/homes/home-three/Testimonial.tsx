"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from "next/image"
import { JSX } from "react";

import shape_1 from "@/assets/images/icon/section-title.png"
import avatar_1 from "@/assets/images/testimonial/testimonial-three-image1.png"
import avatar_2 from "@/assets/images/testimonial/testimonial-three-image2.png"
import avatar_3 from "@/assets/images/testimonial/testimonial-three-image3.png"


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
      name: "Alex Pranto",
      designation: "Ethical Hacker",
      desc: (<>“ Consectetur elit nteger maecenas porta is nunc nul viverra Aenean pulvinar maximus leo nunc viverra laoreet est the is porta adipiscing pretium ”</>)
   },
   {
      id: 2,
      avatar: avatar_2,
      name: "Adity Roy",
      designation: "Web Designer",
      desc: (<>“ Consectetur elit nteger maecenas porta is nunc nul viverra Aenean pulvinar maximus leo nunc viverra laoreet est the is porta adipiscing pretium ”</>)
   },
   {
      id: 3,
      avatar: avatar_3,
      name: "Mohmamd Arif",
      designation: "Software Tester",
      desc: (<>“ Consectetur elit nteger maecenas porta is nunc nul viverra Aenean pulvinar maximus leo nunc viverra laoreet est the is porta adipiscing pretium ”</>)
   },
   {
      id: 4,
      avatar: avatar_2,
      name: "Adity Roy",
      designation: "Web Designer",
      desc: (<>“ Consectetur elit nteger maecenas porta is nunc nul viverra Aenean pulvinar maximus leo nunc viverra laoreet est the is porta adipiscing pretium ”</>)
   },
];

const setting = {
   slidesPerView: 3,
   spaceBetween: 24,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: false,
   navigation: {
      nextEl: ".testimonial-three__arry-next",
      prevEl: ".testimonial-three__arry-prev",
   },
   breakpoints: {
      1200: {
         slidesPerView: 3,
      },
      992: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },
};

const Testimonial = () => {
   return (
      <section id="testimonials-section" className="testimonial-three-area pt-120 pb-120 bg-image sub-bg"
         style={{ backgroundImage: `url(/assets/images/bg/testimonial-three-bg.png)` }}>
         <div className="testimonial-three__wrp">
            <div className="row g-4">
               <div className="col-md-6 col-lg-5 col-xl-3">
                  <div className="section-header mb-40">
                     <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <Image className="me-1" src={shape_1} alt="icon" />
                        Testimonials
                     </h5>
                     <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Hundreds of
                        clients
                        worldwide trust our IT solution</h2>
                  </div>
                  <div className="testimonial-three__arry-btn d-flex gap-3 wow fadeInDown" data-wow-delay="400ms"
                     data-wow-duration="1500ms">
                     <button className="arry-prev testimonial-three__arry-prev"><i
                        className="fa-light fa-chevron-left"></i></button>
                     <button className="arry-next testimonial-three__arry-next active"><i
                        className="fa-light fa-chevron-right"></i></button>
                  </div>
               </div>
               <div className="col-md-6 col-lg-7 col-xl-9">
                  <Swiper {...setting} modules={[Autoplay, Navigation]} className="swiper testimonial-three__slider">
                     {testi_data.map((item) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="testimonial-three__item">
                              <div className="d-flex align-items-center gap-3">
                                 <div className="testimonial-three__image">
                                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z" fill="#3C72FC" />
                                    </svg>
                                    <Image src={item.avatar} alt="image" />
                                 </div>
                                 <div className="con">
                                    <h4>{item.name}</h4>
                                    <span>{item.designation}</span>
                                 </div>
                              </div>
                              <p className="mt-30">{item.desc}</p>
                              <div className="star mt-20">
                                 <i className="fa-sharp fa-solid fa-star"></i>
                                 <i className="fa-sharp fa-solid fa-star"></i>
                                 <i className="fa-sharp fa-solid fa-star"></i>
                                 <i className="fa-sharp fa-solid fa-star"></i>
                                 <i className="fa-sharp fa-solid fa-star disable"></i>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonial
