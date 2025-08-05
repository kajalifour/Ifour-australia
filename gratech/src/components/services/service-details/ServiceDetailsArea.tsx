"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import Link from "next/link";
import Case_data from '@/data/CaseData';
import service_data from "@/data/ServiceData";

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
        <section className="cta-area pt-120 pb-120" style={{ 
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
            textAlign: 'center'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="cta-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2 style={{ 
                                color: '#1a237e', 
                                fontSize: '2.5rem', 
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
                                letterSpacing: '1px'
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
            
            {/* Add more sections here as needed */}
            {/* <BrandSection /> */}
            {/* <TestimonialsSection /> */}
            {/* <ContactSection /> */}
        </>
    );
};

export default ServiceDetailsArea;
