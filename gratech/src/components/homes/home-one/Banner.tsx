"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from "next/image"
import { JSX } from "react"

import line from "@/assets/images/banner/banner-line.png"
import shape_1 from "@/assets/images/banner/banner-regular-left-shape.png"
import shape_2 from "@/assets/images/banner/banner-solid-left-shape.png"
import shape_3 from "@/assets/images/banner/banner-shape-left.png"
import shape_4 from "@/assets/images/banner/banner-shape-right-line.png"
import shape_5 from "@/assets/images/banner/banner-shape-right.png"
import shape_6 from "@/assets/images/banner/banner-right-line1.png"
import shape_7 from "@/assets/images/banner/banner-right-line2.png"
import shape_8 from "@/assets/images/banner/banner-right-line3.png"
import shape_9 from "@/assets/images/banner/banner-right-line4.png"

interface DataType {
   id: number;
   bg_img: string;
   sub_title: string;
   title: string;
   desc: JSX.Element;
}

const banner_data: DataType[] = [
   {
      id: 1,
      bg_img: "/assets/images/banner/banner-image.jpg",
      sub_title: "Pioneer Software Development Company",
      title: "Shaping Success through Innovation & Technology Since 2013",
      desc: (<>Leverage our tech prowess to build the best-in-class software solutions and spur business growth and prosperity.</>)
   },
   {
      id: 2,
      bg_img: "/assets/images/banner/banner-image2.jpg",
      sub_title: "Pioneer Software Development Company",
      title: "Shaping Success through Innovation & Technology Since 2013",
      desc: (<>Leverage our tech prowess to build the best-in-class software solutions and spur business growth and prosperity.</>)
   },
   {
      id: 3,
      bg_img: "/assets/images/banner/banner-image3.jpg",
      sub_title: "Pioneer Software Development Company",
      title: "Shaping Success through Innovation & Technology Since 2013",
      desc: (<>Leverage our tech prowess to build the best-in-class software solutions and spur business growth and prosperity.</>)
   },
];

const setting = {
   slidesPerView: 1,
   loop: true,
   effect: "fade",
   fadeEffect: { crossFade: true },
   autoplay: {
      delay: 7000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".banner__dot",
      clickable: true,
   },
   navigation: false,
};

const Banner = () => {
   return (
      <section className="banner-area">
         <div className="banner__line">
            <Image className="sway__animation" src={line} alt="shape" />
         </div>
         <Swiper {...setting} modules={[Autoplay, Pagination, EffectFade]} className="swiper banner__slider">
            {banner_data.map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div data-animation="slideInLeft" data-duration="2s" data-delay=".3s"
                     className="banner__shape-left2">
                     <Image src={shape_1} alt="shape" />
                  </div>
                  <div data-animation="slideInLeft" data-duration="2s" data-delay=".9s"
                     className="banner__shape-left1">
                     <Image src={shape_2} alt="shape" />
                  </div>
                  <div className="banner__shape-left3 wow slideInLeft">
                     <Image className="sway__animation" src={shape_3} alt="shape" />
                  </div>
                  <div className="banner__shape-right2" data-animation="slideInRight" data-duration="3s"
                     data-delay=".3s">
                     <Image src={shape_4} alt="shape" />
                  </div>
                  <div className="banner__shape-right1" data-animation="slideInRight" data-duration="2s"
                     data-delay=".3s">
                     <Image src={shape_5} alt="shape" />
                  </div>
                  <div className="banner__right-line1" data-animation="slideInRight" data-duration="2s"
                     data-delay=".9s">
                     <Image src={shape_6} alt="shape" />
                  </div>
                  <div className="banner__right-line2" data-animation="slideInRight" data-duration="2s"
                     data-delay=".7s">
                     <Image src={shape_7} alt="shape" />
                  </div>
                  <div className="banner__right-line3" data-animation="slideInRight" data-duration="2s"
                     data-delay=".5s">
                     <Image src={shape_8} alt="shape" />
                  </div>
                  <div className="banner__right-line4" data-animation="slideInRight" data-duration="2s"
                     data-delay=".3s">
                     <Image src={shape_9} alt="shape" />
                  </div>
                  <div className="slide-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                  <div className="container">
                     <div className="banner__content">
                        <h4 data-animation="slideInRight" data-duration="2s" data-delay=".3s"
                           className="text-white mb-20">
                           <svg className="me-1" width="40" height="16" viewBox="0 0 40 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.5" y="0.500183" width="25.6667" height="15" rx="7.5"
                                 stroke="white" />
                              <rect x="13.3334" y="0.000183105" width="26.6667" height="16" rx="8"
                                 fill="white" />
                           </svg>
                           {item.sub_title}
                        </h4>
                        <h1 data-animation="slideInRight" data-duration="2s" data-delay=".5s" className="text-white">
                           {item.title}
                        </h1>
                        <p data-animation="slideInRight" data-duration="2s" data-delay=".7s" className="mt-20">
                           {item.desc}
                        </p>
                        <a data-animation="slideInRight" data-duration="2s" data-delay=".9s" href="about.html"
                           className="btn-one mt-60">Explore
                           More <i className="fa-regular fa-arrow-right-long"></i></a>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="banner__dot-wrp">
            <div className="dot-light banner__dot"></div>
         </div>
      </section>
   )
}

export default Banner
