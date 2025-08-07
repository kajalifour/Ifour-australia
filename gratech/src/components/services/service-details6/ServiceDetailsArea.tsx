"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Case_data from '@/data/CaseData';
// import serviceData7 from "@/data/ServiceData7";
import project_data from "@/data/ProjectData";
import bolg_data from "@/data/BlogData";

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
import blog_image3 from "@/assets/images/blog/blog-image3.jpg"

// Client logos imports
import client1 from "@/assets/images/brand/brand-image6.webp"
import client2 from "@/assets/images/brand/brand-image7.webp"
import client3 from "@/assets/images/brand/brand-image8.webp"
import client4 from "@/assets/images/brand/brand-image-9.webp"
import client5 from "@/assets/images/brand/brand-image-10.webp"

// Agile process image
import agileProcess from "@/assets/images/project/process_iFour.webp"

// Technology images
const tech_1 = "/assets/images/technologies/tech-image-01.png"
const tech_2 = "/assets/images/technologies/tech-image-02.png"
const tech_3 = "/assets/images/technologies/tech-image-03.png"
const tech_4 = "/assets/images/technologies/tech-image-04.png"
const tech_5 = "/assets/images/technologies/tech-image-05.png"
const tech_6 = "/assets/images/technologies/tech-image-06.webp"
const tech_7 = "/assets/images/technologies/tech-image-07.png"
const tech_8 = "/assets/images/technologies/tech-image-08.png"
const tech_9 = "/assets/images/technologies/tech-image-09.png"
const tech_10 = "/assets/images/technologies/tech-image-10.png"

// Media coverage images
const media_1 = "/assets/images/logo/mediacoverage-1.webp"
const media_2 = "/assets/images/logo/mediacoverage-2.webp"
const media_3 = "/assets/images/logo/mediacoverage-3.webp"
const media_4 = "/assets/images/logo/mediacoverage-4.webp"
const media_5 = "/assets/images/logo/mediacoverage-5.webp"
const media_6 = "/assets/images/logo/mediacoverage-6.webp"
const media_7 = "/assets/images/logo/mediacoverage-7.webp"
const media_8 = "/assets/images/logo/mediacoverage-8.webp"
const media_9 = "/assets/images/logo/mediacoverage-9.webp"
const media_10 = "/assets/images/logo/mediacoverage-10.webp"
const media_11 = "/assets/images/logo/mediacoverage-11.webp"
const media_12 = "/assets/images/logo/mediacoverage-12.webp"
const media_13 = "/assets/images/logo/mediacoverage-13.webp"
const media_14 = "/assets/images/logo/mediacoverage-14.webp"
const media_15 = "/assets/images/logo/mediacoverage-15.webp"

// Testimonial data
import avatar_1 from "@/assets/images/testimonial/testimonial-image1.png"
import avatar_2 from "@/assets/images/testimonial/testimonial-image2.png"

interface TestimonialDataType {
   id: number;
   avatar: any;
   name: string;
   designation: string;
   desc: any;
   isVideo?: boolean;
   videoUrl?: string;
}

