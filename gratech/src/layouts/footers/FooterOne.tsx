"use client"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/footer-regular-left.png"
import shape_2 from "@/assets/images/shape/footer-solid-left.png"
import shape_3 from "@/assets/images/shape/footer-regular-right.png"
import shape_4 from "@/assets/images/shape/footer-solid-right.png"
import shape_5 from "@/assets/images/shape/footer-shadow-shape.png"
import logo from "@/assets/images/logo/logo-white.png"

const FooterOne = () => {

   return (
      <footer className="footer-area" style={{ 
         background: 'linear-gradient(135deg, #0f7a95 0%, #0a5a6f 50%, #083d4f 100%)',
         color: '#ffffff'
      }}>
         <style jsx>{`
            .footer__wrp {
               display: grid;
               grid-template-columns: 2fr 1fr 1fr 1.5fr;
               gap: 40px;
               align-items: start;
            }
            .footer__item {
               width: 100%;
               max-width: none;
            }
            .footer__item:first-child {
               padding-right: 20px;
            }
            .footer__item h3.footer-title {
               font-size: 18px;
               font-weight: 700;
               margin-bottom: 25px;
               color: #ffffff;
               text-transform: uppercase;
               letter-spacing: 0.5px;
            }
            .footer__item ul {
               list-style: none;
               padding: 0;
               margin: 0;
            }
            .footer__item ul li {
               margin-bottom: 12px;
            }
            .footer__item ul li a {
               color: #ffffff;
               text-decoration: none;
               font-size: 14px;
               display: flex;
               align-items: center;
               transition: color 0.3s ease;
            }
            .footer__item ul li a:hover {
               color: #000000 !important;
            }
            .footer__item ul li a i {
               margin-right: 8px;
               font-size: 12px;
            }
            .footer__item p {
               color: #ffffff;
               font-size: 14px;
               line-height: 1.6;
               margin-bottom: 20px;
            }
            .social-icon {
               display: flex;
               gap: 15px;
               margin-top: 20px;
            }
            .social-icon a {
               display: flex;
               align-items: center;
               justify-content: center;
               width: 40px;
               height: 40px;
               background: rgba(255, 255, 255, 0.1);
               border-radius: 50%;
               color: #ffffff;
               text-decoration: none;
               transition: all 0.3s ease;
               font-size: 16px;
            }
            .social-icon a:hover {
               background: #000000;
               color: #ffffff !important;
               transform: translateY(-2px);
            }
            .footer-contact {
               list-style: none;
               padding: 0;
               margin: 0;
            }
            .footer-contact li {
               display: flex;
               align-items: flex-start;
               margin-bottom: 20px;
            }
            .footer-contact li i {
               font-size: 18px;
               margin-right: 15px;
               margin-top: 2px;
               color: #ffffff;
               min-width: 20px;
            }
            .footer-contact li .info h5 {
               font-size: 14px;
               font-weight: 600;
               margin-bottom: 5px;
               color: #ffffff;
            }
            .footer-contact li .info p {
               font-size: 14px;
               color: #ffffff;
               margin: 0;
               line-height: 1.4;
            }
            .footer__item a {
               transition: color 0.3s ease;
            }
            .footer__item a:hover {
               color: #000000 !important;
            }
            .footer__copyright a {
               transition: color 0.3s ease;
            }
            .footer__copyright a:hover {
               color: #000000 !important;
            }
            @media (max-width: 991px) {
               .footer__wrp {
                  grid-template-columns: repeat(2, 1fr);
                  gap: 30px;
               }
            }
            @media (max-width: 575px) {
               .footer__wrp {
                  grid-template-columns: 1fr;
                  gap: 25px;
               }
               .footer__item:first-child {
                  padding-right: 0;
               }
            }
            /* Hide triangular left side footer shapes on mobile */
            @media (max-width: 768px) {
               .footer__shape-regular-left,
               .footer__shape-solid-left {
                  display: none !important;
               }
            }
         `}</style>
         <div className="footer__shape-regular-left wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image src={shape_1} alt="shape" style={{ filter: 'brightness(0) invert(1)' }} />
         </div>
         <div className="footer__shape-solid-left wow slideInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_2} alt="shape" style={{ filter: 'brightness(0) invert(1)' }} />
         </div>
         <div className="footer__shape-solid-right wow slideInRight" data-wow-delay="00ms" data-wow-duration="1500ms">
            <Image className="sway_Y__animation" src={shape_3} alt="shape" style={{ filter: 'brightness(0) invert(1)' }} />
         </div>
         <div className="footer__shape-regular-right wow slideInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image src={shape_4} alt="shape" style={{ filter: 'brightness(0) invert(1)' }} />
         </div>
         <div className="footer__shadow-shape">
            <Image src={shape_5} alt="shodow" />
         </div>
         <div className="container">
            <div className="footer__wrp pt-100 pb-100">
               <div className="footer__item wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Link href="/" className="logo mb-30">
                     <Image src={logo} alt="image" />
                  </Link>
                  <p>Empowering Industries through Innovative Software Solutions.</p>
                  <div className="social-icon">
                     <Link href="https://www.facebook.com/ifourtechnolab/" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-brands fa-facebook-f"></i></Link>
                     <Link href="https://x.com/consultifour" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-brands fa-twitter"></i></Link>
                     <Link href="https://www.linkedin.com/company/ifourtechnolab" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-brands fa-linkedin-in"></i></Link>
                     <Link href="https://www.instagram.com/ifourtechnolab/" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-brands fa-instagram"></i></Link>
                  </div>
               </div>
               <div className="footer__item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">OUR EXPERTISE</h3>
                  <ul>
                     <li><Link href="/software-development-technologies" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Technologies</Link></li>
                     <li><Link href="/case" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Showcase</Link></li>
                     <li><Link href="/blog" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Blog</Link></li>
                  </ul>
               </div>
               <div className="footer__item wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Services</h3>
                  <ul>
                     <li><Link href="/about" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> About Us</Link></li>
                     <li><Link href="/terms-of-use" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Terms of Use</Link></li>
                     <li><Link href="/contact" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Contact Us</Link></li>
                  </ul>
                              </div>
               <div className="footer__item wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Contact Us</h3>
                  <p className="mb-20">15 Banyula drive, Old bar - NSW, 2430, Australia</p>
                  <ul className="footer-contact">
                     {/* <li>
                        <i className="fa-regular fa-clock"></i>
                        <div className="info">
                           <h5>
                              Opening Hours:
                           </h5>
                           <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                        </div>
                     </li> */}
                     <li>
                        <i className="fa-duotone fa-phone"></i>
                        <div className="info">
                           <h5>
                              Phone Call:
                           </h5>
                           <p>+61 4 8993 1698</p>
                        </div>
                     </li>
                     <li>
                        <i className="fa-regular fa-envelope"></i>
                        <div className="info">
                           <h5>
                              Email:
                           </h5>
                           <p>info@ifourtechnolab.com.au</p>
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
                  <p className="wow fadeInDown" data-wow-delay="00ms" data-wow-duration="1500ms">&copy; All Copyright 2025
                     by <Link href="#" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>iFour Technolab</Link></p>
                  <ul className="d-flex align-items-center gap-4 wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <li><Link href="/terms-of-use" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>Terms & Condition</Link></li>
                     <li><Link href="#" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>Privacy Policy</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
