import { StaticImageData } from "next/image";

import blog_1 from "@/assets/images/blog/blog-image1.jpg"
import blog_2 from "@/assets/images/blog/blog-image2.jpg"
import blog_3 from "@/assets/images/blog/blog-image3.jpg"
import blog_4 from "@/assets/images/blog/blog-image4.jpg"
import blog_5 from "@/assets/images/blog/blog-image5.jpg"
import blog_6 from "@/assets/images/blog/blog-image6.jpg"

import blog2_1 from "@/assets/images/blog/blog-two-list-image1.jpg"
import blog2_2 from "@/assets/images/blog/blog-two-list-image2.jpg"

import blog3_1 from "@/assets/images/blog/blog-single-image2.jpg"
import blog3_2 from "@/assets/images/blog/blog-single-image1.jpg"
import blog3_3 from "@/assets/images/blog/blog-single-image3.jpg"

import avatar_1 from "@/assets/images/blog/admin1.png"
import avatar_2 from "@/assets/images/blog/admin2.png"
import avatar_3 from "@/assets/images/blog/admin3.png"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   date: number;
   month: string;
   title: string;
   desc?: string;
   name?: string;
   avatar?: StaticImageData;
   category?: string;
}

const bolg_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      thumb: blog_1,
      date: 10,
      month: "Dec",
      title: "Necessity May Give us Best Virtual Court"
   },
   {
      id: 2,
      page: "home_1",
      thumb: blog_2,
      date: 12,
      month: "Dec",
      title: "Tackling the Changes of Retail Industry"
   },
   {
      id: 3,
      page: "home_1",
      thumb: blog_3,
      date: 15,
      month: "Dec",
      title: "Easy and Most Powerful Server and Platform"
   },

   // home_2
   {
      id: 1,
      page: "home_2",
      thumb: blog2_1,
      date: 15,
      month: "Dec",
      title: "What’s the Holding Back the It Solution",
      category: "Technology",
      name: "Haven Richards",
      avatar: avatar_2,
   },
   {
      id: 2,
      page: "home_2",
      thumb: blog2_2,
      date: 20,
      month: "Dec",
      title: "Powerful Server and Platform",
      category: "Technology",
      name: "Prince Sakib",
      avatar: avatar_2,
   },

   // blog_1
   {
      id: 1,
      page: "blog_1",
      thumb: blog_1,
      date: 10,
      month: "Dec",
      title: "Necessity May Give us Best Virtual Court"
   },
   {
      id: 2,
      page: "blog_1",
      thumb: blog_2,
      date: 12,
      month: "Dec",
      title: "Tackling the Changes of Retail Industry"
   },
   {
      id: 3,
      page: "blog_1",
      thumb: blog_3,
      date: 15,
      month: "Dec",
      title: "Easy and Most Powerful Server and Platform"
   },
   {
      id: 4,
      page: "blog_1",
      thumb: blog_4,
      date: 22,
      month: "Dec",
      title: "Keep Your Business Safe & Ensure High Availability."
   },
   {
      id: 5,
      page: "blog_1",
      thumb: blog_5,
      date: 16,
      month: "Dec",
      title: "Powerful Server and Platform"
   },
   {
      id: 6,
      page: "blog_1",
      thumb: blog_6,
      date: 19,
      month: "Dec",
      title: "What’s the Holding Back the It Solution"
   },
   {
      id: 7,
      page: "blog_1",
      thumb: blog_4,
      date: 22,
      month: "Dec",
      title: "Keep Your Business Safe & Ensure High Availability."
   },
   {
      id: 8,
      page: "blog_1",
      thumb: blog_5,
      date: 16,
      month: "Dec",
      title: "Powerful Server and Platform"
   },
   {
      id: 9,
      page: "blog_1",
      thumb: blog_6,
      date: 19,
      month: "Dec",
      title: "What’s the Holding Back the It Solution"
   },

   // blog_1
   {
      id: 1,
      page: "blog_2",
      thumb: blog3_1,
      date: 19,
      month: "Dec",
      category: "Technology",
      desc: "Consequat Quisque eget congue velit in OF cursus leo sodales IS the euismod quis sapien euismod",
      name: "Alex Rony",
      avatar: avatar_1,
      title: "Keep Your Business Safe & Ensure High Availability."
   },
   {
      id: 2,
      page: "blog_2",
      thumb: blog3_2,
      date: 15,
      month: "Dec",
      category: "Technology",
      desc: "Consequat Quisque eget congue velit in OF cursus leo sodales IS the euismod quis sapien euismod",
      name: "Kawser Ahmed",
      avatar: avatar_2,
      title: "Tackling the Changes of Retail Industry"
   },
   {
      id: 3,
      page: "blog_2",
      thumb: blog3_3,
      date: 10,
      month: "Dec",
      category: "Technology",
      desc: "Consequat Quisque eget congue velit in OF cursus leo sodales IS the euismod quis sapien euismod",
      name: "Nur Islam",
      avatar: avatar_3,
      title: "Keep Your Business Safe & Ensure High Availability."
   },
   {
      id: 4,
      page: "blog_2",
      thumb: blog3_2,
      date: 15,
      month: "Dec",
      category: "Technology",
      desc: "Consequat Quisque eget congue velit in OF cursus leo sodales IS the euismod quis sapien euismod",
      name: "Kawser Ahmed",
      avatar: avatar_2,
      title: "Tackling the Changes of Retail Industry"
   },
];

export default bolg_data;