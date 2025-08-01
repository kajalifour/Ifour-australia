"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import Case_data from '@/data/CaseData';

import shape_1 from "@/assets/images/icon/section-title.png"
import about_thumb1 from "@/assets/images/about/about-two-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-two-image2.png"
import shape_2 from "@/assets/images/shape/about-two-dot.png"
import shape_3 from "@/assets/images/shape/about-circle-helper.png"
import shape_4 from "@/assets/images/shape/about-two-circle.png"
import about_thumb3 from "@/assets/images/about/about-image1.jpg"
import about_thumb4 from "@/assets/images/about/about-image2.png"
import shape_5 from "@/assets/images/shape/about-line.png"
import shape_6 from "@/assets/images/shape/about-circle.png"

const setting = {
   slidesPerView: 4,
   spaceBetween: 24,
   loop: true,
   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".case__dot",
      clickable: true,
   },
   navigation: false,
   breakpoints: {
      '1440': {
         slidesPerView: 4,
      },
      '992': {
         slidesPerView: 3,
      },
      '575': {
         slidesPerView: 2,
      },
      '320': {
         slidesPerView: 1,
      },
   },
};

const Case = () => {
   return (
      <>
         <section id="success-section" className="about-two-area pt-120 pb-120" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)' }}>
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                    
                        <div className="about-two__left-item" style={{ marginTop: '60px' }}>
                        <div className="dots">
                           <Image className="sway_Y__animation" src={shape_2} alt="shape" />
                        </div>
                        <div className="shape-halper">
                           <Image className="sway__animation" src={shape_3} alt="shape" />
                        </div>
                        <div className="image big-image">
                           <Image src={about_thumb1} alt="image" />
                        </div>
                        <div className="image sm-image">
                           <Image src={about_thumb2} alt="image" />
                        </div>
                        <div className="circle-shape">
                           <Image className="animation__rotate" src={shape_4} alt="shape" />
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="section-header mb-40">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                           <Image className="me-1" src={shape_1} alt="icon" />
                           WHO WE ARE
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                           <span style={{ color: '#0f7a95' }}>Benefits of Working with</span> iFour Technolab
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                           When you choose iFour Technolab as your software development partner, you not only get a partner devoted to your success but also become entitled to receive several benefits. Here are a few outlined:
                        </p>
                     </div>
                     <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              Fast project kickoff
                           </li>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              Fully Tailored Solutions
                           </li>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              Agile development approaches
                           </li>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              Flexible hiring models
                           </li>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              High data security
                           </li>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              100% IP rights and ownership
                           </li>
                           <li style={{ marginBottom: '15px', color: '#ffffff' }}>
                              <i className="fa-solid fa-circle" style={{ color: '#0f7a95', marginRight: '10px', fontSize: '8px' }}></i>
                              Client satisfaction
                           </li>
                        </ul>
                     </div>
                     <div className="about__info mt-50 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <Link href="/about" className="btn-one">
                           Let's Get Started <i className="fa-regular fa-arrow-right-long"></i>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* A Software Development Company You Can Trust Section */}
         <section id="about-section" className="about-area sub-bg pt-120 pb-120">
            <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
               <Image src={shape_5} alt="shape" />
            </div>
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="section-header mb-40">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <Image className="me-1" src={shape_1} alt="icon" />
                           ABOUT iFour Technolab
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <span style={{ color: '#0f7a95' }}>Why Choose Us as Your</span> Software Development Agency?
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                           At iFour Technolab, what differentiates us from others is our steadfast dedication to innovation and making sustainable success a goal that our clients can easily achieve. With our focus set on this objective, we deliver value-driven solutions and services to clients that act as catalysts for long-term prosperity. Our highlights include:
                        </p>
                     </div>
                  </div>
                  <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="about__left-item">
                        <div className="image big-image">
                           <Image src={about_thumb3} alt="image" />
                        </div>
                        <div className="image sm-image">
                           <Image src={about_thumb4} alt="image" />
                        </div>
                        <div className="circle-shape">
                           <Image src={shape_6} alt="shape" />
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="row g-4 mt-4">
                  <div className="col-xl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="feature-item" style={{ padding: '2px' }}>
                        <div className="d-flex align-items-start">
                           <div className="icon me-3">
                              <i className="fa-solid fa-users-gear" style={{ fontSize: '48px', color: '#0f7a95' }}></i>
                           </div>
                           <div className="content">
                              <h4 className="mb-3" style={{ color: '#0f7a95', fontWeight: '600' }}>Expert Team</h4>
                              <p>We have assembled a team of 120+ veteran software developers capable of building top-grade bespoke software solutions based on your specifications.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                     <div className="feature-item" style={{ padding: '2px' }}>
                        <div className="d-flex align-items-start">
                           <div className="icon me-3">
                              <i className="fa-solid fa-headset" style={{ fontSize: '48px', color: '#0f7a95' }}></i>
                           </div>
                           <div className="content">
                              <h4 className="mb-3" style={{ color: '#0f7a95', fontWeight: '600' }}>Round-the-Clock Support</h4>
                              <p>We have a diligent tech support team that is always available for hands-on support, responds to client questions and queries, and addresses them.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                     <div className="feature-item" style={{ padding: '2px' }}>
                        <div className="d-flex align-items-start">
                           <div className="icon me-3">
                              <i className="fa-solid fa-microchip" style={{ fontSize: '48px', color: '#0f7a95' }}></i>
                           </div>
                           <div className="content">
                              <h4 className="mb-3" style={{ color: '#0f7a95', fontWeight: '600' }}>Modern Tech Expertise</h4>
                              <p>We remain on the cutting edge of technology, adopting new trends and advancements as they unfold. This up-to-date knowledge and our extensive industry expertise enable us to build unique solutions.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Case
