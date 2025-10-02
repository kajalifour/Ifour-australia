import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu";

import logo from "@/assets/images/logo/logo-white.png"

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>
         <div id="targetElement" className={`sidebar-area ${offCanvas ? "" : "sidebar__hide"}`}>
            <div onClick={() => setOffCanvas(false)} className="sidebar__overlay"></div>
            <Link href="/" className="logo mb-40">
               <Image src={logo} alt="logo" />
            </Link>
            <div className="mobile-menu overflow-hidden mean-container">
               <div className="mean-bar">
                  <nav className="mean-nav">
                     <MobileMenu />
                  </nav>
               </div>
            </div>
            <ul className="info pt-40">
               <li className="py-2"><i className="fa-solid primary-color fa-phone"></i> <Link
                  href="tel:+61489931698">+61 4 8993 1698</Link>
               </li>
               <li><i className="fa-solid primary-color fa-envelope"></i> <Link href="mailto:info@ifourtechnolab.com.au">info@ifourtechnolab.com.au</Link></li>
            </ul>
            <div className="social-icon text-center mt-20">
               <Link href="https://www.facebook.com/ifourtechnolab/" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
               <Link href="https://x.com/consultifour" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
               <Link href="https://www.linkedin.com/company/ifourtechnolab" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>
               <Link href="https://www.instagram.com/ifourtechnolab/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
            </div>
            <button onClick={() => setOffCanvas(false)} id="closeButton" className="text-white"><i className="fa-solid fa-xmark"></i></button>
         </div>
      </>
   )
}

export default Offcanvas
