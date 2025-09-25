"use client";

import Wrapper from "@/layouts/Wrapper";
import BreadCrumb from "@/components/common/BreadCrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NewsletterSection from "@/components/common/NewsletterSection";
import TestimonialForm from "@/components/forms/TestimonialForm";
import shape_1 from "@/assets/images/icon/section-title.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import avatar_1 from "@/assets/images/testimonial/testimonial-image1.png";
import avatar_2 from "@/assets/images/testimonial/testimonial-image2.png";
import bolg_data from "@/data/BlogData";
import { getAllBlog } from "@/utils/api";

interface IndustryDataType {
  id: number;
  icon?: string;
  title: string;
  link?: string;
}

// Blog Post Interface
interface BlogPost {
  id: string;
  slug: string;
  postTitle: string;
  postContent: string;
  publishedDates: string;
  authorName: string;
  categoryName?: string;
  fileName: string;
  alt?: string;
  isPublished: boolean;
}

const PackagingIndustryCaseStudy = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await getAllBlog("plusphysio", 1);
        const blogData = response?.data?.blogList?.resultSet || [];

        // Filter published blogs and take first 3
        const publishedBlogs = blogData
          .filter((blog: any) => blog.isPublished === true || blog.isPublished === undefined)
          .slice(0, 3)
          .map((blog: any) => {
            return {
              id: String(blog.id || blog.postId || blog.slug || Math.random()),
              slug: blog.slug || blog.postSlug || '',
              postTitle: blog.postTitle || blog.title || 'Untitled',
              postContent: blog.postContent || blog.content || '',
              publishedDates: blog.publishedDates || blog.publishedDate || blog.createdAt || '',
              authorName: blog.authorName || blog.author || 'Admin',
              categoryName: blog.categoryName || blog.category || 'Technology',
              fileName: blog.fileName || '/assets/images/blog/blog-image1.jpg',
              alt: blog.alt || blog.postTitle || 'Blog image',
              isPublished: blog.isPublished || true
            };
          });

        setBlogs(publishedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return { day: '01', month: 'Jan' };
    try {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleDateString('en-US', { month: 'short' });
      return { day, month };
    } catch {
      return { day: '01', month: 'Jan' };
    }
  };

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
  const industry_data: IndustryDataType[] = [
    { id: 1, icon: "/assets/images/industry/industry-01.webp", title: "Healthcare" },
    { id: 2, icon: "/assets/images/industry/industry-02.webp", title: "Finance" },
    { id: 3, icon: "/assets/images/industry/industry-03.webp", title: "Education" },
    { id: 4, icon: "/assets/images/industry/industry-04.webp", title: "E-commerce" },
    { id: 5, icon: "/assets/images/industry/industry-05.webp", title: "Manufacturing" },
    { id: 6, icon: "/assets/images/industry/industry-06.webp", title: "Real Estate" },
    { id: 7, icon: "/assets/images/industry/industry-07.webp", title: "Transportation" },
    { id: 8, icon: "/assets/images/industry/industry-08.webp", title: "Entertainment" },
    { id: 9, icon: "/assets/images/industry/industry-09.webp", title: "Technology" },
    { id: 10, icon: "/assets/images/industry/industry-10.webp", title: "Retail" },
    { id: 11, icon: "/assets/images/industry/industry-11.webp", title: "Logistics" },
    { id: 12, title: "Contact Us", link: "/contact" },
  ];



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
    <Wrapper>
      <HeaderOne />
      <main>
        <BreadCrumb title="Life Cycle Assessment for Packaging Industry" sub_title="Our Showcase" />
        <section className="case-single-area pt-120 pb-120">
          <div className="container">
            <div className="case-single__item case-single-item">
              <h3 className="case-single__title mb-30 case-single-title">Life Cycle Assessment for Packaging Industry</h3>
              <h4 className="mb-20 case-single-subtitle">About customer:</h4>
              <p className="case-single-content-dark">
                Our esteemed client is an Australian company specializing in assisting businesses and policymakers in understanding and enhancing their sustainability and overall performance. With strategic partnerships and connections with consultancies and research organizations, they undertake projects ranging from life cycle assessment to training, software support, and data development.
              </p>
              
              <div className="row align-items-center g-4 mb-40 case-single-section">
                <div className="col-lg-7">
                  <h3 className="case-single__title mb-20 case-single-title">Challenge</h3>
                  <p className="mb-20 case-single-content">Our client faced the challenge of streamlining their assessment of product lifecycles and evaluating environmental impacts for different packaging options. The traditional methods they used for various calculations hindered their decision-making process, resulting in the need for a more efficient and user-friendly solution.</p>
                  <div className="case-single-highlight">
                                          <p>With our flawless solution, the customer can efficiently evaluate environmental changes and perform impact calculations at various stages of a product&apos;s life cycle. This enhanced decision-making ability not only empowers our Australian client but also delivers exceptional value to their respective customers.</p>
                  </div>
                  <p className="mt-20 case-single-content">Looking to revolutionize business procedures fostering a greener and more sustainable future? Contact us now.</p>
                </div>
                <div className="col-lg-5">
                  <div className="image text-lg-end">
                <Image 
                      src="/assets/images/case/casestudy-02.jpg"
                      alt="Life Cycle Assessment for Packaging Industry Challenge"
                  width={800}
                  height={400}
                />
              </div>
                </div>
              </div>
              
              <div className="row align-items-center g-4 mb-40 case-single-section">
                <div className="col-12">
                  <h3 className="case-single__title mb-20 case-single-title">Solution</h3>
                  <p className="mb-20 case-single-content">To address these challenges, iFour Technolab Pvt. Ltd., a leading .NET web development company, developed a cutting-edge solution that automates the processes involved in building life cycle assessments while adhering to industry and government standards of the UK and Australia. Our solution encompasses the following key features:</p>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Automated Procedures and Synchronization:</h4>
                    <p className="case-single-content-small">Streamlining the life cycle assessment procedures of building design through automated operations, ensuring efficiency and accuracy.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Compatibility with Industry Standards:</h4>
                    <p className="case-single-content-small">Formulas used to calculate the environmental impact of building designs are fully compatible with Australian and UK standards, including EN 15978 and ISO 14044.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Project Creation and Management:</h4>
                    <p className="case-single-content-small">Creating and managing designed projects with lifecycle modules and comprehensive impact analysis.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Structural Design Module:</h4>
                    <p className="case-single-content-small">Efficient categorization and management of project structures, facilitating design creation or redevelopment.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Assembly Components Module:</h4>
                    <p className="case-single-content-small">Designing various structures and generating reports for transportation and recurring environmental impacts.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Material Management Module:</h4>
                    <p className="case-single-content-small">Efficient management of material components used in building structures, including details such as products, transport, construction, and recurring charges.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Operational Energy and Water Management:</h4>
                    <p className="case-single-content-small">Creating operational energy and water components, including gas, electricity, and water types, and reporting associated environmental impacts.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Template Design:</h4>
                    <p className="case-single-content-small">Enabling users to create a global template with assembly, material, and operational components for consistent assessment.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Enhanced Report Generation:</h4>
                    <p className="case-single-content-small">Creating user-friendly technical reports adhering to international standards, facilitating clear communication of assessment outcomes.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Collaboration and Workflow Management:</h4>
                    <p className="case-single-content-small">Enabling communication and collaboration among users, including group creation, invitation acceptance or rejection, and sharing of designs or templates.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Task Management and Notifications:</h4>
                    <p className="case-single-content-small">Providing a comprehensive task list and scheduling system for individual users, ensuring timely completion and monitoring progress.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Role-Based Access:</h4>
                    <p className="case-single-content-small">Individualized access to the system, granting appropriate permissions based on user roles and responsibilities.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="mb-2 case-single-subtitle-small">Comprehensive Impact Analysis:</h4>
                    <p className="case-single-content-small">Analyzing the impacts of CO2, cost, energy, water, land use, ozone depletion, human toxicity, and more, providing a holistic insight into the environmental consequences of building designs.</p>
                  </div>
                </div>
              </div>

              <div className="row align-items-center g-4 mb-40 case-single-section">
                <div className="col-lg-6">
                  <div className="image">
                    <Image 
                      src="/assets/images/case/casestudy-02.jpg" 
                      alt="iFour Technolab Team" 
                      width={600}
                      height={400}
                      className="case-single-image"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="case-single__title mb-20 case-single-title-medium">Technology used:</h3>
                  <div className="technologies-list">
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Type:</h4>
                      <p className="case-single-content-small">Web Application</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Web Server:</h4>
                      <p className="case-single-content-small">IIS</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Programming Language:</h4>
                      <p className="case-single-content-small">ASP.NET (C#) Framework 4.5</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Database Management Server:</h4>
                      <p className="case-single-content-small">MySQL Server 2016</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Architecture:</h4>
                      <p className="case-single-content-small">MVC</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Client Technology:</h4>
                      <p className="case-single-content-small">JavaScript, JQuery</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Version Control:</h4>
                      <p className="case-single-content-small">SVN</p>
                    </div>
                    <div className="mb-3">
                      <h4 className="mb-2 case-single-subtitle-small">Other:</h4>
                      <p className="case-single-content-small">AQUA Plot API, Google distance API</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-40 case-single-section">
                <div className="col-12">
                  <h3 className="case-single__title mb-20 case-single-title">Conclusion/Results:</h3>
                  <p className="mb-20 case-single-content">Our customer is now able to analyze environmental changes and carry out impact calculations at different points in a product's life cycle thanks to the sustainable solution offered by iFour Technolab. Our clients wield more power, and their respective consumers benefit greatly as a result of this well-informed decision-making. Together, we are driving positive transformations in the realm of sustainability assessment, paving the way for a greener and brighter future in Australia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How we work Section */}
        <section className="pt-120 pb-120 bg-white">
          <div className="container">
            <div className="row g-4 mb-40 case-single-section">
              <div className="col-12">
                <h3 className="case-single__title mb-20 case-single-title-large">How we work</h3>
                <h4 className="mb-20 case-single-subtitle">Let's unveil our unique software development approach -</h4>
                <div className="text-center">
                  <Image 
                    src="/assets/images/case/casestudyimage-01.png"
                    alt="How we work - Agile Method and Scrum Framework"
                    width={1200}
                    height={800}
                    className="case-single-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client's Talk Section */}
        <section id="testimonial-section" className="testimonial-area bg-image pt-120 pb-120 testimonial-bg mt-120px">
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
                  <h2 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <span className="text-teal">What Clients Say</span> <span className="text-black">About Us</span>
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
                            <div className="video-container">
                              <iframe
                                src={item.videoUrl}
                                title="Client Testimonial"
                                className="case-study-video-iframe"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                              {/* Play Button Overlay */}
                              <div 
                                className="play-button-overlay"
                                onClick={() => handleVideoPlay(index)}
                              >
                                <i 
                                  className="fa-solid fa-play" 
                                  style={{ color: 'white', fontSize: '24px', marginLeft: '4px' }}
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
                                <h4 className="text-white">{item.name}</h4>
                                <p className="text-teal">{item.designation}</p>
                                <div className="star mt-1">
                                  <i className="fa-sharp fa-solid fa-star text-yellow"></i>
                                  <i className="fa-sharp fa-solid fa-star text-yellow"></i>
                                  <i className="fa-sharp fa-solid fa-star text-yellow"></i>
                                  <i className="fa-sharp fa-solid fa-star text-yellow"></i>
                                  <i className="fa-sharp fa-solid fa-star text-yellow"></i>
                                </div>
                              </div>
                            </div>
                            <p className="mt-30 text-white">{item.desc}</p>
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
        <div className="case-study-spacing-div"></div>

        {/* Industry We Serve Section */}
        <section className="industry-we-serve-area pt-120 pb-120 industry-gradient-bg mt-120px">
          <div className="container">
            <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
              <div className="section-header">
                <h5 className="wow fadeInLeft text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
                  Tech Talent
                </h5>
                <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <span className="text-teal">Industry</span> We Serve
                </h2>
              </div>
              <Link href="/contact" className="btn-one wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                Explore More <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
            <div className="row g-4">
              {industry_data.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="offer__item text-center wow fadeInUp case-study-offer-item" data-wow-delay="200ms" data-wow-duration="1500ms">
                    {item.link ? (
                      <Link href={item.link} className="case-study-offer-link">
                        {item.icon && (
                          <div className="offer__icon mb-20">
                            <Image 
                              src={item.icon} 
                              alt={item.title} 
                              width={60} 
                              height={60} 
                              className="case-study-offer-image" 
                            />
                          </div>
                        )}
                        <h4 className="text-white mt-20 case-study-offer-title">{item.title}</h4>
                      </Link>
                    ) : (
                      <>
                        {item.icon && (
                          <div className="offer__icon mb-20">
                            <Image 
                              src={item.icon} 
                              alt={item.title} 
                              width={60} 
                              height={60} 
                              className="case-study-offer-image" 
                            />
                          </div>
                        )}
                        <h4 className="text-white mt-20 case-study-offer-title">{item.title}</h4>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing Div */}
        <div className="case-study-spacing-div"></div>

        {/* Explore Blogs and News Section */}
        <section id="blog-section" className="blog-two-area pb-120 themed-section mt-120px bg-white">
          <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
              <div className="section-header">
                <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
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
                <h2 className="wow fadeInLeft mt-20px" data-wow-delay="200ms" data-wow-duration="1500ms">Explore Blogs and
                  News</h2>
              </div>
              <Link href="/blog" className="btn-one wow fadeInUp" data-wow-delay="200ms"
                data-wow-duration="1500ms">View All
                News <i className="fa-regular fa-arrow-right-long"></i></Link>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <p>Loading blogs...</p>
              </div>
            ) : blogs.length > 0 ? (
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="blog-two__grid-item">
                    <Link href={`/blog/${blogs[0].slug}`} className="blog__image d-block image">
                      {(() => {
                        const DEFAULT_REMOTE_PLACEHOLDER = 'https://ifourtechnolab.ifour-consultancy.net/pics/Post/default.Thumbnail.jpg';
                        const FALLBACK_BANNER = '/assets/images/blog/blog-image1.jpg';
                        const rawSrc = blogs[0].fileName || '';
                        const isProblematic =
                          !rawSrc || /default\.Thumbnail\.[a-z0-9]+/i.test(rawSrc) || rawSrc === DEFAULT_REMOTE_PLACEHOLDER;
                        const resolvedSrc = isProblematic ? FALLBACK_BANNER : rawSrc;
                        const unoptimized = resolvedSrc.startsWith('http');
                        return (
                          <Image
                            alt={blogs[0].alt || blogs[0].postTitle}
                            src={resolvedSrc}
                            width={900}
                            height={540}
                            quality={100}
                            priority
                            className="case-study-blog-image"
                            placeholder="empty"
                            unoptimized={unoptimized}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = FALLBACK_BANNER;
                            }}
                          />
                        );
                      })()}
                    <div className="blog-tag">
                        <h3 className="text-white">{formatDate(blogs[0].publishedDates).day}</h3>
                        <span className="text-white">{formatDate(blogs[0].publishedDates).month}</span>
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
                          <Link href="#0">{blogs[0].categoryName}</Link>
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
                      <h3><Link href={`/blog/${blogs[0].slug}`} className="primary-hover">{blogs[0].postTitle}</Link></h3>
                    <p className="mt-10"></p>
                    <div className="about__info justify-content-between flex-wrap gap-3 mt-25">
                      <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/images/blog/admin1.png" alt="Blog Author" width={50} height={50} />
                        <div className="info">
                          <Link href="#" className="primary-color">By Admin</Link>
                            <h5>{blogs[0].authorName}</h5>
                        </div>
                      </div>
                        <Link href={`/blog/${blogs[0].slug}`} className="btn-one">Read More <i
                        className="fa-regular fa-arrow-right-long"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                  {blogs.slice(1, 3).map((item, index) => (
                    <div key={item.id} className="blog-two__list-item mb-30 wow fadeInUp" data-wow-delay="00ms"
                      data-wow-duration="1500ms">
                      <Link href={`/blog/${item.slug}`} className="blog__image d-block image">
                        {(() => {
                          const DEFAULT_REMOTE_PLACEHOLDER = 'https://ifourtechnolab.ifour-consultancy.net/pics/Post/default.Thumbnail.jpg';
                          const FALLBACK_BANNER = '/assets/images/blog/blog-image1.jpg';
                          const rawSrc = item.fileName || '';
                          const isProblematic =
                            !rawSrc || /default\.Thumbnail\.[a-z0-9]+/i.test(rawSrc) || rawSrc === DEFAULT_REMOTE_PLACEHOLDER;
                          const resolvedSrc = isProblematic ? FALLBACK_BANNER : rawSrc;
                          const unoptimized = resolvedSrc.startsWith('http');
                          return (
                            <Image
                              alt={item.alt || item.postTitle}
                              src={resolvedSrc}
                              width={900}
                              height={540}
                              quality={100}
                              className="case-study-blog-image"
                              placeholder="empty"
                              unoptimized={unoptimized}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = FALLBACK_BANNER;
                              }}
                            />
                          );
                        })()}
                        <div className="blog-tag">
                          <h3 className="text-white">{formatDate(item.publishedDates).day}</h3>
                          <span className="text-white">{formatDate(item.publishedDates).month}</span>
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
                            <Link href="#0">{item.categoryName}</Link>
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
                        <h3><Link href={`/blog/${item.slug}`} className="primary-hover">{item.postTitle}</Link></h3>
                        <p className="mt-10"></p>
                        <div className="about__info justify-content-between flex-wrap gap-3 mt-25">
                          <div className="d-flex gap-2 align-items-center">
                            <Image src="/assets/images/blog/admin1.png" alt="image" width={50} height={50} />
                            <div className="info">
                              <Link href="#" className="primary-color">By Admin</Link>
                              <h5>{item.authorName}</h5>
                          </div>
                        </div>
                          <Link href={`/blog/${item.slug}`} className="btn-one">Read More <i
                            className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-5">
                <p>No blogs available at the moment.</p>
            </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Video Popup Modal */}
        {isVideoPopupOpen && (
          <div className="video-popup-overlay" 
            onClick={handleCloseVideo}
          >
            <div className="video-popup-content" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-button"
                onClick={handleCloseVideo}
              >
                ×
              </button>
              <div className="video-container">
                <iframe
                  src={`${testi_data[currentVideoIndex].videoUrl}?autoplay=1&mute=0`}
                  title="Client Testimonial"
                  className="case-study-video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-navigation">
                <button 
                  onClick={handlePrevVideo}
                  className="video-nav-button"
                >
                  Previous
                </button>
                <button 
                  onClick={handleNextVideo}
                  className="video-nav-button"
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

export default PackagingIndustryCaseStudy;
