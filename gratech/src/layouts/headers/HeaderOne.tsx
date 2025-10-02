"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import HeaderTopOne from "./Menu/HeaderTopOne";

import logo from "@/assets/images/logo/logo-white.png";

const HeaderOne = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);

   return (
      <>
         <HeaderTopOne />
         <header className={`header-area ${sticky ? "menu-fixed fadeInDown" : ""}`}>
            <div className="container header__container">
               <div className="header__main">
                  <Link href="/" className="logo">
                     <Image src={logo} alt="logo" />
                  </Link>
                  <div className="main-menu d-none d-lg-block">
                     <nav>
                        <ul>
                           <NavMenu />
                        </ul>
                     </nav>
                  </div>
                  <div className="d-none d-lg-inline-block">
                     <Link href="/contact-us" className="btn-one">Contact Us <i
                        className="fa-regular fa-arrow-right-long"></i></Link>
                  </div>
                  <div className="bars d-block d-lg-none" onClick={() => setOffCanvas(true)}>
                     <i id="openButton" className="fa-solid fa-bars"></i>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
      </>
   )
}

export default HeaderOne