const testi_data: TestimonialDataType[] = [
   {
      id: 1,
      avatar: avatar_1,
      name: "John Schenk",
      designation: "President - John Schenk & Associates, LLC",
      desc: (<>""</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/itCyHAtz9ps"
   },
   {
      id: 2,
      avatar: avatar_2,
      name: "Gavin Kretzschmar",
      designation: "Dean and Professor ISE-LSE - Kazakhstan & London",
      desc: (<>""</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/KYgzAEupZak"
   },
   {
      id: 3,
      avatar: avatar_1,
      name: "Carlos Hernandez",
      designation: "Chief Executive Officer - Abstrax Labs",
      desc: (<>""</>),
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/1qgWVsv4yw0"
   },
];



const setting = {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".service__dot",
      clickable: true,
   },
   navigation: {
      nextEl: ".service__arry-next",
      prevEl: ".service__arry-prev",
   },
};

// Desktop Application Development  Section Component
const DesktopApplicationSection = () => {
    return (
        <section className="pt-120 pb-120" style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
            margin: '0 150px',
            paddingTop: '50px',
            paddingBottom: '50px'
        }}>
            <div className="container-fluid">
                <div className="row g-4 align-items-center">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="image-container" style={{ 
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <Image 
                                src={blog_image3} 
                                alt="Custom Software Development" 
                                style={{
                                    width: '110%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    maxWidth: '550px'
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="content-section">
                            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
                                fontSize: '2.5rem',
                                lineHeight: '1.2',
                                marginBottom: '1.5rem',
                                fontWeight: '700'
                            }}>
                                <span style={{ color: '#0f7a95' }}>Blockchain Consulting Services Australia</span> 
                            </h2>
                            <div className="text-content wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#333'
                            }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                               As the technology landscape continues to evolve, Blockchain has emerged as a transformative force, revolutionizing various industries. At iFour, we leverage our expertise in Blockchain development to help businesses harness the power of this decentralized technology and unlock new opportunities for growth and innovation. </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                               iFour Technolab is a Microsoft Certified Solutions Partner with 5+SCRUM masters and over 120 veteran professionals who are passionate about creating innovative blockchain solutions that provide security and propel businesses forward in the ever-changing digital landscape.</p>
                                <p style={{ marginBottom: '1.5rem' }}>
                               We can help you with personalized blockchain solutions adapted to your specific needs since we have decades of expertise in the IT business and thorough awareness of satisfying client expectations.
 </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                               We recognize the value of local knowledge and impeccable expertise in ensuring that our solutions are in line with industry best practices and your organizational requirements.</p>                        
                             <p style={{ marginBottom: '1.5rem' }}>
                              When you work with iFour, you can anticipate remarkable outcomes that will propel your company forward and set it apart from the competition. You can rely on us to be your technology partner on the road to success.</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Benefits Section Component
const BenefitsSection = () => {
   return (
        <section id="success-section" className="about-two-area" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)', paddingTop: '50px', paddingBottom: '20px' }}>
            <div className="container">
               <div className="row g-4">
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-two__left-item" style={{ marginLeft: '30px', marginTop: '200px', transform: 'scale(1.3)', transformOrigin: 'center center' }}>
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
                        <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ marginRight: '0', transform: 'none', paddingLeft: '20px', paddingRight: '10px' }}>
                            <div className="section-header mb-30">
                                <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                                    <Image className="me-1" src={shape_1} alt="icon" />
                                    WHO WE ARE
                                </h5>
                                <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95' }}>Why Blockchain technology?</span> 
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8' }}>
                 Most individuals believe that Blockchain and cryptocurrency are interchangeable. However, it is not true. A cryptocurrency is a form of application that uses Blockchain technology. So, avoid confusing Blockchain for Cryptocurrency. Bitcoin is a popular example of cryptocurrency. Because of the numerous benefits offered by Blockchain, the entire globe is rushing to adopt this technology. Some key benefits of Blockchain include: </p>                          
                                  </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>1.</span>
                                      Enhanced Security and reduced fraud.
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>2.</span>
                                    Transparency and Trust with a shared view
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>3.</span>
                                      Improved Efficiency and Cost Savings
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>4.</span>
                                    Self-executing agreements and no intermediaries
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>5.</span>
                                     Traceability and Supply Chain Optimization
                                </li>
                              </ul>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                                Ready to unlock your business potential with Blockchain development? Contact iFour today to discuss your project requirements. Our dedicated team is eager to work with you, understand your vision, and create a software solution that fosters innovation and success in your sector. Allow us to be your trusted technology partner on your digital transformation journey.
                            </p>
                           </div>
                              </div>
                           </div>
                        </div>
        </section>
    );
};

