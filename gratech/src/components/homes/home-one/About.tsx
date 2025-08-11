"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import Link from "next/link"

import about_thumb1 from "@/assets/images/about/about-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-image2.png"
import shape_1 from "@/assets/images/shape/about-line.png"
import shape_2 from "@/assets/images/shape/about-circle.png"
import shape_3 from "@/assets/images/icon/section-title.png"
import icon_1 from "@/assets/images/icon/about-icon1.png"
import icon_2 from "@/assets/images/icon/about-icon2.png"
import info from "@/assets/images/about/about-info.png"

const About = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <div>
         <section id="about-section" className="about-area sub-bg pt-120 pb-80">
            <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
               <Image src={shape_1} alt="shape" />
            </div>
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="about__left-item">
                        <div className="image big-image" style={{ marginTop: '70px' }}>
                           <Image src={about_thumb1} alt="image" />
                        </div>
                        <div className="image sm-image" style={{ marginTop: '70px' }}>
                           <div className="video__btn-wrp">
                              <div className="video-btn video-pulse">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup">
                                    <i className="fa-solid fa-play"></i>
                                 </a>
                              </div>
                           </div>
                           <Image src={about_thumb2} alt="image" />
                        </div>
                        <div className="circle-shape">
                           <Image src={shape_2} alt="shape" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="section-header mb-40">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <Image className="me-1" src={shape_3} alt="icon" />
                           ABOUT Us
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <span style={{ color: '#0f7a95' }}>A Software Development Company</span> You Can Trust
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                           iFour Technolab is a Microsoft Certified Solutions Partner and a premier software development company delivering leading-edge software development services and solutions. We blend our technological niche-specific expertise with our decade-long experience to bring your innovative vision to life. We keep up with the ever-evolving software development landscape to acquaint ourselves with cutting-edge technology and frameworks, ensuring you get the best possible solutions that perfectly match your business needs.
                        </p>
                        <p className="wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                           From start-ups to large enterprises, we have been the monumental driving force behind the successes of many projects. With a team of 120+ dedicated and highly skilled tech geniuses, 7+ SCRUM masters, and four offices situated around the globe, iFour Technolab is your trusted partner in driving innovation, excellence, and unparalleled success.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </div>
   )
}

export default About
