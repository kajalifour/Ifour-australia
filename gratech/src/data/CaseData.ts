import { StaticImageData } from "next/image";

import Case_1 from "@/assets/images/case/case-image1.jpg"
import Case_2 from "@/assets/images/case/case-image2.jpg"
import Case_3 from "@/assets/images/case/case-image3.jpg"
import Case_4 from "@/assets/images/case/case-image4.jpg"
import Case2_1 from "@/assets/images/case/case-two-image1.jpg"
import Case2_2 from "@/assets/images/case/case-two-image2.jpg"
import Case2_3 from "@/assets/images/case/case-two-image3.jpg"
import Case2_4 from "@/assets/images/case/case-two-image4.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   sub_title: string;
   title: string;
}

const Case_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: Case_1,
      sub_title: "Technology",
      title: "Angular Development",
   },
   {
      id: 2,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: ".Net Development",
   },
   {
      id: 3,
      page: "home_1",
      thumb: Case_3,
      sub_title: "Technology",
      title: "Node.js Development",
   },
   {
      id: 4,
      page: "home_1",
      thumb: Case_4,
      sub_title: "Technology",
      title: "C# Development",
   },
   {
      id: 5,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "Java Development",
   },
   {
      id: 6,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "Java Development",
   },
   {
      id: 7,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "WPF Development",
   },
   {
      id: 8,
      page: "home_1",
      thumb: Case_2,
      sub_title: "Technology",
      title: "React.js Development",
   },

   // // home_2
   // {
   //    id: 1,
   //    page: "home_2",
   //    thumb: Case2_1,
   //    sub_title: "Solution",
   //    title: "IT Management",
   // },
   // {
   //    id: 2,
   //    page: "home_2",
   //    thumb: Case2_2,
   //    sub_title: "Technology",
   //    title: "Web Development",
   // },
   // {
   //    id: 3,
   //    page: "home_2",
   //    thumb: Case2_3,
   //    sub_title: "Security",
   //    title: "Network Security",
   // },
   // {
   //    id: 4,
   //    page: "home_2",
   //    thumb: Case2_4,
   //    sub_title: "Technology",
   //    title: "Platform Integration",
   // },
   // {
   //    id: 5,
   //    page: "home_2",
   //    thumb: Case2_2,
   //    sub_title: "Technology",
   //    title: "Web Development",
   // },

   // // case_1
   // {
   //    id: 1,
   //    page: "case_1",
   //    thumb: Case_1,
   //    sub_title: "Solution",
   //    title: "IT Management",
   // },
   // {
   //    id: 2,
   //    page: "case_1",
   //    thumb: Case_2,
   //    sub_title: "Technology",
   //    title: "Platform Integration",
   // },
   // {
   //    id: 3,
   //    page: "case_1",
   //    thumb: Case_3,
   //    sub_title: "Solution",
   //    title: "Web Development",
   // },
   // {
   //    id: 4,
   //    page: "case_1",
   //    thumb: Case_4,
   //    sub_title: "Security",
   //    title: "Network Security",
   // },
   // {
   //    id: 5,
   //    page: "case_1",
   //    thumb: Case2_1,
   //    sub_title: "DEVELOPMENT",
   //    title: "Product Design",
   // },
   // {
   //    id: 6,
   //    page: "case_1",
   //    thumb: Case2_4,
   //    sub_title: "Design",
   //    title: "UI/UX Design",
   // },

   // // case_2

   // {
   //    id: 1,
   //    page: "case_2",
   //    thumb: Case2_1,
   //    sub_title: "Solution",
   //    title: "IT Management",
   // },
   // {
   //    id: 2,
   //    page: "case_2",
   //    thumb: Case2_2,
   //    sub_title: "Technology",
   //    title: "Platform Integration",
   // },
   // {
   //    id: 3,
   //    page: "case_2",
   //    thumb: Case2_3,
   //    sub_title: "Solution",
   //    title: "Web Development",
   // },
   // {
   //    id: 4,
   //    page: "case_2",
   //    thumb: Case2_4,
   //    sub_title: "Security",
   //    title: "Network Security",
   // },
   // {
   //    id: 5,
   //    page: "case_2",
   //    thumb: Case_1,
   //    sub_title: "DEVELOPMENT",
   //    title: "Product Design",
   // },
   // {
   //    id: 6,
   //    page: "case_2",
   //    thumb: Case_2,
   //    sub_title: "Design",
   //    title: "UI/UX Design",
   // },
];

export default Case_data;