import { StaticImageData } from "next/image";

import icon2_1 from "@/assets/images/icon/service-two-icon1.png"
import icon2_2 from "@/assets/images/icon/service-two-icon2.png"
import icon2_3 from "@/assets/images/icon/service-two-icon3.png"
import icon2_4 from "@/assets/images/icon/service-two-icon4.png"
import icon2_5 from "@/assets/images/icon/service-two-icon5.png"
import icon2_6 from "@/assets/images/icon/service-two-icon6.png"

import service_thumb1 from "@/assets/images/service/service-image1.jpg"
import service_thumb2 from "@/assets/images/service/service-image2.jpg"
import service_thumb3 from "@/assets/images/service/service-image3.jpg"
import service_thumb4 from "@/assets/images/service/service-image4.jpg"
import service_thumb5 from "@/assets/images/service/service-image5.jpg"
import service_thumb6 from "@/assets/images/service/service-image6.jpg"

interface DataType {
   id: number;
   thumb?: StaticImageData;
   icon: StaticImageData;
   title: string;
   desc: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      thumb: service_thumb1,
      icon: icon2_1,
      title: "Custom Product Development",
      desc: "Transform your vision into an innovative solution with our product development services. We provide end-to-end consultation from concept to product launch to help you ensure competitiveness in the marketplace."
   },
   {
      id: 2,
      thumb: service_thumb2,
      icon: icon2_2,
      title: "Web Application Development",
      desc: "We have a team of experts proficient in building stunning and user-centered web applications to drive engagement. We integrate modern tech stacks to get high-performing web apps that help you stand out."
   },
   {
      id: 3,
      thumb: service_thumb3,
      icon: icon2_3,
      title: "Cloud Application Development",
      desc: "Our team holds enough experience in the field to help you build cloud apps. At iFour, we build scalable and secure cloud solutions that drive business agility."
   },
   {
      id: 4,
      thumb: service_thumb4,
      icon: icon2_4,
      title: "Business Line Solutions",
      desc: "We help you simplify your business operations by designing a tailored solution that addresses your pain points and business challenges."
   },
   {
      id: 5,
      thumb: service_thumb5,
      icon: icon2_5,
      title: "Desktop App Development",
      desc: "With our top-notch desktop app development services, you can experience user-friendly and high-performing solutions that maximize your productivity and let you work flawlessly into your current infrastructure."
   },
   {
      id: 6,
      thumb: service_thumb6,
      icon: icon2_6,
      title: "Internet or Intranet Services",
      desc: "Trust iFour Technolab for reliable support and maintenance services. We monitor your software after deployment to ensure continued performance and security and address bugs."
   },
];
export default service_data;