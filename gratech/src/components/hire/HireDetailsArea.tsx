"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Case_data from '@/data/CaseData';
import project_data from "@/data/ProjectData";
import bolg_data from "@/data/BlogData";
import TestimonialForm from "@/components/forms/TestimonialForm"
import HireGrid from '@/components/hire/HireGrid';
import HireCTA from '@/components/hire/HireCTA';
import HireCTATwo from '@/components/hire/HireCTATwo';
import ServiceTwo from '@/components/hire/ServiceTwo';
import HireAboutSection from '@/components/hire/HireAboutSection';
import IndustryWeServe from '@/components/hire/IndustryWeServe';
import NewsletterSection from '@/components/common/NewsletterSection';
import WhyChooseUsSection from '@/components/technologies/WhyChooseUsSection';

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

interface ServiceDetailsData {
   title: string;
   subtitle?: string;
   description: string;
   benefits: string[];
   services: string[];
   image?: any;
   serviceData?: any[];
   showServiceCards?: boolean;
   showProjects?: boolean;
   showClients?: boolean;
   showTechnologies?: boolean;
   showMediaCoverage?: boolean;
   showTestimonials?: boolean;
   showBlog?: boolean;
   showAgileApproach?: boolean;
   showTechnologyPartners?: boolean;
   showAbout?: boolean;
   aboutData?: {
      title: string;
      subtitle: string;
      description: string;
      additionalInfo?: string;
      image?: any;
      services?: string[];
   };
   benefitsData?: {
      title?: string;
      subtitle?: string;
      description?: string;
      additionalDescription?: string;
      conclusion?: string;
   };
   showServicesGrid?: boolean;
   ctaTitle?: string;
   ctaButtonText?: string;
   ctaButtonLink?: string;
   ctaTwoTitle?: string;
   ctaTwoButtonText?: string;
   ctaTwoButtonLink?: string;
   serviceTwoServices?: string[];
   serviceTwoTitle?: string;
   serviceTwoSubtitle?: string;
       hireAboutSection?: {
      title?: string;
      description?: string;
      hiringOptions?: {
        title: string;
        options: string[];
      };
      hiringProcess?: {
        title: string;
        steps: string[];
      };
    };
    whyChooseUs?: {
      title: string;
      paragraphs: string[];
      ctaText: string;
      ctaLink: string;
      ctaSuffix: string;
    };
}

