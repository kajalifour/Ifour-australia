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

const service_data7: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "iOS App Development",
      desc: "Build for Apple’s ecosystem, our team delivers sleek and intuitive solutions for iOS app development. With extensive experience in building iOS solutions, our team crafts fully functional app that satisfies your needs."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Android App Development",
      desc: "Our team holds the necessary expertise in Android app development. With a focus on smooth user experience and advanced functionalities, we build Android apps that help you grow in this competitive market."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Xamarin App Development",
      desc: "Get high-performing mobile apps that provide a smooth user experience across Android, iOS, and Windows platforms with our Xamarin app development services. Our team is proficient in building robust solutions that meet your business goals."
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "React Native App Development",
      desc: "We also assist clients to migrate from Google Workspace to Microsoft 365, which includes Mail & Rules, Contacts, and Calendar from G Suite to Microsoft 365. We ensure data integrity while transitioning from one platform to another."
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Hybrid App Development",
      desc: "Get the features of HTML5 and native worlds with our Hybrid app development. With hybrid solutions, you can get a mobile app that seamlessly works across devices like iOS, Android, desktop, and laptop and gives a smooth user experience."
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "Cross-platform App Development",
      desc: "Reach a wider audience without spending too much time and money with cross-platform app development services. We craft cross-platform solutions using technologies like React Native to help you enjoy a native-like performance."
   },
];

export default service_data7; 