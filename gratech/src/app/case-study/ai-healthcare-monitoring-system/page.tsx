"use client";


import Wrapper from "@/layouts/Wrapper";
import BreadCrumb from "@/components/common/BreadCrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NewsletterSection from "@/components/common/NewsletterSection";
import TestimonialForm from "@/components/forms/TestimonialForm";
import shape_1 from "@/assets/images/icon/section-title.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useRef } from "react";
import avatar_1 from "@/assets/images/testimonial/testimonial-image1.png";
import avatar_2 from "@/assets/images/testimonial/testimonial-image2.png";



// Import industry images
import industry01 from "@/assets/images/industry/industry-01.webp";
import industry02 from "@/assets/images/industry/industry-02.webp";
import industry03 from "@/assets/images/industry/industry-03.webp";
import industry04 from "@/assets/images/industry/industry-04.webp";
import industry05 from "@/assets/images/industry/industry-05.webp";
import industry06 from "@/assets/images/industry/industry-06.webp";
import industry07 from "@/assets/images/industry/industry-07.webp";
import industry08 from "@/assets/images/industry/industry-08.webp";
import industry09 from "@/assets/images/industry/industry-09.webp";
import industry10 from "@/assets/images/industry/industry-10.webp";
import industry11 from "@/assets/images/industry/industry-11.webp";

// Import blog data
import bolg_data from "@/data/BlogData";
import { StaticImageData } from "next/image";