interface ServiceDetailsAreaProps {
    data: ServiceDetailsData;
    BenefitsSection?: React.ReactNode;
    CTASection?: React.ReactNode;
    isTechnologyPage?: boolean;
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

// Main Service Section Component
const MainServiceSection = ({ data }: { data: ServiceDetailsData }) => {
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
                                src={data.image || blog_image3} 
                                alt={data.title || "Service Image"} 
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
                                <div style={{ color: '#0f7a95', fontWeight: '400' }}>
                                    {data.title.includes('Connect with iFour') ? (
                                        <>
                                            Connect with iFour to<br />
                                            Obtain Exceptional<br />
                                            Results
                                        </>
                                    ) : data.title.includes('Node.js Programmers') ? (
                                        <>
                                            Hire Node.js Programmers to<br />
                                            Build Robust Back-end<br />
                                            Solutions
                                        </>
                                    ) : data.title.includes('Vue.js Developers to Build') ? (
                                        <>
                                            Hire Vue.js Developers to<br />
                                            Build Interactive Web<br />
                                            Solutions
                                        </>
                                    ) : data.title.includes('C# Developers to Build') ? (
                                        <>
                                            Hire C# Developers to<br />
                                            Build Advanced Digital<br />
                                            Solutions
                                        </>
                                    ) : data.title.includes('WPF Developers to Enhance') ? (
                                        <>
                                            Hire WPF Developers to<br />
                                            Enhance Your System
                                        </>
                                    ) : data.title.includes('Build Custom Solutions') ? (
                                        <>
                                            Build Custom Solutions with<br />
                                            Our Dedicated Java<br />
                                            Developers
                                        </>
                                    ) : data.title.includes('Angular') ? (
                                        <>
                                            Maximize Business Success with<br />
                                            Our Experienced Angular<br />
                                            Developers
                                        </>
                                    ) : (
                                        <>
                                            Maximize Business Success with<br />
                                            Our Experienced .NET<br />
                                            Developers
                                        </>
                                    )}
                                </div>
                            </h2>
                            <div className="text-content wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms" style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#333'
                            }}>
                                {data.description.split('\n\n').map((paragraph, index) => (
                                    <p key={index} style={{ marginBottom: '1.5rem' }}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Benefits Section Component


// About Section Component
const AboutSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showAbout) return null;
    return (
        <section id="about-section" className="about-area sub-bg pt-120 pb-120">
            <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                <Image src={shape_5} alt="shape" width={100} height={100} />
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
                                <span style={{ color: '#0f7a95' }}>{data.aboutData?.title}</span> {data.aboutData?.subtitle}
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                {data.aboutData?.description}
                            </p>
                            {data.aboutData?.services && data.aboutData.services.length > 0 && (
                                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
                                    {data.aboutData.services.map((service, index) => (
                                        <li key={index} style={{ marginBottom: '12px', color: '#333' }}>
                                            <span style={{ color: '#0f7a95', marginRight: '10px', fontSize: '18px', fontWeight: 'bold' }}>{index + 1}.</span>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {data.aboutData?.additionalInfo && (
                                <p className="wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms" style={{ marginTop: '20px' }}>
                                    {data.aboutData.additionalInfo}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about__left-item">
                            <div className="image big-image" style={{ marginTop: '70px' }}>
                                <Image src={data.aboutData?.image || about_thumb3} alt={data.aboutData?.title || "About Image"} width={400} height={300} />
                            </div>
                            <div className="image sm-image" style={{ marginTop: '70px' }}>
                                <Image src={data.aboutData?.image || about_thumb4} alt={data.aboutData?.title || "About Image"} width={300} height={200} />
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

// Service Cards Section Component
const ServiceCardsSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showServiceCards || !data.serviceData) return null;
    
    return (
        <section id="service-section" className="service-area pt-120 pb-160">
            <div className="service__shape wow slideInRight">
                <Image className="sway_Y__animation" src={shape_1} alt="shape" />
            </div>
            <div className="container">
                <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper service__slider">
                    {data.serviceData.filter((items: any) => items.page === "home_1").map((item: any) => (
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
                                    <Image src={item.icon || shape_1} alt={item.title || "Service Icon"} width={60} height={60} />
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



// Project Section Component
const ProjectSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showProjects) return null;
    
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
                                    <Image src={item.image || blog_image3} alt={item.title || "Project Image"} fill className="object-fit-cover" />
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

// Clients Section Component
const ClientsSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showClients) return null;
    
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

   return (
      <section className="clients-area pt-120 pb-120" style={{ marginTop: '70px' }}>
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
const AgileApproachSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showAgileApproach) return null;
    
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
const TechnologiesSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showTechnologies) return null;
    
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
                                    backgroundColor: 'transparent',
                                    borderRadius: '0',
                                    padding: '0px',
                                    border: 'none',
                                    transition: 'all 0.3s ease',
                                    height: '102px',
                                    transform: 'perspective(1000px) rotateX(0deg)',
                                    transformStyle: 'preserve-3d',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(-3deg) translateZ(15px)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(15, 122, 149, 0.25)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) translateZ(0px)';
                                    e.currentTarget.style.boxShadow = 'none';
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
    );
};

// Media Coverage Section Component
const MediaCoverageSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showMediaCoverage) return null;
    
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

    return (
        <section className="media-coverage-area pt-120 pb-80" style={{ background: '#ffffff', marginBottom: '0' }}>
            <div className="container">
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                    <div className="section-header">
                        <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#333333' }}>
                            <Image className="me-1" src={shape_1} alt="icon" />
                            Press & Media
                        </h5>
                        <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#333333' }}>
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
                                    backgroundColor: 'rgba(15, 122, 149, 0.05)',
                                    borderRadius: '8px',
                                    padding: '22px 14px',
                                    border: '1px solid rgba(15, 122, 149, 0.1)',
                                    transition: 'all 0.3s ease',
                                    height: '120px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.borderColor = '#0f7a95';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(15, 122, 149, 0.2)';
                                    e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(15, 122, 149, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.05)';
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
    );
};

// Testimonial Section Component
const TestimonialSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showTestimonials) return null;
    
    const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    const handleVideoPlay = (videoIndex: number) => {
        setCurrentVideoIndex(videoIndex);
        setIsVideoPopupOpen(true);
        if (swiperRef.current) {
            swiperRef.current.autoplay.stop();
        }
    };

    const handleCloseVideo = () => {
        setIsVideoPopupOpen(false);
        if (swiperRef.current) {
            swiperRef.current.autoplay.start();
        }
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
        },
        navigation: false,
        allowTouchMove: true,
        grabCursor: true,
        resistance: true,
        resistanceRatio: 0.85,
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
                                Client's Talk
                            </h5>
                            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: 'white' }}>
                                <span style={{ color: '#0f7a95' }}>What Clients Say</span> <span style={{ color: '#000000' }}>About Us</span>
                            </h2>
                            <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">We have added undeniable value to our clients' projects and ensured quantifiable results through our outcome-focused approach, ingenious thinking, and practical innovation. We don't want you to rely on our word alone. See for yourself what our valuable clients have to say about us and how we helped them succeed.</p>
                        </div>
                        
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
                                                <svg className="coma" width="50" height="37" viewBox="0 0 50 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z" fill="#0f7a95" />
                                                </svg>
                                                <div className="d-flex align-items-center gap-3">
                                                    <Image src={item.avatar} alt="image" width={50} height={50} />
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
                <div className="video-popup-overlay" 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={handleCloseVideo}
                >
                    <div className="video-popup-content" 
                        style={{
                            position: 'relative',
                            width: '90%',
                            maxWidth: '800px',
                            height: 'auto'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="close-button"
                            onClick={handleCloseVideo}
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '0',
                                background: 'none',
                                border: 'none',
                                color: 'white',
                                fontSize: '24px',
                                cursor: 'pointer',
                                zIndex: 10000
                            }}
                        >
                            ×
                        </button>
                        <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                            <iframe
                                src={`${testi_data[currentVideoIndex].videoUrl}?autoplay=1&mute=0`}
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
                        <div className="video-navigation" style={{ marginTop: '20px', textAlign: 'center' }}>
                            <button 
                                onClick={handlePrevVideo}
                                style={{
                                    background: '#0f7a95',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    margin: '0 10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Previous
                            </button>
                            <button 
                                onClick={handleNextVideo}
                                style={{
                                    background: '#0f7a95',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    margin: '0 10px',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// Technology Partners Section Component
const TechnologyPartnersSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showTechnologyPartners) return null;
    
    return (
        <section id="technology-partners-section" className="service-area pt-120 pb-120" style={{ background: 'linear-gradient(135deg, #0f7a95 0%, #0a5a6b 50%, #0f7a95 100%)', paddingTop: '50px', paddingBottom: '50px', marginLeft: '150px', marginRight: '150px', marginTop: '70px', marginBottom: '70px' }}>
            <div className="container">
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                    <div className="section-header">
                        <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                            <span style={{ color: '#ffffff' }}>Our</span> Technology Partners
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
                        cursor: 'pointer',
                        borderRadius: '10px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(15, 122, 149, 0.25)';
                        e.currentTarget.style.backgroundColor = 'rgba(15, 122, 149, 0.08)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    }}>
                    <img 
                        src="/assets/images/logo/technology partner.webp" 
                        alt="Our Technology Partners" 
                        style={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            filter: 'grayscale(100%)',
                            transform: 'scale(0.9)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'grayscale(0%) brightness(1.1) contrast(1.1)';
                            e.currentTarget.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'grayscale(100%)';
                            e.currentTarget.style.transform = 'scale(0.9)';
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

// Blog Section Component
const BlogSection = ({ data }: { data: ServiceDetailsData }) => {
    if (!data.showBlog) return null;
    
    return (
        <section id="blog-section" className="blog-two-area pb-120" style={{ background: '#ffffff', marginTop: '20px' }}>
            <div className="container">
                <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                    <div className="section-header">
                        <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#000000' }}>
                            <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.75" y="0.748047" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95"
                                    strokeWidth="1.5" />
                                <mask id="path-2-inside-1_1120_300" fill="white">
                                    <path
                                        d="M3 5.99805C3 3.78891 4.79086 1.99805 7 1.99805H13C15.2091 1.99805 17 3.78891 17 5.99805C17 8.20719 15.2091 9.99805 13 9.99805H7C4.79086 9.99805 3 8.20719 3 5.99805ZM17 5.99805C17 9.03561 14.5376 11.498 11.5 11.498H8.5C5.46243 11.498 3 9.03561 3 5.99805C3 7.37876 4.79086 8.49805 7 8.49805H13C15.2091 8.49805 17 7.37876 17 5.99805ZM3 9.99805V1.99805V9.99805ZM17 1.99805V9.99805V1.99805Z"
                                        fill="#0f7a95" mask="url(#path-2-inside-1_1120_300)" />
                                </mask>
                            </svg>
                            Blog & news
                        </h5>
                        <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ color: '#000000', marginTop: '20px' }}>Explore Blogs and
                            News</h2>
                    </div>
                    <Link href="/blog" className="btn-one wow fadeInUp" data-wow-delay="200ms"
                        data-wow-duration="1500ms">View All
                        News <i className="fa-regular fa-arrow-right-long"></i></Link>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-two__grid-item">
                            <Link href="/blog-details" className="blog__image d-block image">
                                <Image src={bolg_data.filter((items) => items.page === "home_1")[0]?.thumb || bolg_data[0].thumb} alt="Blog Image" width={400} height={300} />
                                <div className="blog-tag">
                                    <h3 className="text-white">{bolg_data.filter((items) => items.page === "home_1")[0]?.date || bolg_data[0].date}</h3>
                                    <span className="text-white">{bolg_data.filter((items) => items.page === "home_1")[0]?.month || bolg_data[0].month}</span>
                                </div>
                            </Link>
                            <div className="blog__content">
                                <ul className="blog-info mb-20">
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_880_270)">
                                                <path
                                                    d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
                                                    fill="#0f7a95" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <Link href="#0">Technology</Link>
                                    </li>
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_615_71)">
                                                <path
                                                    d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z" fill="#0f7a95" />
                                                <path d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z" fill="#0f7a95" />
                                                <path d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z" fill="#0f7a95" />
                                                <path d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z" fill="#0f7a95" />
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
                                <h3><Link href="/blog-details" className="primary-hover">Essential Node.js Interview Questions Every Executive Should Ask When Hiring.</Link></h3>
                                <p className="mt-10"></p>
                                <div className="about__info justify-content-between flex-wrap gap-3 mt-25">
                                    <div className="d-flex gap-2 align-items-center">
                                        <Image src={bolg_data.filter((items) => items.page === "home_1")[0]?.avatar || "/assets/images/blog/admin1.png"} alt="Blog Author" width={50} height={50} />
                                        <div className="info">
                                            <Link href="#" className="primary-color">By Admin</Link>
                                            <h5>{bolg_data.filter((items) => items.page === "home_1")[0]?.name || "Alex Rony"}</h5>
                                        </div>
                                    </div>
                                    <Link href="/blog-details" className="btn-one">Read More <i
                                        className="fa-regular fa-arrow-right-long"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        {bolg_data.filter((items) => items.page === "home_1").slice(1, 3).map((item) => (
                            <div key={item.id} className="blog-two__list-item mb-30 wow fadeInUp" data-wow-delay="00ms"
                                data-wow-duration="1500ms">
                                <Link href="/blog-details" className="blog__image d-block image">
                                    <Image src={item.thumb || blog_image3} alt={item.title || "Blog Image"} width={400} height={300} />
                                    <div className="blog-tag">
                                        <h3 className="text-white">{item.date}</h3>
                                        <span className="text-white">{item.month}</span>
                                    </div>
                                </Link>
                                <div className="blog__content">
                                    <ul className="blog-info mb-20">
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_880_270)">
                                                    <path
                                                        d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z"
                                                        fill="#0f7a95" />
                                                </g>
                                                <defs>
                                                    <clipPath>
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <Link href="#0">Technology</Link>
                                        </li>
                                        <li>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_615_71)">
                                                    <path
                                                        d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z" fill="#0f7a95" />
                                                <path d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z" fill="#0f7a95" />
                                                <path d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z" fill="#0f7a95" />
                                                <path d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z" fill="#0f7a95" />
                                            </g>
                                            <defs>
                                                <clipPath>
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <Link href="#0">Comments</Link>
                                    </li>
                                </ul>
                                <h3><Link href="/blog-details" className="primary-hover">{item.title}</Link></h3>
                                <div className="about__info mt-30">
                                    <div className="d-flex gap-2 align-items-center">
                                        <Image src={item.avatar || "/assets/images/blog/admin1.png"} alt={item.name || "Blog Author"} width={50} height={50} />
                                        <div className="info">
                                            <Link href="#" className="primary-color">By Admin</Link>
                                            <h5>{item.name || "Admin"}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                ))}
                </div>
                </div>
            </div>
        </section>
    );
};

// Main ServiceDetailsArea Component
const ServiceDetailsArea = ({ data, BenefitsSection, CTASection, isTechnologyPage = false }: ServiceDetailsAreaProps) => {
    return (
        <>
            {/* Main Service Section */}
            <MainServiceSection data={data} />
            
            {/* Benefits Section */}
            {BenefitsSection}
            
            {/* Service Cards Section */}
            <ServiceCardsSection data={data} />
            
            {/* Quality Services Section - Above HireGrid */}
            {data.hireAboutSection?.title && data.hireAboutSection?.description && (
                <section className="quality-services-section pt-120 pb-80" style={{ 
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
                    marginBottom: '50px'
                }}>
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="content-section">
                                    <h2 style={{ 
                                        color: '#0f7a95', 
                                        fontSize: '2.5rem', 
                                        fontWeight: '700',
                                        marginBottom: '20px',
                                        lineHeight: '1.2'
                                    }}>
                                        {data.hireAboutSection.title}
                                    </h2>
                                    <p style={{ 
                                        color: '#666', 
                                        fontSize: '1.1rem', 
                                        lineHeight: '1.6'
                                    }}>
                                        {data.hireAboutSection?.description || ""}
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInRight" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="about__left-item" style={{ position: 'relative' }}>
                                    <div className="image big-image" style={{ marginTop: '0px' }}>
                                        <Image src={about_thumb3} alt="Quality Services" width={400} height={300} />
                                    </div>
                                    <div className="image sm-image" style={{ marginTop: '0px' }}>
                                        <Image src={about_thumb4} alt="Quality Services" width={300} height={200} />
                                    </div>
                                    <div className="circle-shape">
                                        <Image src={shape_6} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            
            {/* Services Grid Section - Added before CTA */}
            {data.showServicesGrid && (
                <div style={{ marginBottom: '70px' }}>
                    <HireGrid 
                        key={`hire-grid-${data.services?.join('-') || 'default'}`}
                        services={data.services}
                    />
                </div>
            )}
            
            {/* Why Choose Us Section - Only for Technology Pages */}
            {isTechnologyPage && data.whyChooseUs && (
                <WhyChooseUsSection data={data.whyChooseUs} />
            )}
            
            {/* Hire CTA Section - Positioned after services grid (hire pages only) */}
            {!isTechnologyPage && (
            <HireCTA 
                title={data.ctaTitle || "Looking for reliable bespoke software development solutions?"}
                buttonText={data.ctaButtonText || "GET STARTED NOW"}
                buttonLink={data.ctaButtonLink || "/contact"}
            />
            )}
            
            {/* ServiceTwo Section - Additional services below CTA (hire pages only) */}
            {!isTechnologyPage && (
            <ServiceTwo 
                services={data.serviceTwoServices}
                title={data.serviceTwoTitle || "Additional Services"}
                subtitle={data.serviceTwoSubtitle || "Explore More Development Solutions"}
            />
            )}
            
            {/* Second About Section - Always show below ServiceTwo on hire pages */}
            <HireAboutSection 
                hiringOptions={data.hireAboutSection?.hiringOptions}
                hiringProcess={data.hireAboutSection?.hiringProcess}
            />
            
            {/* CTA Section - Positioned after service cards, before projects */}
            {CTASection}
            
            {/* Project Section */}
            <ProjectSection data={data} />
            
            {/* Clients Section */}
            <ClientsSection data={data} />
            
            {/* Testimonial Section */}
            <TestimonialSection data={data} />
            
            {/* CTA Two Section - Between Testimonials and Agile Approach */}
            <HireCTATwo 
                title={data.ctaTwoTitle || "Ready to Start Your Project?"}
                buttonText={data.ctaTwoButtonText || "GET STARTED NOW"}
                buttonLink={data.ctaTwoButtonLink || "/contact"}
            />
            
            {/* Agile Approach Section */}
            <AgileApproachSection data={data} />
            
            {/* Industry We Serve Section */}
            <IndustryWeServe />
            
            {/* Media Coverage Section */}
            <MediaCoverageSection data={data} />
            
            {/* Blog Section */}
            <BlogSection data={data} />
            
            {/* Newsletter Section - Above Footer */}
            <NewsletterSection />
            
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