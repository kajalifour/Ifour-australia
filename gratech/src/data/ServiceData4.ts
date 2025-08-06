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

const service_data4: DataType[] = [
   {
      id: 1,
      page: "home_1",
      icon: icon_1,
      title: "Office 365 Licenses",
      desc: "We help you assist in finding the best plan to access a suite of productivity apps that satisfy your business needs. Businesses can leverage advanced security, compliance tools, and additional storage by choosing the best plan without breaking the bank."
   },
   {
      id: 2,
      page: "home_1",
      icon: icon_2,
      title: "Office 365 Managed Services",
      desc: "Our Microsoft 365 managed services empower clients to fully leverage their subscriptions by handling routine maintenance and support tasks. This service alleviates the daily burden on IT teams, allowing them to focus on more important projects."
   },
   {
      id: 3,
      page: "home_1",
      icon: icon_3,
      title: "Migration from Legacy Email Provider",
      desc: "iFour helps you migrate from legacy tools to the future-proof solutions. We provide migration services for Zoho Office Suite, IBM Connections, Word Perfect, Live Link, and G Suite like platforms to the latest version of Office 365."
   },
   {
      id: 4,
      page: "home_1",
      icon: icon_1,
      title: "Migration from Google Workspace",
      desc: "We also assist clients to migrate from Google Workspace to Microsoft 365, which includes Mail & Rules, Contacts, and Calendar from G Suite to Microsoft 365. We ensure data integrity while transitioning from one platform to another."
   },
   {
      id: 5,
      page: "home_1",
      icon: icon_2,
      title: "Migration from Exchange on-premises to Office 365",
      desc: "By migrating from Exchange on-premises to Office 365, businesses can take advantage of cloud benefits. The service includes migrating all emails, contacts, and calendars from user mailboxes to Office 365."
   },
   {
      id: 6,
      page: "home_1",
      icon: icon_3,
      title: "Migration from open-source email to Office 365",
      desc: "We also help clients migrate from open-source email to Office 365 where clients can choose to migrate the content of user mailboxes from open-source mailbox to Microsoft 365. This helps clients improve productivity and scalability."
   },
];

export default service_data4; 