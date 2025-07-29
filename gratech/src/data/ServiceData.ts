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

   // home_2
   // {
   //    id: 1,
   //    page: "home_2",
   //    thumb: service_thumb1,
   //    icon: icon2_1,
   //    title: "Database Security",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 2,
   //    page: "home_2",
   //    thumb: service_thumb2,
   //    icon: icon2_2,
   //    title: "IT Consultancy",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 3,
   //    page: "home_2",
   //    thumb: service_thumb3,
   //    icon: icon2_3,
   //    title: "App Development",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 4,
   //    page: "home_2",
   //    thumb: service_thumb4,
   //    icon: icon2_4,
   //    title: "Cyber Security",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 5,
   //    page: "home_2",
   //    thumb: service_thumb5,
   //    icon: icon2_5,
   //    title: "UI/UX Design",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 6,
   //    page: "home_2",
   //    thumb: service_thumb6,
   //    icon: icon2_6,
   //    title: "IT Management",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },

   // // home_3
   // {
   //    id: 1,
   //    page: "home_3",
   //    thumb: service3_thumb1,
   //    icon: icon3_1,
   //    title: "Database Security",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 2,
   //    page: "home_3",
   //    thumb: service3_thumb2,
   //    icon: icon3_2,
   //    title: "Cyber Security",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
   // {
   //    id: 3,
   //    page: "home_3",
   //    thumb: service3_thumb3,
   //    icon: icon3_3,
   //    title: "IT Management",
   //    desc: "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis."
   // },
];

export default service_data;