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
               buttonText: "Get In Touch"
            };
            case "Mobile App Development Company":
            return {
               description: "iFour Technolab, your reliable Mobile app development company in Australia helps you improve your digital presence with top-notch mobile app solutions. With industry experience and strong command over the latest tech stack, our team brings solutions that bring success. Whether it's about mobile apps, web solutions, or custom software, our programmers design innovative solutions for all your needs.",
               buttonText: "Get In Touch"
            };
           case "IoT Software Development Company":
            return {
               description: "iFour Technolab, your trusted IoT software development company in Australia, specializes in creating innovative IoT solutions that connect devices, collect data, and drive intelligent business decisions. Our expert team delivers cutting-edge IoT applications that transform your business operations and enhance user experiences.",
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


   //for hire breadcrumb 
      const gethireContent = (serviceTitle: string) => {
      switch (serviceTitle) {
         case "Hire .NET Developer":
            return {
               description: "iFour remains a reliable partner to hire .NET developers in Australia. We have a team of highly skilled .NET developers proficient in building outstanding web apps. From dynamic web-based software solutions to cross-platform mobile apps and feature-rich Windows apps, we offer a range of .NET development services. Tap into the world of web apps with our .NET experts and take your projects to the next level.",
               buttonText: "Get In Touch Now"
            };
             case "Hire Angular Developers":
            return {
               description: "Hire Angular developers to create dynamic and interactive web app solutions. iFour has a talent pool of vetted and certified resources proficient in building robust solutions tailored to your needs. Our programmers work to ensure time zone compatibility to help clients launch their Angular projects globally. Get in touch to hire the top talent for your Angular project.",
               buttonText: "Let's Discuss Now"
            };
            case "Hire Node.js Developers":
            return {
               description: "Looking to hire Node.js developers to build scalable and high-performing web apps? iFour is your one-stop place to hire dedicated node.js programmers. iFour brings best-in-class node js developers to hire who possess the latest tech skills and help you build feature rich solutions that align with your business goals. Connect with us today to get high-performing and scalable solutions for your needs.",
               buttonText: "Request a Quote"
            };
            case "Hire Vue JS Developers":
            return {
               description: "Hire Vue Js developers from iFour Technolab to build robust, scalable, and reliable web solutions. Whether you want to build interactive UIs, single-page web apps, or other front-end apps, our team holds enough expertise to help you get a reliable solution for all your needs. Get access to proven skills of vue.js programmers with iFour.",
              buttonText: "Request a Quote"
            };
         case "Hire C# Developers":
            return {
               description: "At iFour, we have a vetted and dedicated team of C# developers available for hire. Our team holds extensive expertise in the field to help you build custom C# solution that works on multiple platforms   including mobile, web, and desktop. Our team holds extensive experience in the field with strong command over the latest technologies to help you build your dream project. Connect with the vetted C Sharp experts to receive exceptional IT services that go beyond your expectations.",
               buttonText: "Hire C# Developers Now"
            };
            case "Hire WPF Developers":
            return {
               description: "At iFour we have a team of experts proficient in WPF technology who work to create customized, responsive, and visually appealing WPF applications featuring outstanding performance and user experience. Recruit the top 1 % of WPF talent with iFour having industry expertise and a proven track record to build your next project.",
               buttonText: "Hire WPF Developers Now"
            };
            case "Hire Java Developers":
            return {
               description: "Connect with iFour, your reliable outsourcing partner to hire Java developers. Our programmers are skilled at creating enterprise solutions with the expertise of Java technology and help you meet diverse business needs. Our candidates are passionate about learning and adapting to new technologies, ensuring that the outcomes are future-proof to fit the changing market demands.",
               buttonText: "Hire Java Developers Now"
            };
         default:
            return {
               description: "Discover top-tier talent in Australia for custom software development. iFour specializes in crafting innovative, scalable, and affordable solutions tailored to your business needs.",
               buttonText: "Get In Touch"
            };
      }
   };

   const hireContent = gethireContent(title);

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
              title === "Blockchain Development Company" ||
              title === "Hire .NET Developer" ||
              title === "Hire Angular Developers" ||
              title === "Hire Node.js Developers" ||
              title === "Hire Vue JS Developers" ||
              title === "Hire C# Developers" ||
              title === "Hire WPF Developers" ||
              title === "Hire Java Developers") && (
                <div className="banner-content wow fadeInUp mt-4" data-wow-delay="400ms" data-wow-duration="1500ms">
                   <p className="text-white mb-4" style={{
                      fontSize: '1.32rem',
                      lineHeight: '1.6',
                      opacity: '0.9',
                      maxWidth: '600px',
                      margin: '0',
                      textAlign: 'left'
                   }}>
                      {title.includes("Hire") ? hireContent.description : serviceContent.description}
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
                      {title.includes("Hire") ? hireContent.buttonText : serviceContent.buttonText}
                   </Link>
                </div>
             )}
         </div>
      </section>
   )
}

export default BreadCrumb
