import { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/service-icon1.png"
import icon_2 from "@/assets/images/icon/service-icon2.png"
import icon_3 from "@/assets/images/icon/service-icon3.png"

interface DataType {
   id: number;
   page: string;
   thumb?: StaticImageData;
   icon: StaticImageData;
   title: string;
   desc: string;
}

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

export default service_data2; 