const AIHealthcareCaseStudy = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // Testimonial data matching Hire section
  const testi_data = [
    {
      id: 1,
      avatar: avatar_1,
      name: "John Schenk",
      designation: "President - John Schenk & Associates, LLC",
      desc: <></>,
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/itCyHAtz9ps"
    },
    {
      id: 2,
      avatar: avatar_2,
      name: "Gavin Kretzschmar",
      designation: "Dean and Professor ISE-LSE - Kazakhstan & London",
      desc: <></>,
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/KYgzAEupZak"
    },
    {
      id: 3,
      avatar: avatar_1,
      name: "Carlos Hernandez",
      designation: "Chief Executive Officer - Abstrax Labs",
      desc: <></>,
      isVideo: true,
      videoUrl: "https://www.youtube.com/embed/1qgWVsv4yw0"
    },
  ];

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





  // Industry data
  const industry_data: Array<{ id: number; icon: string | StaticImageData | null; title: string; link?: string }> = [
    { id: 1, icon: industry01, title: "Healthcare" },
    { id: 2, icon: industry02, title: "Finance" },
    { id: 3, icon: industry03, title: "Education" },
    { id: 4, icon: industry04, title: "E-commerce" },
    { id: 5, icon: industry05, title: "Manufacturing" },
    { id: 6, icon: industry06, title: "Real Estate" },
    { id: 7, icon: industry07, title: "Transportation" },
    { id: 8, icon: industry08, title: "Entertainment" },
    { id: 9, icon: industry09, title: "Technology" },
    { id: 10, icon: industry10, title: "Retail" },
    { id: 11, icon: industry11, title: "Logistics" },
    { id: 12, icon: null, title: "Contact Us", link: "/contact" },
  ];





  const testimonial_setting = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial__dot",
      clickable: true,
    },
  };

  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <BreadCrumb title="AI Healthcare Monitoring System" sub_title="Our Showcase" />
        
        <section className="case-single-area pt-120 pb-120">
          <div className="container">
            <div className="case-single__item" style={{ padding: '40px 0' }}>
              <h3 className="case-single__title mb-30" style={{ color: '#0f7a95', fontSize: '48px', fontWeight: 700 }}>AI Healthcare Monitoring System</h3>
              
              <h4 className="case-single__subtitle mb-20" style={{ color: '#0f7a95', fontSize: '20px', fontWeight: 600 }}>About customer:</h4>
              <p className="mb-40" style={{ fontSize: '18px', lineHeight: 1.8 }}>Our client is a leading healthcare technology company that aims to eliminate the variability in the healthcare management cycle and automate the manual diagnostic process, with the goal of significantly improving patient care and clinical outcomes.</p>
              
              <div className="row align-items-center g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-lg-7">
                  <h3 className="case-single__title mb-20" style={{ color: '#0f7a95', fontSize: '36px', fontWeight: 700 }}>Challenge</h3>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>The customer recognized the need for an integrated design method that could comprehensively assess all aspects of a project. Manual execution of each procedure throughout the life cycle of building design demanded significant time and effort. Additionally, accurately determining the environmental impact of building designs required complex calculations. Automation of operations and calculations became imperative to save time, enhance accuracy, and streamline the design assessment process.</p>
                  <div style={{ borderLeft: '3px solid #0f7a95', paddingLeft: '24px' }}>
                    <p style={{ marginBottom: 0, fontSize: '18px', lineHeight: 1.8 }}>With our impeccable solution, the customer can now efficiently assess the life cycle of building designs, ensuring compliance with industry and government standards, reducing errors, and saving valuable time. The integration of automation, advanced calculations, and comprehensive reporting capabilities empowers our customers to make informed decisions regarding environmental impact and sustainability. Together, we are revolutionizing building design assessment, fostering a greener and more sustainable future.</p>
                  </div>
                  <p className="mt-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>Explore your business potential with our custom software development services. React out us now.</p>
                </div>
                <div className="col-lg-5">
                  <div className="image text-lg-end">
                    <Image 
                      src="/assets/images/brand/project-image-01.webp" 
                      alt="AI Healthcare Monitoring System" 
                      width={800} 
                      height={400} 
                    />
                  </div>
                </div>
              </div>
              

              
              <div className="row align-items-center g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-12">
                  <h3 className="case-single__title mb-20" style={{ color: '#0f7a95', fontSize: '36px', fontWeight: 700 }}>Solution</h3>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>To address the client&apos;s needs, we embarked on an AI-based project that resulted in a versatile and intelligent tracking device, reforming the health monitoring experience. Leveraging cutting-edge sensors, IoT network technologies, Informedica, ChatGPT, and AI capabilities, our solution facilitates quick and secure data transfer and interpretation. This empowers healthcare staff in hospitals and nursing homes to respond promptly to unforeseen incidents identified by an autonomous diagnostic system.</p>
                  
                  <h4 className="mb-20" style={{ color: '#0f7a95', fontSize: '20px', fontWeight: 600 }}>Web and Mobile Application:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Patient Registration:</strong> Streamlined process for patient registration, ensuring easy access to healthcare services.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Health Updates:</strong> Real-time health updates, allowing users to track their well-being.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Doctor Appointments:</strong> Hassle-free scheduling of appointments with healthcare providers.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Patient Diagnosis Procedures:</strong> Convenient access to information and updates related to diagnosis procedures.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Patient History:</strong> Centralized storage of patient history, ensuring comprehensive and organized healthcare records.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Symptom Monitoring with Infermedica:</strong> Interactive chat feature facilitating symptom monitoring and analysis, powered by advanced AI technologies.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="row g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-12">
                  <h3 className="case-single__title mb-20" style={{ color: '#000000', fontSize: '32px', fontWeight: 700 }}>Modules</h3>
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Dashboard:</h4>
                                        <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>A comprehensive overview of the member&apos;s health, activities, and essential updates.</p>
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Chatbot (Yasmina Chatbot):</h4>
                  <ul className="list-unstyled mb-20">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      Intelligent chatbot integrated with Infermedica API for symptom checking and ChatGPT for addressing user queries.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      Access the symptom checker function through application login, providing analysis results via Infermedica API integration.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      Find answers to other questions using the ChatGPT-integrated chat view.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      Explore website pages and receive feedback through voice or text-to-speech using Azure Speech-to-Text and Text-to-Speech services.
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <strong>Symptom Checker:</strong> User-friendly symptom check dialogue based on age and gender, simplifying the evaluation process.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <strong>Contact & Emergency Contact:</strong> Management of contacts, including emergency contacts, for quick access during critical situations.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <strong>Appointment:</strong> Integration of Microsoft and Google email accounts, providing a unified platform for managing appointments and meetings.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <strong>Setting:</strong> Integration of Google and Microsoft accounts for seamless appointment management and customization of application settings.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <strong>History Management:</strong> Tracking and visualization of historical data related to heart rate, temperature, activity, and spo2.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="row g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-12">
                  <h3 className="case-single__title mb-20" style={{ color: '#000000', fontSize: '32px', fontWeight: 700 }}>Technologies we used:</h3>
                  
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Front end:</h4>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>Angular 14</p>
                  
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Back end:</h4>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>.NET Core 6.0 Web API</p>
                  
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Database:</h4>
                  <p className="mb-40" style={{ fontSize: '18px', lineHeight: 1.8 }}>SQL Server 2022</p>
                  
                  <h3 className="case-single__title mb-20" style={{ color: '#000000', fontSize: '32px', fontWeight: 700 }}>Mobile Application Features:</h3>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>The following are the mobile app features available to users.</p>
                  
                  <ul className="list-unstyled">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Device Administration:</strong> Manage device settings and configurations.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>User Registration:</strong> Register user accounts within the mobile application.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Dashboards:</strong> Display device-gathered data through interactive dashboards.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Mobile Communication with Device:</strong> Communicate with the device using the mobile application.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Mobile Communication with Azure Cloud:</strong> Establish a connection between the mobile application and Azure Cloud services.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Patient Appointment Processes:</strong> Manage patient appointments through the mobile application.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-12">
                  <h3 className="case-single__title mb-20" style={{ color: '#0f7a95', fontSize: '36px', fontWeight: 700 }}>Mobile Application Visualization (with Digital Avatar Integration):</h3>
                  
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Key Considerations:</h4>
                  
                  <h5 className="mb-10" style={{ color: '#0f7a95', fontSize: '16px', fontWeight: 600 }}>Tab Bar:</h5>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>The tab bar serves as a vital element of the mobile application, providing easy access to core functionality with a single tap and enabling seamless switching between features.</p>
                  
                  <h5 className="mb-10" style={{ color: '#0f7a95', fontSize: '16px', fontWeight: 600 }}>Tabs:</h5>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>Home | Yasmine/Digital Avatar</p>
                  
                  <ul className="list-unstyled mb-20">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Yasmine/Digital Avatar:</strong> Interact with a digital avatar for user/patient interaction.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Home:</strong> Displays other features of the mobile application.
                    </li>
                  </ul>
                  
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Home Tab:</h4>
                  <ul className="list-unstyled mb-20">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Heart Rate Display:</strong> When a user/patient requests their heart rate or its history, the digital avatar presents the data on the Home tab.
                    </li>
                  </ul>
                  
                  <h4 className="mb-10" style={{ color: '#0f7a95', fontSize: '18px', fontWeight: 600 }}>Device Connection:</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Bluetooth Connectivity:</strong> Connect the device via Bluetooth to retrieve temperature, heart rate, SPO2, and battery status readings.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Data Management:</strong> Manage device data within the mobile app and upload it to the Azure IoT Hub.
                    </li>
                    <li className="mb-3" style={{ fontSize: '18px', lineHeight: 1.8 }}>
                      <i className="fa-solid fa-check me-3" style={{ color: '#0f7a95' }}></i>
                      <strong>Web Application Integration:</strong> The web application displays updated data to users.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-12">
                  <h3 className="case-single__title mb-20" style={{ color: '#0f7a95', fontSize: '36px', fontWeight: 700 }}>Conclusion/Results:</h3>
                  <p className="mb-20" style={{ fontSize: '18px', lineHeight: 1.8 }}>iFour Technolab Pty. Ltd., a leading healthcare software development firm, delivered client with the desired solution offering a complete health monitoring experience. Our solution combines advanced sensors, AloT network technologies, Informedica, and ChatGPT to enable quick and secure data transfer. Healthcare staff in hospitals now have the capability to respond quickly to unexpected instances identified by an autonomous diagnostic system. With our innovative approach, we have transformed healthcare practices, ensuring efficient monitoring and improved patient care.</p>
                </div>
              </div>

              <div className="row g-4 mb-40" style={{ padding: '40px 0' }}>
                <div className="col-12">
                  <h3 className="case-single__title mb-20" style={{ color: '#0f7a95', fontSize: '48px', fontWeight: 700 }}>How we work</h3>
                  <h4 className="mb-20" style={{ color: '#0f7a95', fontSize: '20px', fontWeight: 600 }}>Let&apos;s unveil our unique software development approach -</h4>
                  <div className="text-center">
                    <Image 
                      src="/assets/images/case/casestudyimage-01.png"
                      alt="How we work - Agile Method and Scrum Framework"
                      width={1200}
                      height={800}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client&apos;s Talk Section */}
        <section id="testimonial-section" className="testimonial-area bg-image pt-120 pb-120" style={{ 
          backgroundImage: `url(/assets/images/bg/testimonial-bg.png)`,
          marginTop: '120px',
          marginBottom: '120px'
        }}>
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
                                <h4 style={{ color: 'white' }}>{item.name}</h4>
                                <p style={{ color: '#0f7a95' }}>{item.designation}</p>
                                <div className="star mt-1">
                                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#ffd700' }}></i>
                                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#ffd700' }}></i>
                                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#ffd700' }}></i>
                                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#ffd700' }}></i>
                                  <i className="fa-sharp fa-solid fa-star" style={{ color: '#ffd700' }}></i>
                                </div>
                              </div>
                            </div>
                            <p className="mt-30" style={{ color: 'white' }}>{item.desc}</p>
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
        </section>

        {/* Spacing Div */}
        <div style={{ height: '120px', width: '100%' }}></div>

        {/* Industry We Serve Section */}
        <section className="industry-we-serve-area pt-120 pb-120" style={{ 
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          marginTop: '120px',
          marginBottom: '120px'
        }}>
          <div className="container">
            <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
              <div className="section-header">
                <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: '#ffffff' }}>
                  Tech Talent
                </h5>
                <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <span style={{ color: '#0f7a95' }}>Industry</span> We Serve
                </h2>
              </div>
              <Link href="/contact" className="btn-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                Explore More <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="row g-4">
              {industry_data.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="offer__item text-center wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                    transition: 'all 0.3s ease',
                    cursor: item.link ? 'pointer' : 'default',
                    isolation: 'isolate',
                    borderRadius: '0'
                  }}>
                    {item.link ? (
                      <Link href={item.link} style={{ 
                        textDecoration: 'none', 
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center'
                      }}>
                        {item.icon && (
                          <div className="offer__icon mb-20">
                            <Image 
                              src={item.icon as string} 
                              alt={item.title} 
                              width={60} 
                              height={60} 
                              style={{ 
                                background: 'transparent', 
                                borderRadius: '50%', 
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease'
                              }} 
                            />
                          </div>
                        )}
                        <h4 className="text-white mt-20" style={{ margin: 0, textAlign: 'center' }}>{item.title}</h4>
                      </Link>
                    ) : (
                      <>
                        {item.icon && (
                          <div className="offer__icon mb-20">
                            <Image 
                              src={item.icon as string} 
                              alt={item.title} 
                              width={60} 
                              height={60} 
                              style={{ 
                                background: 'transparent', 
                                borderRadius: '50%', 
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease'
                              }} 
                            />
                          </div>
                        )}
                        <h4 className="text-white mt-20" style={{ margin: 0, textAlign: 'center' }}>{item.title}</h4>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing Div */}
        <div style={{ height: '120px', width: '100%' }}></div>

        {/* Explore Blogs and News Section */}
        <section id="blog-section" className="blog-two-area pb-120" style={{ 
          background: '#ffffff', 
          marginTop: '120px',
          marginBottom: '120px'
        }}>
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
                <div className="row g-4">
                  {bolg_data.filter((items) => items.page === "home_1").slice(1, 4).map((item) => (
                    <div key={item.id} className="col-12 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                      <div className="blog-two__item">
                        <div className="blog-two__image">
                          <Link href="/blog-details">
                            <Image src={item.thumb} alt="blog" width={400} height={250} />
                          </Link>
                          <div className="blog-two__tag">
                            <h3 className="text-white">{item.date}</h3>
                            <span className="text-white">{item.month}</span>
                          </div>
                        </div>
                        <div className="blog-two__content">
                          <h4>
                            <Link href="/blog-details">{item.title}</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />

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
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default AIHealthcareCaseStudy;