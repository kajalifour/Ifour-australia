"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialForm from "@/components/forms/TestimonialForm"
import Image, { StaticImageData } from "next/image"
import { JSX, useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import shape_1 from "@/assets/images/icon/section-title.png"
import avatar_1 from "@/assets/images/testimonial/testimonial-image1.png"
import avatar_2 from "@/assets/images/testimonial/testimonial-image2.png"

interface DataType {
   id: number;
   avatar: StaticImageData;
   name: string;
   designation: string;
   desc: JSX.Element;
   isVideo?: boolean;
   videoUrl?: string;
}

const testi_data: DataType[] = [
   {
      id: 1,
      avatar: avatar_1,
      name: "iFour Technolab Client",
      designation: "Client Testimonial",
      desc: (<>iFour Technolab delivered exceptional results for our project. Their team demonstrated outstanding technical expertise and professional communication throughout the development process.</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/itCyHAtz9ps"
   },
   {
      id: 2,
      avatar: avatar_2,
      name: "iFour Technolab Client",
      designation: "Client Testimonial",
      desc: (<>Working with iFour Technolab was a game-changer for our business. Their innovative solutions and attention to detail exceeded our expectations.</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/KYgzAEupZak"
   },
   {
      id: 3,
      avatar: avatar_1,
      name: "iFour Technolab Client",
      designation: "Client Testimonial",
      desc: (<>The quality of work delivered by iFour Technolab is outstanding. They transformed our vision into reality with precision and creativity.</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/1qgWVsv4yw0"
   },
   {
      id: 4,
      avatar: avatar_2,
      name: "iFour Technolab Client",
      designation: "Client Testimonial",
      desc: (<>iFour Technolab consistently delivers high-quality solutions. Their expertise in modern technologies helped us achieve remarkable results.</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/Vh5hzqowxzk"
   },
   {
      id: 5,
      avatar: avatar_1,
      name: "iFour Technolab Client",
      designation: "Client Testimonial",
      desc: (<>Partnering with iFour Technolab was the best decision for our digital transformation. Their team is highly skilled and professional.</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/cFtsaIihO80"
   },
];

const setting = {
   slidesPerView: 1,
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
   allowTouchMove: true,
   grabCursor: true,
   resistance: true,
   resistanceRatio: 0.85,
};

const Testimonial = () => {
   const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
   const swiperRef = useRef<SwiperType | null>(null);

   const handleVideoPlay = (videoIndex: number) => {
      setCurrentVideoIndex(videoIndex);
      setIsVideoPopupOpen(true);
   };

   const handleCloseVideo = () => {
      setIsVideoPopupOpen(false);
   };

   const handleNextVideo = () => {
      const nextIndex = (currentVideoIndex + 1) % testi_data.length;
      setCurrentVideoIndex(nextIndex);
      if (swiperRef.current) {
         swiperRef.current.slideTo(nextIndex);
      }
   };

   const handlePrevVideo = () => {
      const prevIndex = currentVideoIndex === 0 ? testi_data.length - 1 : currentVideoIndex - 1;
      setCurrentVideoIndex(prevIndex);
      if (swiperRef.current) {
         swiperRef.current.slideTo(prevIndex);
      }
   };

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
                        Client&apos;s Talk
                     </h5>
                     <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: 'white' }}>
                        <span style={{ color: '#0f7a95' }}>What Clients Say</span> <span style={{ color: '#000000' }}>About Us</span>
                     </h2>
                     <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">We have added undeniable value to our clients&apos; projects and ensured quantifiable results through our outcome-focused approach, ingenious thinking, and practical innovation. We don&apos;t want you to rely on our word alone. See for yourself what our valuable clients have to say about us and how we helped them succeed.</p>
                  </div>
                  <Swiper 
                     {...setting} 
                     modules={[Autoplay, Pagination]} 
                     className="swiper testimonial__slider wow fadeInDown" 
                     data-wow-delay="00ms"
                     data-wow-duration="1500ms"
                     onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                     }}
                  >
                     {testi_data.map((item, index) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                           <div className="testimonial__item">
                              {item.isVideo ? (
                                 <div className="video-testimonial">
                                    <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                                       <iframe
                                          src={item.videoUrl}
                                          title="Client Testimonial"
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             width: '100%',
                                             height: '100%',
                                             border: 'none'
                                          }}
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                       ></iframe>
                                       {/* Play Button Overlay */}
                                       <div 
                                          className="play-button-overlay"
                                          style={{
                                             position: 'absolute',
                                             top: '50%',
                                             left: '50%',
                                             transform: 'translate(-50%, -50%)',
                                             zIndex: 10,
                                             cursor: 'pointer',
                                             background: 'rgba(0, 0, 0, 0.3)',
                                             borderRadius: '50%',
                                             width: '80px',
                                             height: '80px',
                                             display: 'flex',
                                             alignItems: 'center',
                                             justifyContent: 'center',
                                             transition: 'all 0.3s ease'
                                          }}
                                          onMouseEnter={(e) => {
                                             e.currentTarget.style.background = 'rgba(15, 122, 149, 0.4)';
                                             e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                                          }}
                                          onMouseLeave={(e) => {
                                             e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
                                             e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                                          }}
                                          onClick={() => handleVideoPlay(index)}
                                       >
                                          <i 
                                             className="fa-solid fa-play" 
                                             style={{ 
                                                color: 'white', 
                                                fontSize: '24px',
                                                marginLeft: '4px'
                                             }}
                                          ></i>
                                       </div>
                                    </div>
                                 </div>
                              ) : (
                                 <>
                                    <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                                          fill="#0f7a95" />
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
                                 </>
                              )}
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  <div className="testimonial__dot mt-40 wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms"></div>
               </div>
            </div>
         </div>

         {/* Video Popup Modal */}
         {isVideoPopupOpen && (
            <div 
               className="video-popup-overlay"
               style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  zIndex: 9998,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px'
               }}
               onClick={handleCloseVideo}
            >
               <div 
                  className="video-popup-content"
                  style={{
                     position: 'relative',
                     width: '90%',
                     maxWidth: '800px',
                     backgroundColor: '#000',
                     borderRadius: '8px',
                     overflow: 'hidden'
                  }}
                  onClick={(e) => e.stopPropagation()}
               >
                  {/* Close Button */}
                  <button
                     onClick={handleCloseVideo}
                     style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        border: 'none',
                        color: 'white',
                        fontSize: '24px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                  >
                     ×
                  </button>

                  {/* Navigation Buttons */}
                  <button
                     onClick={handlePrevVideo}
                     style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(15, 122, 149, 0.8)',
                        border: 'none',
                        color: 'white',
                        fontSize: '18px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                  >
                     ‹
                  </button>

                  <button
                     onClick={handleNextVideo}
                     style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(15, 122, 149, 0.8)',
                        border: 'none',
                        color: 'white',
                        fontSize: '18px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}
                  >
                     ›
                  </button>

                  {/* Video Container */}
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                     <iframe
                        src={testi_data[currentVideoIndex].videoUrl}
                        title="Client Testimonial"
                        style={{
                           position: 'absolute',
                           top: 0,
                           left: 0,
                           width: '100%',
                           height: '100%',
                           border: 'none'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </div>

                  {/* Video Info */}
                  <div style={{ padding: '20px', backgroundColor: '#111', color: 'white' }}>
                     <h4 style={{ margin: '0 0 10px 0', color: '#0f7a95' }}>
                        {testi_data[currentVideoIndex].name}
                     </h4>
                     <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
                        {testi_data[currentVideoIndex].designation}
                     </p>
                     <div style={{ marginTop: '10px', fontSize: '12px', opacity: 0.6 }}>
                        Video {currentVideoIndex + 1} of {testi_data.length}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </section>
   )
}

export default Testimonial
