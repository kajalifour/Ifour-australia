"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"

import shape_1 from "@/assets/images/bg/banner-three-bg.png"
import shape_2 from "@/assets/images/banner/banner-three-left-shape.png"
import shape_3 from "@/assets/images/banner/banner-three-right-shape.png"
import banner_thumb from "@/assets/images/banner/banner-three-image.png"

const Banner = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="banner-three-area">
            <div className="banner-three__bg">
               <Image className="sway_Y__animation" src={shape_1} alt="bg-image" />
            </div>
            <div className="banner-three__shape-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
               <Image className="sway_Y__animationY" src={shape_2} alt="image" />
            </div>
            <div className="banner-three__shape-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
               <Image className="sway__animationX" src={shape_3} alt="image" />
            </div>
            <div className="banner-three__container">
               <div className="row align-items-center">
                  <div className="col-lg-7 order-2 order-lg-1">
                     <div className="banner-three__content pt-0 pb-0">
                        <h4 className="wow fadeInUp text-white mb-20" data-wow-delay="00ms" data-wow-duration="1500ms">
                           TECHNOLOGY RELETED CONSULTANCY
                        </h4>
                        <h1 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">
                           Make The Easiest Solution For You
                        </h1>
                        <p className="wow fadeInUp mt-20" data-wow-delay="400ms" data-wow-duration="1500ms">
                           Consectetur adipiscing elit Aenean scelerisque at augue vitae consequat <br /> quisque
                           eget
                           congue velit in cursus leo Sed
                           sodales
                        </p>
                        <div className="banner-three__info wow fadeInUp mt-50" data-wow-delay="600ms"
                           data-wow-duration="1500ms">
                           <a className="wow fadeInUp btn-one mt-0" data-delay="1s" href="about.html">Explore
                              More <i className="fa-regular fa-arrow-right-long"></i></a>
                           <div className="banner-three__video-btn d-flex gap-4 align-items-center">
                              <div className="video-btn video-pulse">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup"><i
                                    className="fa-solid fa-play"></i></a>
                              </div>
                              <h5 className="text-white">How It Works</h5>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5 order-1 order-lg-2 wow fadeInLeft" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <div className="image">
                        <Image src={banner_thumb} alt="image" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </>
   )
}

export default Banner
