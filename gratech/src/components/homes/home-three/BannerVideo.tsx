"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"

import img from "@/assets/images/video/video-image1.jpg"

const BannerVideo = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="banner-video-area">
            <div className="container">
               <div className="banner-video__wrp image">
                  <Image src={img} alt="image" />
                  <div className="banner-video__video-btn">
                     <div className="video-btn video-pulse wow fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup"><i
                           className="fa-solid fa-play"></i></a>
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

export default BannerVideo
