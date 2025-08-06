"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Case_data from '@/data/CaseData';
import service_data from "@/data/ServiceData";
import project_data from "@/data/ProjectData";

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

// Custom Software Development Section Component
const CustomSoftwareSection = () => {
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
                                <span style={{ color: '#0f7a95' }}>Custom Software Development</span> Brings Value to Your Business Solution
                            </h2>
                            <div className="text-content wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#333'
                            }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Welcome to iFour, your trusted partner for custom software development services in Australia. As a Microsoft Solutions Partner, we bring a wealth of expertise and credibility to every project we undertake. With over 10 years of market experience, we have honed our skills and perfected our craft, making us a reliable choice for businesses seeking top-notch software solutions.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Our team consists of over 120 veteran professionals who are passionate about creating innovative and tailor-made software that propels businesses forward in the ever-changing digital landscape.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    We understand the importance of local understanding and global expertise, ensuring that our solutions not only meet your unique needs but also align with industry best practices. When you choose iFour, you can expect exceptional results that drive growth and set your business apart from the competition. Trust us to be your technology partner on the path to success.
                                </p>
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
                                    <span style={{ color: '#0f7a95' }}>Why Choose iFour?</span> 
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    At iFour, we have in-depth knowledge of the Australian market, allowing us to deliver solutions that resonate with your target audience. We combine this local understanding with our global expertise, staying up-to-date with industry trends and technologies to ensure your software meets global standards. Given below are the reasons to choose iFour.
                                </p>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>1.</span>
                                    Local Understanding, Global Expertise
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>2.</span>
                                    Tailored Solutions for Your Business
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>3.</span>
                                    120+ veteran professionals
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>4.</span>
                                    Certified Microsoft Solutions Partner
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>5.</span>
                                    Full-Cycle Development Services
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>6.</span>
                                    Expertise Across Industries
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>7.</span>
                                    Quality Assurance and Security
                                </li>
                                <li style={{ marginBottom: '12px', color: '#ffffff' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '12px', fontWeight: 'bold' }}>8.</span>
                                    Transparent Communication and Timely Delivery
                                </li>
                              </ul>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#ffffff', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                                Ready to unlock the full potential of your business with custom software development? Contact iFour today to discuss your project requirements. Our team of experts is eager to collaborate with you, understand your vision, and deliver a software solution that drives innovation and growth in your industry. Let us be your trusted technology partner on your digital transformation journey.
                            </p>
                           </div>
                              </div>
                           </div>
                        </div>
        </section>
    );
};

// Service Cards Section Component
const ServiceCardsSection = () => {
    return (
        <section id="service-section" className="service-area pt-120 pb-160">
            <div className="service__shape wow slideInRight">
                <Image className="sway_Y__animation" src={shape_1} alt="shape" />
            </div>
            <div className="container">
                <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper service__slider">
                    {service_data.filter((items: any) => items.page === "home_1").map((item: any) => (
                        <SwiperSlide key={item.id} className="swiper-slide">
                            <div className="service__item" style={{
                                backgroundColor: 'rgba(15, 122, 149, 0.15)',
                                borderRadius: '5px',
                                padding: '20px 20px 50px 20px',
                                transition: 'all 0.3s ease-in-out',
                                border: '1px solid rgba(15, 122, 149, 0.2)',
                                boxShadow: '0 2px 10px rgba(15, 122, 149, 0.1)',
                                height: '320px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                            }}>
                                <div className="service__icon">
                                    <Image src={item.icon} alt="icon" />
                                </div>
                                <h4><Link href="/service-details">{item.title}</Link></h4>
                                <p style={{ flex: '1' }}>{item.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="service__navigation wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <button className="arry-prev service__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                    <div className="service__dot"></div>
                    <button className="arry-next service__arry-next active"><i className="fa-light fa-chevron-right"></i></button>
                </div>
            </div>
        </section>
    );
};

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
                                Looking for reliable bespoke software development solutions?
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
                              objectFit: 'contain',
                              borderRadius: '0',
                              transition: 'all 0.3s ease',
                              transform: 'translateZ(0px)',
                              maxWidth: '92px',
                              maxHeight: '92px'
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
                           padding: '22px 14px',
                           border: '1px solid rgba(0, 0, 0, 0.1)',
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
                              objectFit: 'contain',
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
                                <span style={{ color: '#0f7a95' }}>Our Custom Software Services</span>
                                 </h2>
                                                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                As an Australian-based software development company, we understand the unique needs and challenges faced by businesses in Australia. Our bespoke software development services are designed to help you overcome these challenges and achieve your business objectives. Our custom software services can assist you with
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: '15px' }}>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>1.</span>
                                    Product development
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>2.</span>
                                    Web application development
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>3.</span>
                                    Client-server applications
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>4.</span>
                                    Cloud application development
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>5.</span>
                                    Business line solutions
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>6.</span>
                                    Database Design & Management
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>7.</span>
                                     Internet or intranet applications
                                </li>
                                <li style={{ marginBottom: '8px', color: '#333', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#0f7a95', marginRight: '8px', fontSize: '12px', fontWeight: 'bold' }}>8.</span>
                                    Software or web maintenance
                                </li>
                            </ul>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{ color: '#333', width: '100%', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '20px' }}>
                                Contact us today to discuss how we can create a tailored software solution to drive innovation and growth for your organization.
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
            <CustomSoftwareSection />
            
            {/* Benefits Section */}
            <BenefitsSection />
            
            {/* About Section */}
            <AboutSection />
            
            {/* Service Cards Section */}
            <ServiceCardsSection />
            
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
