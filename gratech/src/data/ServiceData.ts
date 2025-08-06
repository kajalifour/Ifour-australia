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
      title: "Custom Product Development",
      desc: "Transform your vision into an innovative solution with our product development services. We provide end-to-end consultation from concept to product launch to help you ensure competitiveness in the marketplace."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Web Application Development",
      desc: "We have a team of experts proficient in building stunning and user-centered web applications to drive engagement. We integrate modern tech stacks to get high-performing web apps that help you stand out."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Cloud Application Development",
      desc: "Our team holds enough experience in the field to help you build cloud apps. At iFour, we build scalable and secure cloud solutions that drive business agility."
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "Business Line Solutions",
      desc: "We help you simplify your business operations by designing a tailored solution that addresses your pain points and business challenges."
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Desktop App Development",
      desc: "With our top-notch desktop app development services, you can experience user-friendly and high-performing solutions that maximize your productivity and let you work flawlessly into your current infrastructure."
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "Internet or Intranet Services",
      desc: "Trust iFour Technolab for reliable support and maintenance services. We monitor your software after deployment to ensure continued performance and security and address bugs."
   },
];
const service_data2: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Legacy App Modernization",
      desc: "Apart from custom app development, our skilled developers help you revamp your legacy or outdated desktop software upgrade it using advanced desktop app modernization to help you boost your productivity."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Application Integration",
      desc: "We also specialize in integrating desktop application with other software, APIs and services to help you create a cohesive ecosystem. Receive end to end assistance for integration services and improve the effectiveness of your business strategies."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "UWP App Development",
      desc: "At iFour we assist you with UWP development services from scratch that run smoothly on all Windows devices. Our experts ensures that your app is user-friendly and optimized across various platforms."
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "Custom Desktop Application Development",
      desc: "Connect with iFour for custom desktop app development services tailored to your unique needs. Our specialist work closely with you to understand your unique business needs and create a custom desktop application that boost work efficiency and productivity."
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Application Maintenance and Support",
      desc: "iFour keeps the promise to be your end-to-end solutions partner, hence our commitment to excellence doesn't end with the development. We provide Maintenance and support to help you keep your app secure and UpToDate."
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "Cross Platform Desktop App Development",
      desc: "Our team holds enough expertise to build tailored solutions for multi-platform. With cross-platform development you can expand your reach, streamline updates, decrease complexity and enhance cost control."
   },
];
const service_data4: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Legacy App Modernization",
      desc: "Apart from custom app development, our skilled developers help you revamp your legacy or outdated desktop software upgrade it using advanced desktop app modernization to help you boost your productivity."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Application Integration",
      desc: "We also specialize in integrating desktop application with other software, APIs and services to help you create a cohesive ecosystem. Receive end to end assistance for integration services and improve the effectiveness of your business strategies."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "UWP App Development",
      desc: "At iFour we assist you with UWP development services from scratch that run smoothly on all Windows devices. Our experts ensures that your app is user-friendly and optimized across various platforms."
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "Custom Desktop Application Development",
      desc: "Connect with iFour for custom desktop app development services tailored to your unique needs. Our specialist work closely with you to understand your unique business needs and create a custom desktop application that boost work efficiency and productivity."
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Application Maintenance and Support",
      desc: "iFour keeps the promise to be your end-to-end solutions partner, hence our commitment to excellence doesn't end with the development. We provide Maintenance and support to help you keep your app secure and UpToDate."
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "Cross Platform Desktop App Development",
      desc: "Our team holds enough expertise to build tailored solutions for multi-platform. With cross-platform development you can expand your reach, streamline updates, decrease complexity and enhance cost control."
   },
];

export default service_data;