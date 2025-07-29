import { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/pricing-icon1.png"
import icon_2 from "@/assets/images/icon/pricing-icon2.png"
import icon_3 from "@/assets/images/icon/pricing-icon3.png"

interface DataType {
   id: number;
   page: string;
   title: string;
   price: number;
   icon: StaticImageData;
   list: string[];
}

const pricing_data: DataType[] = [
   {
      id: 1,
      page: "home_3",
      title: "Basic Plan",
      price: 39,
      icon: icon_1,
      list: ["Free 1 5 GB Linux Hosting", "Dedicated Tech Experts", "24/7 System Monitoring", "Security Management", "Unlimited Download",],
   },
   {
      id: 2,
      page: "home_3",
      title: "Standard Plan",
      price: 59,
      icon: icon_2,
      list: ["Free 1 5 GB Linux Hosting", "Dedicated Tech Experts", "24/7 System Monitoring", "Security Management", "Unlimited Download",],
   },
   {
      id: 3,
      page: "home_3",
      title: "Premium Plan",
      price: 79,
      icon: icon_3,
      list: ["Free 1 5 GB Linux Hosting", "Dedicated Tech Experts", "24/7 System Monitoring", "Security Management", "Unlimited Download",],
   },
];

export default pricing_data;