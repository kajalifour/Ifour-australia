import { StaticImageData } from "next/image";

import team_1 from "@/assets/images/team/team-image1.jpg"
import team_2 from "@/assets/images/team/team-image2.jpg"
import team_3 from "@/assets/images/team/team-image3.jpg"
import team_4 from "@/assets/images/team/team-image4.jpg"
import team_5 from "@/assets/images/team/team-image5.jpg"
import team_6 from "@/assets/images/team/team-image6.jpg"

interface DataType {
   id: number;
   page: string;
   thumb: StaticImageData;
   title: string;
   designation: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      page: "home_2",
      thumb: team_1,
      title: "Kawser Ahmed",
      designation: "Web Designer"
   },
   {
      id: 2,
      page: "home_2",
      thumb: team_2,
      title: "Karniz Fatema",
      designation: "Customer Support"
   },
   {
      id: 3,
      page: "home_2",
      thumb: team_3,
      title: "Alex Pranto",
      designation: "UI/UX Designer"
   },

   // team
   {
      id: 1,
      page: "team",
      thumb: team_1,
      title: "Kawser Ahmed",
      designation: "Web Designer"
   },
   {
      id: 2,
      page: "team",
      thumb: team_2,
      title: "Karniz Fatema",
      designation: "Customer Support"
   },
   {
      id: 3,
      page: "team",
      thumb: team_3,
      title: "Alex Pranto",
      designation: "UI/UX Designer"
   },
   {
      id: 4,
      page: "team",
      thumb: team_4,
      title: "Anneya Roy",
      designation: "Software Engineer",
   },
   {
      id: 5,
      page: "team",
      thumb: team_5,
      title: "Mohmmad Arif",
      designation: "Marketing Manager",
   },
   {
      id: 6,
      page: "team",
      thumb: team_6,
      title: "Prince Sagor",
      designation: "Programmer",
   },
];

export default team_data;