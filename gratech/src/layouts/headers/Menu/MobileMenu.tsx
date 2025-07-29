/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import menu_data from "@/data/MenuData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
   const currentRoute = usePathname();
   const [navTitle, setNavTitle] = useState("");
   const [subNavTitle, setSubNavTitle] = useState("");

   const isMenuItemActive = (menuLink: string) => {
      return currentRoute === menuLink;
   };

   const isSubMenuItemActive = (subMenuLink: string) => {
      return currentRoute === subMenuLink;
   };

   // Open or close the parent menu
   const openMobileMenu = (menu: any) => {
      setNavTitle((prev: any) => (prev === menu ? "" : menu));
      setSubNavTitle("");
   };

   return (
      <>
         <ul>
            {menu_data.map((menu) => (
               menu.mega_munu ? (
                  <li key={menu.id} className="has-megamenu">
                     <Link href={menu.link}>{menu.title}</Link>
                     <ul className="sub-menu mega-menu menu-image" style={{ display: navTitle === menu.title ? "block" : "none" }}>
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
                           {menu.sub_menus && (
                              <a
                                 className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                                 onClick={() => openMobileMenu(menu.title)}
                                 style={{ cursor: "pointer", fontSize: "18px" }}
                              >
                                 <i className={navTitle === menu.title ? "-" : "+"}></i>

                              </a>
                           )}
                        </li>
                     </ul>
                     {menu.mega_munu && (
                        <a
                           className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                           onClick={() => openMobileMenu(menu.title)}
                           style={{ cursor: "pointer", fontSize: "18px" }}
                        >
                           {navTitle === menu.title ? "-" : "+"}

                        </a>
                     )}
                  </li>) : (
                  <li key={menu.id}>
                     <Link href={menu.link} className={`${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
                        {menu.title}
                     </Link>

                     {menu.has_dropdown && (
                        <>
                           {menu.sub_menus && (
                              <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                                 {menu.sub_menus.map((sub_m, i) => (
                                    <li key={i}>
                                       <Link href={sub_m.link} className={`${sub_m.link && isSubMenuItemActive(sub_m.link) ? "active" : ""}`}>
                                          {sub_m.title}
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           )}
                        </>
                     )}
                     {menu.sub_menus && (
                        <a
                           className={`mean-expand ${navTitle === menu.title ? "mean-clicked" : ""}`}
                           onClick={() => openMobileMenu(menu.title)}
                           style={{ cursor: "pointer", fontSize: "18px" }}
                        >
                           {navTitle === menu.title ? "-" : "+"}

                        </a>
                     )}
                  </li>
               )
            ))}
         </ul>
      </>
   );
};

export default MobileMenu;
