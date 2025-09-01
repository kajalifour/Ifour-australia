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
        link: "/",
        has_dropdown: false,
        hidden: true, // Hide from desktop menu, show only in mobile
    },
    {
        id: 2,
        title: "Services",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/custom-software-development-company", title: "Custom Software Dev" },
            { link: "/desktop-application-development-company", title: "Desktop App Dev" },
            { link: "/ecommerce-website-development-company", title: "Ecommerce Website Dev" },
            { link: "/microsoft-365-development-company", title: "Microsoft 365 Dev" },
            { link: "/microsoft-azure-cloud-services-company", title: "Azure Cloud Services" },
            { link: "/blockchain-development-company", title: "Blockchain Dev" },
            { link: "/mobile-app-development-company", title: "Mobile App Dev" },
            { link: "/iot-software-development-company", title: "IoT Software Dev" }
        ],
    },
    {
        id: 3,
        title: "Technologies",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/angular-development-company", title: "Angular Dev" },
            { link: "/dotnet-development-company", title: ".Net Dev" },
            { link: "/node-js-development-company", title: "Node.js Dev" },
            { link: "/c-sharp-development-company", title: "C# Dev" },
            { link: "/java-development-company", title: "Java Dev" },
            { link: "/salesforce-development-company", title: "Salesforce Dev" },
            { link: "/wpf-application-development-company", title: "WPF Dev" },
            { link: "/reactjs-development-company", title: "React.js Dev" },
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
        link: "/case-study",
        has_dropdown: false,
       
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Blog",
        link: "/blog",
    },
];

export default menu_data;