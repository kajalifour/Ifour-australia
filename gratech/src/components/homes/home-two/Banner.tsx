"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Image from "next/image";
import { JSX } from "react";
import Link from "next/link";

import shape_1 from "@/assets/images/banner/banner-line.png"
import shape_2 from "@/assets/images/banner/banner-two-left-line.png"
import shape_3 from "@/assets/images/banner/banner-two-solid-right-down.png"
import shape_4 from "@/assets/images/banner/banner-two-solid-right-up.png"
import shape_5 from "@/assets/images/banner/banner-two-right-shape.png"
import shape_6 from "@/assets/images/banner/banner-two-circle-solid.png"
import shape_7 from "@/assets/images/banner/banner-two-circle-regular.png"

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
      bg_img: "/assets/images/banner/banner-two-image1.jpg",
      sub_title: "TECHNOLOGY RELETED CONSULTANCY",
      title: "We Convert Concepts Into Technology",
      desc: (<>Consectetur adipiscing elit Aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo Sed sodales</>),
   },
   {
      id: 2,
      bg_img: "/assets/images/banner/banner-two-image2.jpg",
      sub_title: "TECHNOLOGY RELETED CONSULTANCY",
      title: "We Convert Concepts Into Technology",
      desc: (<>Consectetur adipiscing elit Aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo Sed sodales</>),
   },
   {
      id: 3,
      bg_img: "/assets/images/banner/banner-two-image3.jpg",
      sub_title: "TECHNOLOGY RELETED CONSULTANCY",
      title: "We Convert Concepts Into Technology",
      desc: (<>Consectetur adipiscing elit Aenean scelerisque at augue vitae consequat <br /> quisque eget congue velit in cursus leo Sed sodales</>),
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
      <section className="banner-two-area">
         <div className="banner-two__line">
            <Image className="sway_Y__animation" src={shape_1} alt="shape" />
         </div>
         <Swiper {...setting} modules={[Autoplay, Pagination, EffectFade]} className="swiper banner__slider">
            {banner_data.map((item) => (
               <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="banner-two__line-left" data-animation="slideInLeft" data-duration="3s"
                     data-delay=".3s">
                     <Image src={shape_2} alt="shape" />
                  </div>
                  <div className="banner-two__shape2" data-animation="slideInRight" data-duration="2s"
                     data-delay=".3s">
                     <Image src={shape_3} alt="shape" />
                  </div>
                  <div className="banner-two__shape1" data-animation="slideInRight" data-duration="2s"
                     data-delay=".5s">
                     <Image src={shape_4} alt="shape" />
                  </div>
                  <div className="banner-two__right-shape wow slideInRight" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <Image className="sway_Y__animation" src={shape_5}
                        alt="shape" />
                  </div>
                  <div className="banner-two__circle-solid">
                     <Image className="animation__rotate" src={shape_6}
                        alt="shape" />
                  </div>
                  <div className="banner-two__circle-regular">
                     <Image className="animation__rotateY" src={shape_7}
                        alt="shape" />
                  </div>
                  <div className="slide-bg" style={{ backgroundImage: `url(${item.bg_img})` }}></div>
                  <div className="container">
                     <div className="banner-two__content text-center">
                        <h4 data-animation="fadeInUp" data-delay=".3s" className="text-white mb-20">
                           {item.sub_title}
                        </h4>
                        <h1 data-animation="fadeInUp" data-delay=".5s" className="text-white">
                           {item.title}
                        </h1>
                        <p data-animation="fadeInUp" data-delay=".7s" className="mt-20">
                           {item.desc}
                        </p>
                        <Link data-animation="fadeInUp" data-delay="1s" href="/about"
                           className="btn-one mt-50">Explore
                           More <i className="fa-regular fa-arrow-right-long"></i></Link>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="banner__dot-wrp banner-two__dot-wrp">
            <div className="dot-light banner__dot"></div>
         </div>
      </section>
   )
}

export default Banner
