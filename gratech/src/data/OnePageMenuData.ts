import { StaticImageData } from "next/image";

import img_1 from "@/assets/images/menu/home1-image.jpg"
import img_2 from "@/assets/images/menu/home2-image.jpg"
import img_3 from "@/assets/images/menu/home3-image.jpg"
import img_4 from "@/assets/images/menu/home4-image.jpg"

interface MenuItem {
    id: number;
    page: string;
    title: string;
    link: string;
    mega_munu?: {
        id: number;
        img: StaticImageData;
        btn_1: string;
        btn_link1: string;
        btn_2?: string;
        btn_link2?: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        page: "home_1",
        title: "Home",
        link: "#",
        mega_munu: [
            {
                id: 1,
                img: img_1,
                btn_1: "Multi Page",
                btn_link1: "/",
                btn_2: "One Page",
                btn_link2: "/home-1-one-page",
                title: "Home Page 01"
            },
            {
                id: 2,
                img: img_2,
                btn_1: "Multi Page",
                btn_link1: "/home-two",
                btn_2: "One Page",
                btn_link2: "/home-2-one-page",
                title: "Home Page 01"
            },
            {
                id: 3,
                img: img_3,
                btn_1: "Multi Page",
                btn_link1: "/home-three",
                btn_2: "One Page",
                btn_link2: "/home-3-one-page",
                title: "Home Page 03"
            },
            {
                id: 4,
                img: img_4,
                btn_1: "View Page",
                btn_link1: "/dark-home",
                title: "Home Dark"
            },
        ],
    },
    {
        id: 2,
        page: "home_1",
        title: "Services",
        link: "/home-1-one-page/#service-section",
    },
    {
        id: 3,
        page: "home_1",
        title: "About",
        link: "/home-1-one-page/#about-section",
    },
    {
        id: 4,
        page: "home_1",
        title: "Case",
        link: "/home-1-one-page/#case-section",
    },
    {
        id: 5,
        page: "home_1",
        title: "Testimonials",
        link: "/home-1-one-page/#testimonial-section",
    },
    {
        id: 6,
        page: "home_1",
        title: "Blog",
        link: "/home-1-one-page/#blog-section",
    },

    // home_2
    {
        id: 1,
        page: "home_2",
        title: "Home",
        link: "#",
        mega_munu: [
            {
                id: 1,
                img: img_1,
                btn_1: "Multi Page",
                btn_link1: "/",
                btn_2: "One Page",
                btn_link2: "/home-1-one-page",
                title: "Home Page 01"
            },
            {
                id: 2,
                img: img_2,
                btn_1: "Multi Page",
                btn_link1: "/home-two",
                btn_2: "One Page",
                btn_link2: "/home-2-one-page",
                title: "Home Page 01"
            },
            {
                id: 3,
                img: img_3,
                btn_1: "Multi Page",
                btn_link1: "/home-three",
                btn_2: "One Page",
                btn_link2: "/home-3-one-page",
                title: "Home Page 03"
            },
            {
                id: 4,
                img: img_4,
                btn_1: "View Page",
                btn_link1: "/dark-home",
                title: "Home Dark"
            },
        ],
    },
    {
        id: 2,
        page: "home_2",
        title: "About",
        link: "/home-2-one-page/#about-section",
    },
    {
        id: 3,
        page: "home_2",
        title: "Services",
        link: "/home-2-one-page/#service-section",
    },
    {
        id: 4,
        page: "home_2",
        title: "Team",
        link: "/home-2-one-page/#team-section",
    },
    {
        id: 5,
        page: "home_2",
        title: "FAQ",
        link: "/home-2-one-page/#faq-section",
    },
    {
        id: 6,
        page: "home_2",
        title: "Blog",
        link: "/home-2-one-page/#blog-section",
    },

    // home_3
    {
        id: 1,
        page: "home_3",
        title: "Home",
        link: "#",
        mega_munu: [
            {
                id: 1,
                img: img_1,
                btn_1: "Multi Page",
                btn_link1: "/",
                btn_2: "One Page",
                btn_link2: "/home-1-one-page",
                title: "Home Page 01"
            },
            {
                id: 2,
                img: img_2,
                btn_1: "Multi Page",
                btn_link1: "/home-two",
                btn_2: "One Page",
                btn_link2: "/home-2-one-page",
                title: "Home Page 01"
            },
            {
                id: 3,
                img: img_3,
                btn_1: "Multi Page",
                btn_link1: "/home-three",
                btn_2: "One Page",
                btn_link2: "/home-3-one-page",
                title: "Home Page 03"
            },
            {
                id: 4,
                img: img_4,
                btn_1: "View Page",
                btn_link1: "/dark-home",
                title: "Home Dark"
            },
        ],
    },
    {
        id: 2,
        page: "home_3",
        title: "About",
        link: "/home-3-one-page/#about-section",
    },
    {
        id: 3,
        page: "home_3",
        title: "Case",
        link: "/home-3-one-page/#case-section",
    },
    {
        id: 4,
        page: "home_3",
        title: "Pricing",
        link: "/home-3-one-page/#pricing-section",
    },
    {
        id: 5,
        page: "home_3",
        title: "Testimonials",
        link: "/home-3-one-page/#testimonials-section",
    },
    {
        id: 6,
        page: "home_3",
        title: "Blog",
        link: "/home-3-one-page/#blog-section",
    },
];

export default menu_data;