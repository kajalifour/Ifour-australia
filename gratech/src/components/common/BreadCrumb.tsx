"use client"
import Image from "next/image";
import Link from "next/link";

import shape_1 from "@/assets/images/banner/inner-banner-shape2.png"
import shape_2 from "@/assets/images/banner/inner-banner-shape1.png"
import shape_3 from "@/assets/images/banner/inner-banner-shape3.png"

interface DataType {
   sub_title: string;
   title: string;
}
const BreadCrumb = ({ sub_title, title }: DataType) => {
   return (
      <section className="banner__inner-page bg-image pt-180 pb-180 bg-image"
         style={{ backgroundImage: `url(/assets/images/banner/banner-inner-page.jpg)` }}>
         <div className="shape2 wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="shape1 wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image src={shape_2} alt="shape" />
         </div>
         <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image className="sway__animationX" src={shape_3} alt="shape" />
         </div>
         <div className="container">
            <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">{title}</h2>
            <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
               <Link href="/">Home</Link><span><i className="fa-regular fa-angles-right mx-2"></i>{sub_title}</span>
            </div>
                         {title === "Custom Software Development Company" && (
                <div className="banner-content wow fadeInUp mt-4" data-wow-delay="400ms" data-wow-duration="1500ms">
                   <p className="text-white mb-4" style={{
                      fontSize: '1.32rem',
                      lineHeight: '1.6',
                      opacity: '0.9',
                      maxWidth: '600px',
                      margin: '0',
                      textAlign: 'left'
                   }}>
                      Discover top-tier talent in Australia for custom software development. 
                      iFour specializes in crafting innovative, scalable, and affordable 
                      solutions tailored to your business needs.
                   </p>
                   <Link href="/contact" className="btn btn-primary" style={{
                      backgroundColor: '#ffffff',
                      color: '#0f7a95',
                      padding: '12px 30px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                   }}
                   onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#0f7a95';
                      e.currentTarget.style.color = '#ffffff';
                   }}
                   onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = '#0f7a95';
                   }}>
                      Get In Touch
                   </Link>
                </div>
             )}
         </div>
      </section>
   )
}

export default BreadCrumb