// // Service Cards Section Component
// const ServiceCardsSection = () => {
//     return (
//         <section id="service-section" className="service-area pt-120 pb-160">
//             <div className="service__shape wow slideInRight">
//                 <Image className="sway_Y__animation" src={shape_1} alt="shape" />
//             </div>
//             <div className="container">
//                 <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper service__slider">
//                     {serviceData7.filter((items: any) => items.page === "home_1").map((item: any) => (
//                         <SwiperSlide key={item.id} className="swiper-slide">
//                             <div className="service__item" style={{
//                                 backgroundColor: 'rgba(15, 122, 149, 0.15)',
//                                 borderRadius: '5px',
//                                 padding: '20px 20px 50px 20px',
//                                 transition: 'all 0.3s ease-in-out',
//                                 border: '1px solid rgba(15, 122, 149, 0.2)',
//                                 boxShadow: '0 2px 10px rgba(15, 122, 149, 0.1)',
//                                 height: '320px',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 justifyContent: 'flex-start'
//                             }}>
//                                 <div className="service__icon">
//                                     <Image src={item.icon} alt="icon" />
//                                 </div>
//                                 <h4><Link href="/service-details">{item.title}</Link></h4>
//                                 <p style={{ flex: '1' }}>{item.desc}</p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//                 <div className="service__navigation wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
//                     <button className="arry-prev service__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
//                     <div className="service__dot"></div>
//                     <button className="arry-next service__arry-next active"><i className="fa-light fa-chevron-right"></i></button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// CTA Section Component
const CTASection = () => {
    return (
        <section className="cta-area pt-96 pb-96" style={{ 
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
            textAlign: 'center',
            marginBottom: '70px'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="cta-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{
                            paddingTop: '15px'
                        }}>
                            <h2 style={{ 
                                color: '#1a237e', 
                                fontSize: '2rem', 
                                fontWeight: '600', 
                                marginBottom: '2rem',
                                lineHeight: '1.3'
                            }}>
                                Hire our Blockchain developers to turn your vision into reality.
                            </h2>
                            <Link href="/contact" className="btn btn-primary" style={{
                                backgroundColor: '#0f7a95',
                                borderColor: '#0f7a95',
                                color: '#ffffff',
                                padding: '15px 40px',
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'all 0.3s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                marginBottom: '30px'
                            }}>
                                GET STARTED NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Project Section Component
const ProjectSection = () => {
    // Get project data
    const project_items = project_data.filter((items: any) => items.page === "home_1");

    return (
        <section id="project-section" className="service-area pt-120 pb-120" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)', paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="container">
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                    <div className="section-header">
                        <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                            <span style={{ color: '#0f7a95' }}>Our</span> Project
                        </h2>
                    </div>
                </div>
                <div className="row g-4">
                    {project_items.map((item: any) => (
                        <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="project__item position-relative overflow-hidden rounded-3 project-hover-container" style={{ height: '300px' }}>
                                <div className="project__image w-100 h-100">
                                    <Image src={item.image} alt={item.title} fill className="object-fit-cover" />
                                </div>
                                <div className="project__overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4" 
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(12, 121, 147, 0.9), rgba(15, 121, 147, 0.9), rgba(17, 19, 20, 0.9))',
                                        transform: 'translateY(-100%)',
                                        transition: 'transform 0.3s ease-in-out',
                                        cursor: 'pointer',
                                        boxShadow: '0 0 25px rgba(15, 122, 149, 0.4)'
                                    }}>
                                    <h4 className="text-white mb-3 fw-bold fs-4">{item.title}</h4>
                                    <p className="text-white mb-0 fs-6 lh-base">{item.desc}</p>
                                </div>
                                <style jsx>{`
                                    .project-hover-container:hover .project__overlay {
                                        transform: translateY(0%) !important;
                                    }
                                `}</style>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Client data
interface ClientType {
   id: number;
   logo: any;
   name: string;
}

const client_data: ClientType[] = [
   {
      id: 1,
      logo: client1,
      name: "Spearity™"
   },
   {
      id: 2,
      logo: client2,
      name: "Taglogic"
   },
   {
      id: 3,
      logo: client3,
      name: "Manning Audiology"
   },
   {
      id: 4,
      logo: client4,
      name: "Greater Dandenong Bookkeeping Services"
   },
   {
      id: 5,
      logo: client5,
      name: "WGE EQUIPMENT SOLUTIONS"
   },
];

const repeated_client_data = [...client_data, ...client_data];

// Technology data
const tech_data = [
  { id: 1, icon: tech_1 },
  { id: 2, icon: tech_2 },
  { id: 3, icon: tech_3 },
  { id: 4, icon: tech_4 },
  { id: 5, icon: tech_5 },
  { id: 6, icon: tech_6 },
  { id: 7, icon: tech_7 },
  { id: 8, icon: tech_8 },
  { id: 9, icon: tech_9 },
  { id: 10, icon: tech_10 }
];

// Media coverage data
const media_data = [
  { id: 1, icon: media_1 },
  { id: 2, icon: media_2 },
  { id: 3, icon: media_3 },
  { id: 4, icon: media_4 },
  { id: 5, icon: media_5 },
  { id: 6, icon: media_6 },
  { id: 7, icon: media_7 },
  { id: 8, icon: media_8 },
  { id: 9, icon: media_9 },
  { id: 10, icon: media_10 },
  { id: 11, icon: media_11 },
  { id: 12, icon: media_12 },
  { id: 13, icon: media_13 },
  { id: 14, icon: media_14 },
  { id: 15, icon: media_15 }
];

const client_setting = {
   slidesPerView: 5,
   spaceBetween: 30,
   loop: true,
   autoplay: {
     delay: 2000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".clients__dot",
      clickable: true,
   },
   navigation: {
      nextEl: ".clients__arry-next",
      prevEl: ".clients__arry-prev",
   },
   breakpoints: {
     1200: { slidesPerView: 5 },
     992: { slidesPerView: 4 },
     768: { slidesPerView: 3 },
     575: { slidesPerView: 2 },
     480: { slidesPerView: 1 },
   },
};

// Testimonial swiper settings
const testimonial_setting = {
   slidesPerView: 1,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".testimonial__dot",
      clickable: true,
      type: "bullets" as const,
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
   },
   navigation: {
      nextEl: ".testimonial__arry-next",
      prevEl: ".testimonial__arry-prev",
   },
   allowTouchMove: true,
   grabCursor: true,
   resistance: true,
   resistanceRatio: 0.85,
   mousewheel: true,
   keyboard: true,
};

// Clients Section Component
const ClientsSection = () => {
   return (
      <section className="clients-area pt-120 pb-120">
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_1} alt="icon" />
                     OUR CLIENTS
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">Clients We've Served Thus Far</h2>
               </div>
            </div>
            <Swiper {...client_setting} modules={[Autoplay, Navigation, Pagination]} className="swiper clients__slider">
                  {repeated_client_data.map((item, index) => (
                     <SwiperSlide key={`${item.id}-${index}`} className="swiper-slide">
                     <div className="clients__item">
                        <Image src={item.logo} alt={item.name} />
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="clients__navigation wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
               <button className="arry-prev clients__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
               <div className="clients__dot"></div>
               <button className="arry-next clients__arry-next active"><i className="fa-light fa-chevron-right"></i></button>
            </div>
         </div>
      </section>
   );
};

// Agile Approach Section Component
const AgileApproachSection = () => {
    return (
        <section className="agile-approach-area pt-120 pb-120" style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)'
        }}>
            <div className="container">
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                    <div className="section-header">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <Image className="me-1" src={shape_1} alt="icon" />
                            OUR APPROACH
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <span style={{ color: '#0f7a95' }}>Our Agile</span> Approach
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="agile-process-image wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" 
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                borderRadius: '0',
                                padding: '5px',
                                border: '1px solid rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                backdropFilter: 'blur(10px)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#0f7a95';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(15, 122, 149, 0.25)';
                                e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                            }}>
                            <Image 
                                src={agileProcess} 
                                alt="Our Agile Approach Process" 
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    borderRadius: '0',
                                    transition: 'all 0.3s ease',
                                    transform: 'translateZ(0px)',
                                    maxWidth: '100%'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                    e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.style.filter = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Technologies Section Component
const TechnologiesSection = () => {
   return (
      <section className="technologies-area pt-120 pb-80" style={{ backgroundColor: '#ffffff' }}>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_1} alt="icon" />
                     Tech Talent
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Technologies</span> We Utilise
                  </h2>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {tech_data.map((tech, index) => (
                  <div key={tech.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" style={{ maxWidth: '20%' }}>
                     <div className="technology__item text-center wow fadeInUp" 
                        data-wow-delay={`${index * 100}ms`} 
                        data-wow-duration="1500ms"
                        style={{
                           backgroundColor: 'rgba(0, 0, 0, 0.05)',
                           borderRadius: '0',
                           padding: '5px',
                           border: '1px solid rgba(0, 0, 0, 0.1)',
                           transition: 'all 0.3s ease',
                           height: '102px',
                           backdropFilter: 'blur(10px)',
                           transform: 'perspective(1000px) rotateX(0deg)',
                           transformStyle: 'preserve-3d',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(-3deg) translateZ(15px)';
                        e.currentTarget.style.borderColor = '#0f7a95';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(15, 122, 149, 0.25)';
                        e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateZ(0px)';
                           e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                           e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                        }}>
                        <img
                           src={tech.icon} 
                           alt="technology" 
                           style={{ 
                              width: '100%',
                              height: '100%',
                              objectFit: 'fill',
                              borderRadius: '0',
                              transition: 'all 0.3s ease',
                              transform: 'translateZ(0px)',
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateZ(8px) scale(1.05)';
                           e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateZ(0px) scale(1)';
                           e.currentTarget.style.filter = 'none';
                           }}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
};

// Media Coverage Section Component
const MediaCoverageSection = () => {
   return (
      <section className="media-coverage-area pt-120 pb-80" style={{ background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)', marginBottom: '0' }}>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                     <Image className="me-1" src={shape_1} alt="icon" />
                     Press & Media
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                     <span style={{ color: '#0f7a95' }}>Media</span> Coverage
                  </h2>
               </div>
            </div>
            
            <div className="row justify-content-center">
               {media_data.map((media, index) => (
                  <div key={media.id} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4" style={{ maxWidth: '20%' }}>
                     <div className="media__item text-center wow fadeInUp" 
                        data-wow-delay={`${index * 100}ms`} 
                        data-wow-duration="1500ms"
                        style={{
                           backgroundColor: 'rgba(0, 0, 0, 0.05)',
                           borderRadius: '0',
                           padding: '0',
                           border: '0',
                           transition: 'all 0.3s ease',
                           height: '120px',
                           backdropFilter: 'blur(10px)',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-5px)';
                           e.currentTarget.style.borderColor = '#0f7a95';
                           e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 122, 149, 0.2)';
                           e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                           e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                           e.currentTarget.style.boxShadow = 'none';
                           e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                        }}>
                        <img 
                           src={media.icon} 
                           alt="media coverage" 
                           style={{ 
                              width: '100%',
                              height: '100%',
                              objectFit: 'fill',
                              borderRadius: '0',
                              transition: 'filter 0.3s ease'
                           }}
                           onMouseEnter={(e) => {
                              e.currentTarget.style.filter = 'brightness(1.1) contrast(1.1)';
                           }}
                           onMouseLeave={(e) => {
                              e.currentTarget.style.filter = 'none';
                           }}
                        />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
};

// Testimonial Section Component
const TestimonialSection = () => {
   const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
   const swiperRef = useRef<any>(null);

   const handleVideoPlay = (videoIndex: number) => {
      setCurrentVideoIndex(videoIndex);
      setIsVideoPopupOpen(true);
      // Pause the swiper autoplay when popup opens
      if (swiperRef.current) {
         swiperRef.current.autoplay.stop();
      }
      // Pause all background videos
      const iframes = document.querySelectorAll('.video-container iframe');
      iframes.forEach((iframe: any) => {
         if (iframe.src) {
            // Remove autoplay and mute parameters to stop video
            iframe.src = iframe.src.replace(/[?&]autoplay=1/g, '').replace(/[?&]mute=1/g, '');
         }
      });
   };

   const handleCloseVideo = () => {
      setIsVideoPopupOpen(false);
      // Resume the swiper autoplay when popup closes
      if (swiperRef.current) {
         swiperRef.current.autoplay.start();
      }
      // Resume background videos (they will be recreated when swiper slides)
      // The videos will restart when the swiper moves to their slide
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
      <section id="testimonial-section" className="testimonial-area pt-120 pb-120" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)' }}>
         <div className="container">
            <div className="section-header mb-40">
               <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                  <div>
                     <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <Image className="me-1" src={shape_1} alt="icon" />
                        Client's Talk
                     </h5>
                     <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <span style={{ color: '#0f7a95' }}>What Clients Say</span> About Us
                     </h2>
                  </div>
               </div>
               <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">We have added undeniable value to our clients' projects and ensured quantifiable results through our outcome-focused approach, ingenious thinking, and practical innovation. We don't want you to rely on our word alone. See for yourself what our valuable clients have to say about us and how we helped them succeed.</p>
            </div>
            
            <div style={{ width: '50%', margin: '0 auto' }}>
               <Swiper 
                  {...testimonial_setting} 
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
                              <div className="video-container" style={{ position: 'relative', paddingBottom: '42.19%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                                 <iframe
                                    src={`${item.videoUrl}?autoplay=0&mute=1`}
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
            </div>
            <div className="testimonial__navigation wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center', 
               gap: '20px',
               marginTop: '30px' 
            }}>
               <button className="arry-prev testimonial__arry-prev" style={{
                  background: 'none',
                  border: '2px solid #0f7a95',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0f7a95';
                  e.currentTarget.style.color = 'white';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#0f7a95';
               }}>
                  <i className="fa-light fa-chevron-left" style={{ color: 'inherit' }}></i>
               </button>
               <div className="testimonial__dot" style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center'
               }}></div>
               <button className="arry-next testimonial__arry-next active" style={{
                  background: 'none',
                  border: '2px solid #0f7a95',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0f7a95';
                  e.currentTarget.style.color = 'white';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.color = '#0f7a95';
               }}>
                  <i className="fa-light fa-chevron-right" style={{ color: 'inherit' }}></i>
               </button>
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
                     width: '70%',
                     maxWidth: '600px',
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
                  
                  {/* Video Player */}
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
                  
                  {/* Navigation Buttons */}
                  <div style={{
                     position: 'absolute',
                     top: '50%',
                     left: '10px',
                     transform: 'translateY(-50%)',
                     zIndex: 9999
                  }}>
                     <button
                        onClick={handlePrevVideo}
                        style={{
                           background: 'rgba(0, 0, 0, 0.7)',
                           border: 'none',
                           color: 'white',
                           fontSize: '18px',
                           width: '40px',
                           height: '40px',
                           borderRadius: '50%',
                           cursor: 'pointer',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                     >
                        ‹
                     </button>
                  </div>
                  
                  <div style={{
                     position: 'absolute',
                     top: '50%',
                     right: '10px',
                     transform: 'translateY(-50%)',
                     zIndex: 9999
                  }}>
                     <button
                        onClick={handleNextVideo}
                        style={{
                           background: 'rgba(0, 0, 0, 0.7)',
                           border: 'none',
                           color: 'white',
                           fontSize: '18px',
                           width: '40px',
                           height: '40px',
                           borderRadius: '50%',
                           cursor: 'pointer',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center'
                        }}
                     >
                        ›
                     </button>
                  </div>
               </div>
            </div>
         )}
      </section>
   )
};

// Technology Partners Section Component
const TechnologyPartnersSection = () => {
   return (
      <section className="technology-partners-area pt-120 pb-120" style={{ backgroundColor: '#f8f9fa' }}>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_1} alt="icon" />
                     Partnerships
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Our</span> Technology Partners
                  </h2>
               </div>
            </div>
            
            <div className="technology-partners__container wow fadeInUp" 
               data-wow-delay="300ms" 
               data-wow-duration="1500ms"
               style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  padding: '48px 32px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  width: '80%',
                  margin: '0 auto',
                  cursor: 'pointer'
               }}
               onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.15)';
               }}
               onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
               }}>
               
               <img 
                  src="/assets/images/logo/technology partner.webp" 
                  alt="Our Technology Partners" 
                  style={{ 
                     maxWidth: '100%',
                     height: 'auto',
                     objectFit: 'contain',
                     borderRadius: '10px',
                     filter: 'grayscale(100%)',
                     transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.filter = 'grayscale(0%)';
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.filter = 'grayscale(100%)';
                  }}
               />
            </div>
         </div>
      </section>
   )
};

