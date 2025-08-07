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
   // Function to get service-specific content
   const getServiceContent = (serviceTitle: string) => {
      switch (serviceTitle) {
         case "Custom Software Development Company":
            return {
               description: "Discover top-tier talent in Australia for custom software development. iFour specializes in crafting innovative, scalable, and affordable solutions tailored to your business needs.",
               buttonText: "Get In Touch"
            };
             case "Desktop Application Development Company":
            return {
               description: "At iFour, we specialize in crafting innovative desktop app that drive productivity, simplify business workflows, and enhance user experience. With a team of highly experienced and vetted developers we help you transform your ideas into reality with a secure and robust solutions.",
               buttonText: "Get In Touch"
            };
            case "Ecommerce Website Development Company":
            return {
               description: "need to add",
               buttonText: "Get In Touch"
            };
            case "Microsoft 365 Development Company":
            return {
               description: "Get a comprehensive suite of tools and resources to create solutions that enhance productivity, collaboration, and data management within the Microsoft 365 ecosystem. Our team works closely with clients to understand their unique requirements and provides dynamic Microsoft Office 365 solutions that enhance collaboration, productivity, and work efficiency across your business environment.",
              buttonText: "Get In Touch"
            };
         case "Microsoft Azure Cloud Services Company":
            return {
               description: "need to add this.",
               buttonText: "Get In Touch"
            };
            case "Blockchain Development Company":
            return {
               description: "need to add this.",
               bbuttonText: "Get In Touch"
            };
            case "Mobile App Development Company":
            return {
               description: "iFour Technolab, your reliable Mobile app development company in Australia helps you improve your digital presence with top-notch mobile app solutions. With industry experience and strong command over the latest tech stack, our team brings solutions that bring success. Whether it's about mobile apps, web solutions, or custom software, our programmers design innovative solutions for all your needs.",
               buttonText: "Get In Touch"
            };
           case "IoT Software Development Company":
            return {
               description: "need to add this.",
               buttonText: "Get In Touch"
            };
         default:
            return {
               description: "Discover top-tier talent in Australia for custom software development. iFour specializes in crafting innovative, scalable, and affordable solutions tailored to your business needs.",
               buttonText: "Get In Touch"
            };
      }
   };

   const serviceContent = getServiceContent(title);

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
            {(title === "Custom Software Development Company" || 
              title === "Custom Product Development Company" ||
              title === "Web Application Development Company" ||
              title === "Cloud Application Development Company" ||
              title === "Business Line Solutions Company" ||
              title === "Desktop Application Development Company" ||
              title === "Internet or Intranet Services Company" ||
              title === "Mobile App Development Company" ||
              title === "Microsoft 365 Development Company" ||
              title === "Microsoft Azure Cloud Services Company" ||
              title === "Ecommerce Website Development Company" ||
              title === "IoT Software Development Company" ||
              title === "Blockchain Development Company") && (
                <div className="banner-content wow fadeInUp mt-4" data-wow-delay="400ms" data-wow-duration="1500ms">
                   <p className="text-white mb-4" style={{
                      fontSize: '1.32rem',
                      lineHeight: '1.6',
                      opacity: '0.9',
                      maxWidth: '600px',
                      margin: '0',
                      textAlign: 'left'
                   }}>
                      {serviceContent.description}
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
                      {serviceContent.buttonText}
                   </Link>
                </div>
             )}
         </div>
      </section>
   )
}

export default BreadCrumb
