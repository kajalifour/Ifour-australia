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
   link?: string;
}

const service_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Custom Software Development Company",
      desc: "We specialize in the use of advanced technology and frameworks, such as .NET, Angular, and Node.js, to construct software solutions tailored exclusively to fit your unique needs.",
      link: "/custom-software-development-company"
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Ecommerce Website Development Company",
      desc: "We design, develop, and implement e-commerce-based solutions with visually engaging interfaces and unmatched functionality to increase sales and boost profitability exponentially.",
      link: "/ecommerce-website-development-company"
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Microsoft Azure Cloud Services Company",
      desc: "Through our expertise in Azure application development, we aid businesses in harnessing the full potential of the cloud, enabling business growth and enhanced business efficiency.",
      link: "/microsoft-azure-cloud-services-company"
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "Blockchain Development Company",
      desc: "As a leading Australia-based software development company, we are experienced in developing high-end blockchain solutions, either from scratch or revamping existing ones.",
      link: "/blockchain-development-company"
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Desktop Application Development Company",
      desc: "Our team, composed of the brightest minds from the software development industry, can help you build robust, resilient, and highly secure desktop apps.",
      link: "/desktop-application-development-company"
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "Mobile App Development Company",
      desc: "We help formulate your disruptive business idea into a mobile app that matches your aspirations, delivers a delightful user experience, and sets your business up for success.",
      link: "/mobile-app-development-company"
   },
];

// const service_data2: DataType[] = [
//    {
//       id: 1,
//       page: "home_1",
//       icon: icon_1,
//       title: "Legacy App Modernization",
//       desc: "Apart from custom app development, our skilled developers help you revamp your legacy or outdated desktop software upgrade it using advanced desktop app modernization to help you boost your productivity."
//    },
//    {
//       id: 2,
//       page: "home_1",
//       icon: icon_2,
//       title: "Application Integration",
//       desc: "We also specialize in integrating desktop application with other software, APIs and services to help you create a cohesive ecosystem. Receive end to end assistance for integration services and improve the effectiveness of your business strategies."
//    },
//    {
//       id: 3,
//       page: "home_1",
//       icon: icon_3,
//       title: "UWP App Development",
//       desc: "At iFour we assist you with UWP development services from scratch that run smoothly on all Windows devices. Our experts ensures that your app is user-friendly and optimized across various platforms."
//    },
//    {
//       id: 4,
//       page: "home_1",
//       icon: icon_1,
//       title: "Custom Desktop Application Development",
//       desc: "Connect with iFour for custom desktop app development services tailored to your unique needs. Our specialist work closely with you to understand your unique business needs and create a custom desktop application that boost work efficiency and productivity."
//    },
//    {
//       id: 5,
//       page: "home_1",
//       icon: icon_2,
//       title: "Application Maintenance and Support",
//       desc: "iFour keeps the promise to be your end-to-end solutions partner, hence our commitment to excellence doesn't end with the development. We provide Maintenance and support to help you keep your app secure and UpToDate."
//    },
//    {
//       id: 6,
//       page: "home_1",
//       icon: icon_3,
//       title: "Cross Platform Desktop App Development",
//       desc: "Our team holds enough expertise to build tailored solutions for multi-platform. With cross-platform development you can expand your reach, streamline updates, decrease complexity and enhance cost control."
//    },
// ];

// const service_data4: DataType[] = [
//    {
//       id: 1,
//       page: "home_1",
//       icon: icon_1,
//       title: "Office 365 Licenses",
//       desc: "We help you assist in finding the best plan to access a suite of productivity apps that satisfy your business needs. Businesses can leverage advanced security, compliance tools, and additional storage by choosing the best plan without breaking the bank."
//    },
//    {
//       id: 2,
//       page: "home_1",
//       icon: icon_2,
//       title: "Office 365 Managed Services",
//       desc: "Our Microsoft 365 managed services empower clients to fully leverage their subscriptions by handling routine maintenance and support tasks. This service alleviates the daily burden on IT teams, allowing them to focus on more important projects."
//    },
//    {
//       id: 3,
//       page: "home_1",
//       icon: icon_3,
//       title: "Migration from Legacy Email Provider",
//       desc: "iFour helps you migrate from legacy tools to the future-proof solutions. We provide migration services for Zoho Office Suite, IBM Connections, Word Perfect, Live Link, and G Suite like platforms to the latest version of Office 365."
//    },
//    {
//       id: 4,
//       page: "home_1",
//       icon: icon_1,
//       title: "Migration from Google Workspace",
//       desc: "We also assist clients to migrate from Google Workspace to Microsoft 365, which includes Mail & Rules, Contacts, and Calendar from G Suite to Microsoft 365. We ensure data integrity while transitioning from one platform to another."
//    },
//    {
//       id: 5,
//       page: "home_1",
//       icon: icon_2,
//       title: "Migration from Exchange on-premises to Office 365",
//       desc: "By migrating from Exchange on-premises to Office 365, businesses can take advantage of cloud benefits. The service includes migrating all emails, contacts, and calendars from user mailboxes to Office 365."
//    },
//    {
//       id: 6,
//       page: "home_1",
//       icon: icon_3,
//       title: "Migration from open-source email to Office 365",
//       desc: "We also help clients migrate from open-source email to Office 365 where clients can choose to migrate the content of user mailboxes from open-source mailbox to Microsoft 365. This helps clients improve productivity and scalability."
//    },
// ];

// Named exports for individual access
// export { service_data };

// Default export for service_data (main services)
export default service_data;