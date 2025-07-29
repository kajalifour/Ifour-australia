"use client"
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import { useInView } from "react-intersection-observer";

import shape_1 from "@/assets/images/shape/choose-shape-right.png"
import shape_2 from "@/assets/images/shape/choose-shape-right2.png"
import shape_3 from "@/assets/images/shape/choose-shape-left.png"
import icon_1 from "@/assets/images/icon/about-icon1.png"
import icon_2 from "@/assets/images/icon/about-icon2.png"
import choose_thumb1 from "@/assets/images/choose/choose-image1.png"

interface DataType {
   title: string;
   percentage: number;
   duration: string;
}

const progressSkills: DataType[] = [
   { title: "Information Technology", percentage: 86, duration: ".86s" },
   { title: "Technology Consultant", percentage: 95, duration: ".86s" },
];

const Choose = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.3,
   });

   return (
      <>
         <section className="choose-area sub-bg pt-120 pb-120" ref={ref}>
            <div className="choose__video-btn">
               <div className="video-btn video-pulse wow fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup"><i
                     className="fa-solid fa-play"></i></a>
               </div>
            </div>
            <div className="choose__shape-right1 wow slideInRight d-none d-lg-block" data-wow-delay="200ms"
               data-wow-duration="1500ms">
               <Image src={shape_1} alt="shape" />
            </div>
            <div className="choose__shape-right2 wow slideInRight d-none d-lg-block" data-wow-delay="200ms"
               data-wow-duration="1000ms">
               <Image src={shape_2} alt="shape" />
            </div>
            <div className="choose__shape-left sway__animation">
               <Image src={shape_3} alt="shape" />
            </div>
            <div className="container">
               <div className="row g-4">
                  <div className="col-lg-6 d-block d-lg-none">
                     <div className="image">
                        <Image src={choose_thumb1} alt="image" />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="section-header mb-40">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="#3C72FC"
                                 strokeWidth="1.5" />
                              <mask id="path-2-inside-1_682_455" fill="white">
                                 <path
                                    d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
                              </mask>
                              <path
                                 d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                                 fill="#3C72FC" mask="url(#path-2-inside-1_682_455)" />
                           </svg>
                           WHY Choose US
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Elevate Your
                           Achievements Using Premier IT Solutions</h2>
                     </div>
                     <div className="row g-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="col-md-6">
                           <div className="about__right-item">
                              <div className="icon">
                                 <Image src={icon_1} alt="icon" />
                              </div>
                              <div className="content">
                                 <h4 className="mb-1">Best Services</h4>
                                 <p>Scelerisque augue the consequat sodales</p>
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
                                 <p>Scelerisque augue the consequat sodales</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     {progressSkills.map((item, idx) => (
                        <div className={`progress-area ${idx > 0 ? "mt-20" : "mt-40"}`} key={idx}>
                           <div className="progress__title mb-10">
                              <h5>{item.title}</h5>
                              <span>
                                 <span className="progress-count">{item.percentage}</span>%
                              </span>
                           </div>
                           <div className="progress">
                              <div
                                 className="progress-bar"
                                 role="progressbar"
                                 style={{
                                    width: inView ? `${item.percentage}%` : "0%",
                                    transition: `width ${item.duration} ease`,
                                 }}
                                 aria-valuenow={item.percentage}
                                 aria-valuemin={0}
                                 aria-valuemax={100}
                              ></div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                     <div className="choose__image image">
                        <Image src={choose_thumb1} alt="image" />
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

export default Choose
