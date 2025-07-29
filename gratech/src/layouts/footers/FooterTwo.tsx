"use client"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/footer-regular-left.png"
import shape_2 from "@/assets/images/shape/footer-solid-left.png"
import shape_3 from "@/assets/images/shape/footer-regular-right.png"
import shape_4 from "@/assets/images/shape/footer-solid-right.png"
import shape_5 from "@/assets/images/shape/footer-shadow-shape.png"
import logo from "@/assets/images/logo/logo.svg"

const FooterTwo = () => {
   return (
      <footer className="footer-two-area secondary-bg">
         <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_2} alt="shape" />
         </div>
         <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_3} alt="shape" />
         </div>
         <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image src={shape_4} alt="shape" />
         </div>
         <div className="footer__shadow-shape">
            <Image src={shape_5} alt="shodow" />
         </div>
         <div className="container">
            <div className="footer__wrp pt-100 pb-100">
               <div className="footer__item item-big wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Link href="/" className="logo mb-30">
                     <Image src={logo} alt="image" />
                  </Link>
                  <p>Empowering Industries through Innovative Software Solutions.</p>
                  <div className="social-icon">
                     <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                     <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                     <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                     <Link href="#"><i className="fa-brands fa-youtube"></i></Link>
                  </div>
               </div>
               <div className="footer__item item-sm wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">IT Solution</h3>
                  <ul>
                     <li><Link href="/service-details"><i className="fa-regular fa-angles-right me-1"></i> IT
                        Management</Link></li>
                     <li><Link href="/service-details"><i className="fa-regular fa-angles-right me-1"></i> SEO
                        Optimization</Link>
                     </li>
                     <li><Link href="/service-details"><i className="fa-regular fa-angles-right me-1"></i> Web
                        Development</Link>
                     </li>
                     <li><Link href="/service-details"><i className="fa-regular fa-angles-right me-1"></i> Cyber
                        Security</Link></li>
                     <li><Link href="/service-details"><i className="fa-regular fa-angles-right me-1"></i> Data
                        Security</Link></li>
                  </ul>
               </div>
               <div className="footer__item item-sm wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Quick Link</h3>
                  <ul>
                     <li><Link href="/about"><i className="fa-regular fa-angles-right me-1"></i> About Gratech</Link></li>
                     <li><Link href="/service"><i className="fa-regular fa-angles-right me-1"></i> Our Services</Link>
                     </li>
                     <li><Link href="/pricing"><i className="fa-regular fa-angles-right me-1"></i> Pricing Plan</Link>
                     </li>
                     <li><Link href="/case"><i className="fa-regular fa-angles-right me-1"></i> Our Projects</Link></li>
                     <li><Link href="/team"><i className="fa-regular fa-angles-right me-1"></i> Our Team</Link></li>
                  </ul>
               </div>
               <div className="footer__item item-big wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Contact Us</h3>
                  <p className="mb-20">4517 Washington Ave. Manchester, Kentucky 39495</p>
                  <ul className="footer-contact">
                     <li>
                        <i className="fa-regular fa-clock"></i>
                        <div className="info">
                           <h5>
                              Opening Hours:
                           </h5>
                           <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                        </div>
                     </li>
                     <li>
                        <i className="fa-duotone fa-phone"></i>
                        <div className="info">
                           <h5>
                              Phone Call:
                           </h5>
                           <p>208-6666-0112, 308-5555-0113</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer__copyright">
            <div className="container">
               <div
                  className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
                  <p className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">&copy; All Copyright 2024
                     by <Link href="#">Gratech</Link></p>
                  <ul className="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <li><Link href="#">Terms & Condition</Link></li>
                     <li><Link href="#">Privacy Policy</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterTwo
