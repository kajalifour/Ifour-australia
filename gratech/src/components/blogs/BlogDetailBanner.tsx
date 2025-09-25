import React from "react";
import Link from "next/link";
import Image from "next/image";

import shape_1 from "@/assets/images/banner/inner-banner-shape2.png"
import shape_2 from "@/assets/images/banner/inner-banner-shape1.png"
import shape_3 from "@/assets/images/banner/inner-banner-shape3.png"

interface BlogDetailBannerProps {
  pageName: string; // Heading text
  breadcrumbName?: string; // Optional breadcrumb label override
  subtitleName?: string; // Optional subtitle under the main heading
}

export default function BlogDetailBanner({ pageName, breadcrumbName, subtitleName }: BlogDetailBannerProps) {
  return (
    <section className="banner__inner-page bg-image pt-180 pb-180 bg-image"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(15, 122, 149, 0.3) 0%, rgba(13, 107, 127, 0.3) 50%, rgba(10, 90, 106, 0.3) 100%), url(/assets/images/banner/banner-inner-page.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Right side shape - always show */}
      <div className="shape3 wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
        <Image className="sway__animationX" src={shape_3} alt="shape" />
      </div>
      <div className="container">
        <h1 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms" style={{ color: 'white', fontSize: '2.5rem', fontWeight: '700' }}>{pageName}</h1>
        {subtitleName && (
          <p
            className="wow fadeInUp banner-subtitle"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
            style={{
              color: 'white',
              marginTop: '10px',
              fontSize: '1.25rem',
              textDecoration: 'none',
              borderBottom: 'none',
              boxShadow: 'none',
              display: 'inline-block'
            }}
          >
            {subtitleName}
          </p>
        )}
        <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <Link href="/">Home</Link>
          <span><i className="fa-regular fa-angles-right mx-2"></i></span>
          <Link href="/blog">Blog</Link>
          <span><i className="fa-regular fa-angles-right mx-2"></i></span>
          <span>{breadcrumbName || pageName}</span>
        </div>
      </div>
    </section>
  );
}
