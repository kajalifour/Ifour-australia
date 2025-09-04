/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import menu_data from "@/data/MenuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
    const currentRoute = usePathname();

    const isMenuItemActive = (menuLink: string) => {
        return currentRoute === menuLink;
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return currentRoute === subMenuLink;
    };

    return (
        <>
            {menu_data.filter(menu => !menu.hidden).map((menu, i) => (
                menu.mega_munu ? (
                    <li key={menu.id} className="has-megamenu">
                        <Link href={menu.link}>{menu.title} <i className="fa-solid fa-angle-down" style={{ marginLeft: 6 }}></i></Link>
                        <ul className="sub-menu mega-menu menu-image">
                            <li>
                                {menu.mega_munu.map((item) => (
                                    <div key={item.id} className="image text-center">
                                        <Image src={item.img} alt="image" />
                                        <div className="btn__group">
                                            <Link href={item.btn_link1} className="btn-one">{item.btn_1}</Link>
                                            {item.btn_link2 && <Link href={item.btn_link2} className="btn-one mt-2">{item.btn_2}</Link>}
                                        </div>
                                        <h6 className="text-white">{item.title}</h6>
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </li>) : (
                    <li key={menu.id}>
                        <Link href={menu.link} className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                            {menu.title}
                            {menu.sub_menus && <i className="fa-solid fa-angle-down" style={{ marginLeft: 6 }}></i>}
                        </Link>

                        {menu.sub_menus && (
                            <ul className="sub-menu">
                                {menu.sub_menus.map((sub_m, i) => (
                                    <li key={i}>
                                        <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                            <span className="d-none d-lg-inline">{sub_m.title}</span>
                                            <span className="d-inline d-lg-none">{sub_m.mobileTitle || sub_m.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                )
            ))}
        </>
    );
};

export default NavMenu;