// Blog Section Component
const BlogSection = () => {
   return (
      <section id="blog-section" className="blog-area pt-120 pb-120">
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape_1} alt="icon" />
                  Blog & news
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <span style={{ color: '#0f7a95' }}>Our Latest</span> Insights
               </h2>
               <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ marginTop: '20px', lineHeight: '1.6' }}>
                  We present key insights and knowledge gleaned from the tech landscape in the form of comprehensive blogs. Dive into our latest blogs to stay at the forefront of technology and keep yourself informed.
               </p>
            </div>
            <div className="row g-4">
               {bolg_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                     <div className="blog__item">
                        <Link href="/blog-details" className="blog__image d-block image">
                           <Image src={item.thumb} alt="image" />
                           <div className="blog-tag">
                              <h3 className="text-white">{item.date}</h3>
                              <span className="text-white">{item.month}</span>
                           </div>
                        </Link>
                        <div className="blog__content">
                           <ul className="blog-info pb-20 bor-bottom mb-20">
                              <li>
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M14.5436 5.19275C14.5436 7.69093 12.499 9.7355 10.0008 9.7355C7.50268 9.7355 5.45811 7.69093 5.45811 5.19275C5.45811 2.69457 7.50264 0.65 10.0008 0.65C12.499 0.65 14.5436 2.69458 14.5436 5.19275Z"
                                       stroke="#0f7a95" strokeWidth="1.3" />
                                    <path
                                       d="M18.2644 14.6706C18.1052 14.9458 17.9241 15.2073 17.7169 15.4766L17.7168 15.4765L17.7089 15.4873C17.4204 15.8788 17.0845 16.2373 16.7295 16.5924C16.4326 16.8892 16.0933 17.186 15.7568 17.4385C14.0794 18.6911 12.0622 19.3499 9.97818 19.3499C7.8984 19.3499 5.8851 18.6938 4.2098 17.4461C3.84591 17.1504 3.51371 16.8792 3.2269 16.5924L3.21993 16.5854L3.21276 16.5787C2.85667 16.2436 2.54242 15.8877 2.24749 15.4874L2.24751 15.4873L2.24417 15.4829C2.06196 15.24 1.87324 14.9756 1.71923 14.7169C1.83622 14.4559 1.98458 14.1847 2.14525 13.9526L2.14536 13.9527L2.15288 13.9413C3.06988 12.5556 4.53709 11.6388 6.16646 11.4148L6.18604 11.4121L6.20542 11.4082C6.2309 11.4031 6.29498 11.4117 6.34551 11.4496L6.3455 11.4496L6.34951 11.4525C7.41654 12.2401 8.68633 12.6453 10.0008 12.6453C11.3153 12.6453 12.5851 12.2401 13.6522 11.4525L13.6522 11.4525L13.6562 11.4496C13.6716 11.438 13.7404 11.408 13.8492 11.4167C15.4689 11.6435 16.9121 12.5568 17.8525 13.9468L17.8524 13.9469L17.8564 13.9526C18.0166 14.1839 18.1557 14.4231 18.2644 14.6706Z"
                                       stroke="#0f7a95" strokeWidth="1.3" />
                                 </svg>
                                 <Link href="#0">By Admin</Link>
                              </li>
                              <li>
                                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_615_71)">
                                       <path
                                          d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z"
                                          fill="#0f7a95" />
                                       <path
                                          d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z"
                                          fill="#0f7a95" />
                                       <path
                                          d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z"
                                          fill="#0f7a95" />
                                       <path
                                          d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z"
                                          fill="#0f7a95" />
                                    </g>
                                    <defs>
                                       <clipPath>
                                          <rect width="20" height="20" fill="white" />
                                       </clipPath>
                                    </defs>
                                 </svg>
                                 <Link href="#0">0 Comments</Link>
                              </li>
                           </ul>
                           <h3><Link href="/blog-details" className="primary-hover">{item.title}</Link></h3>
                           <Link className="mt-25 read-more-btn" href="/blog-details">Read More <i
                              className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
};

