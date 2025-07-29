/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import menu_data from "@/data/OnePageMenuData";

interface PageType {
   page: string;
}

const OnePageMobileMenu = ({ page }: PageType) => {

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
            {menu_data.filter((items) => items.page === page).map((menu) => (
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
                     <Link href={menu.link}>
                        {menu.title}
                     </Link>
                  </li>
               )
            ))}
         </ul>
      </>
   );
};

export default OnePageMobileMenu;
