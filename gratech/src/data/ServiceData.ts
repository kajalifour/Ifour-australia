import { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/service-icon1.png"
import icon_2 from "@/assets/images/icon/service-icon2.png"
import icon_3 from "@/assets/images/icon/service-icon3.png"
// import icon2_1 from "@/assets/images/icon/service-two-icon1.png"
// import icon2_2 from "@/assets/images/icon/service-two-icon2.png"
// import icon2_3 from "@/assets/images/icon/service-two-icon3.png"
// import icon2_4 from "@/assets/images/icon/service-two-icon4.png"
// import icon2_5 from "@/assets/images/icon/service-two-icon5.png"
// import icon2_6 from "@/assets/images/icon/service-two-icon6.png"
// import icon3_1 from "@/assets/images/icon/service-three-icon1.png"
// import icon3_2 from "@/assets/images/icon/service-three-icon2.png"
// import icon3_3 from "@/assets/images/icon/service-three-icon3.png"

// import service_thumb1 from "@/assets/images/service/service-image1.jpg"
// import service_thumb2 from "@/assets/images/service/service-image2.jpg"
// import service_thumb3 from "@/assets/images/service/service-image3.jpg"
// import service_thumb4 from "@/assets/images/service/service-image4.jpg"
// import service_thumb5 from "@/assets/images/service/service-image5.jpg"
// import service_thumb6 from "@/assets/images/service/service-image6.jpg"
// import service3_thumb1 from "@/assets/images/service/service-three-image.jpg"
// import service3_thumb2 from "@/assets/images/service/service-three-image2.jpg"
// import service3_thumb3 from "@/assets/images/service/service-three-image3.jpg"

interface DataType {
   id: number;
   page: string;
   thumb?: StaticImageData;
   icon: StaticImageData;
   title: string;
   desc: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Custom Software Developement",
      desc: "We specialize in the use of advanced technology and frameworks, such as .NET, Angular, and Node.js, to construct software solutions tailored exclusively to fit your unique needs."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Desktop Application Developement",
      desc: "Our team, composed of the brightest minds from the software development industry, can help you build robust, resilient, and highly secure desktop apps."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Mobile Application Development",
      desc: "We help formulate your disruptive business idea into a mobile app that matches your aspirations, delivers a delightful user experience, and sets your business up for success."
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "Web Application Development",
      desc: "We create powerful, scalable web applications using modern technologies and frameworks to deliver exceptional user experiences and drive business growth."
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Cloud Solutions & DevOps",
      desc: "We provide comprehensive cloud infrastructure solutions and DevOps services to optimize your development processes and ensure seamless deployment."
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "UI/UX Design & Consulting",
      desc: "Our expert designers create intuitive, engaging user interfaces and experiences that enhance user satisfaction and drive business success."
   },
];

export default service_data;