// About Section Component
const AboutSection = () => {
    return (
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
                            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ marginTop: '70px' }}>
                                <span style={{ color: '#0f7a95' }}>Our Blockchain Development Services</span>
                                 </h2>
                                                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                             As an Australian-based software development company, we understand the unique needs and difficulties that Australian businesses face. Our custom blockchain development services are designed to help you overcome these challenges and achieve your business objectives. Among our offerings are:
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: '15px' }}>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '16px', fontWeight: 'bold' }}>1.</span>
                                    Blockchain consulting
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '16px', fontWeight: 'bold' }}>2.</span>
                                      Smart contract development
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '16px', fontWeight: 'bold' }}>3.</span>
                                   DApps development services
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '16px', fontWeight: 'bold' }}>4.</span>
                                    Cryptocurrency development
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '16px', fontWeight: 'bold' }}>5.</span>
                                   Blockchain integration and Migration
                                </li>
                            </ul>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#333', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px' }}>
                                We prioritize quality and security in every aspect of our Blockchain development process. Our robust development methodologies and adherence to industry standards ensure that your Blockchain solution is reliable, secure, and scalable. Reach out us today to discuss your ideas.
                            </p>
                                 </div>
                              </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about__left-item" style={{ marginTop: '25%' }}>
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
            </div>
         </section>
    );
};

