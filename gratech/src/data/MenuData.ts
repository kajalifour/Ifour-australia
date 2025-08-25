import { StaticImageData } from "next/image";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    hidden?: boolean;
    mega_munu?: {
        id: number;
        img: StaticImageData;
        btn_1: string;
        btn_link1: string;
        btn_2?: string;
        btn_link2?: string;
        title: string;
    }[];
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "#",
        has_dropdown: true,
        hidden: true,
        mega_munu: [
            // {
            //     id: 1,
            //     img: img_1,
            //     btn_1: "Multi Page",
            //     btn_link1: "/",
            //     btn_2: "One Page",
            //     btn_link2: "/home-1-one-page",
            //     title: "Home Page 01"
            // }
            // {
            //     id: 2,
            //     img: img_2,
            //     btn_1: "Multi Page",
            //     btn_link1: "/home-two",
            //     btn_2: "One Page",
            //     btn_link2: "/home-2-one-page",
            //     title: "Home Page 01"
            // },
            // {
            //     id: 3,
            //     img: img_3,
            //     btn_1: "Multi Page",
            //     btn_link1: "/home-three",
            //     btn_2: "One Page",
            //     btn_link2: "/home-3-one-page",
            //     title: "Home Page 03"
            // },
            // {
            //     id: 4,
            //     img: img_4,
            //     btn_1: "View Page",
            //     btn_link1: "/dark-home",
            //     title: "Home Dark"
            // },
        ],
    },
    {
        id: 2,
        title: "Services",
        link: "/#",
        has_dropdown: true,
        sub_menus: [
            { link: "/custom-software-development-company", title: "Custom Software Development" },
            { link: "/desktop-application-development-company", title: "Desktop Application Development" },
            { link: "/ecommerce-website-development-company", title: "Ecommerce Website Development" },
            { link: "/microsoft-365-development-company", title: "Microsoft 365 Development" },
            { link: "/microsoft-azure-cloud-services-company", title: "Microsoft Azure Cloud Services" },
            { link: "/blockchain-development-company", title: "Blockchain Development" },
            { link: "/mobile-app-development-company", title: "Mobile App Development" },
            { link: "/iot-software-development-company", title: "Iot Software Development" }
        ],
    },
    {
        id: 3,
        title: "Technologies",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/angular-development-company", title: "Angular Development" },
            { link: "/dotnet-development-company", title: ".Net Development" },
            { link: "/node-js-development-company", title: "Node.js Development" },
            { link: "/c-sharp-development-company", title: "C# Development" },
            { link: "/java-development-company", title: "Java Development" },
            { link: "/salesforce-development-company", title: "Salesforce Development" },
            { link: "/wpf-application-development-company", title: "WPF Development" },
            { link: "/reactjs-development-company", title: "React.js Development" },
        ],
    },
    {
        id: 4,
        title: "Hire",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/hire-dot-net-developer", title: "Hire .Net Developer" },
            { link: "/hire-angular-developers", title: "Hire Angular Developer" },
            { link: "/hire-nodejs-developers", title: "Hire Node.js Developer" },
            { link: "/hire-vuejs-developers", title: "Hire Vue.js Developer" },
            { link: "/hire-csharp-developers", title: "Hire C# Developer" },
            { link: "/hire-wpf-developers", title: "Hire WPF Developer" },
            { link: "/hire-java-developers", title: "Hire Java Developer" },
        ],
    },
    {
        id: 5,
        title: "Showcase",
        link: "case-study",
        has_dropdown: false,
       
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Blog",
        link: "/blog",
    },
     {
        id: 7,
        has_dropdown: false,
        title: "Contact Us",
        link: "/contact",
    },
];

export default menu_data;