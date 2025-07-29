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
      <>
         <section id="about-section" className="about-area sub-bg pt-120">
            <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
               <Image src={shape_1} alt="shape" />
            </div>
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="about__left-item">
                        <div className="image big-image">
                           <Image src={about_thumb1} alt="image" />
                        </div>
                        <div className="image sm-image">
                           <div className="video__btn-wrp">
                              <div className="video-btn video-pulse">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup"><i
                                    className="fa-solid fa-play"></i></a>
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
                           ABOUT Gratech
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">A Software Development Company You Can Trust</h2>
                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">iFour Technolab is a Microsoft Certified Solutions Partner and a top software development company offering advanced, customized software solutions. With over a decade of experience and deep tech expertise, we help turn your ideas into reality. Staying updated with the latest technologies, we ensure our solutions align perfectly with your business goals.</p>
                     </div>
                     <div className="row g-4 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-md-6">
                           <div className="about__right-item">
                              <div className="icon">
                                 <Image src={icon_1} alt="icon" />
                              </div>
                              <div className="content">
                                 <h4 className="mb-1">Best Services</h4>
                                 <p>Comprehensive Software Development Solutions Tailored to Your Business</p>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="about__right-item">
                              <div className="icon">
                                 <Image src={icon_2} alt="icon" />
                              </div>
                              <div className="content">
                                 <h4 className="mb-1">24/7 Call Support</h4>
                                 <p>24/7 Assistance to Keep Your Business Running Smoothly</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="about__info mt-50 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <Link href="/about" className="btn-one">Explore More <i
                           className="fa-regular fa-arrow-right-long"></i></Link>
                        <div className="d-flex gap-2 align-items-center">
                           <Image src={info} alt="image" />
                           <div className="info">
                              <h5>Ronald Richards</h5>
                              <span className="sm-font">Co, Founder</span>
                           </div>
                        </div>
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
      </>
   )
}

export default About