// Main ServiceDetailsArea Component
const ServiceDetailsArea = () => {
    return (
        <>
            {/* Custom Software Development Section */}
            <DesktopApplicationSection />
            
            {/* Benefits Section */}
            <BenefitsSection />
            
            {/* About Section */}
            <AboutSection />
            
            {/* Service Cards Section */}
            {/* <ServiceCardsSection /> */}
            
            {/* CTA Section */}
            <CTASection />
            
            {/* Project Section */}
            <ProjectSection />
            
            {/* Clients Section */}
            <ClientsSection />
            
            {/* Agile Approach Section */}
            <AgileApproachSection />
            
            {/* Technologies Section */}
            <TechnologiesSection />
            
            {/* Media Coverage Section */}
            <MediaCoverageSection />
            
            {/* Gap between Media Coverage and Testimonial */}
            <div style={{ height: '120px', backgroundColor: '#ffffff' }}></div>
            
            {/* Testimonial Section */}
            <TestimonialSection />
            
            {/* Technology Partners Section */}
            <TechnologyPartnersSection />
            
            {/* Blog Section */}
            <BlogSection />
            
            {/* Add more sections here as needed */}
            {/* <BrandSection /> */}
            {/* <TestimonialsSection /> */}
            {/* <ContactSection /> */}
            
            {/* Global CSS for clients slider */}
            <style jsx global>{`
              .swiper-wrapper {
                transition-timing-function: linear !important;
              }
            `}</style>
        </>
    );
};

export default ServiceDetailsArea;
