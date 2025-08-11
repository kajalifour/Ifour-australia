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
               grid-template-columns: repeat(4, 1fr);
               gap: 30px;
               align-items: start;
            }
            .footer__item {
               width: 100%;
               max-width: none;
            }
            .footer__item a {
               transition: color 0.3s ease;
            }
            .footer__item a:hover {
               color: #000000 !important;
            }
            .social-icon a {
               transition: color 0.3s ease;
            }
            .social-icon a:hover {
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
               }
            }
            @media (max-width: 575px) {
               .footer__wrp {
                  grid-template-columns: 1fr;
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
                  <h3 className="footer-title">IT Solution</h3>
                  <ul>
                     <li><Link href="/custom-software-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Custom Software Development</Link></li>
                     <li><Link href="/desktop-application-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Desktop Application Development</Link>
                     </li>
                     <li><Link href="/ecommerce-website-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Ecommerce Website Development</Link>
                     </li>
                     <li><Link href="/microsoft-365-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Microsoft 365 Development</Link></li>
                     <li><Link href="/microsoft-azure-cloud-services-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Microsoft Azure Cloud Services</Link></li>
                     <li><Link href="/blockchain-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Blockchain Development</Link></li>
                     <li><Link href="/mobile-app-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Mobile App Development</Link></li>
                     <li><Link href="/iot-software-development-company" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Iot Software Development</Link></li>
                  </ul>
               </div>
               <div className="footer__item wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <h3 className="footer-title">Quick Link</h3>
                  <ul>
                     <li><Link href="/about" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> About Us </Link></li>
                     <li><Link href="/service" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Our Services</Link>
                     </li>
                     <li><Link href="/pricing" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Pricing Plan</Link>
                     </li>
                     <li><Link href="/case" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Our Projects</Link></li>
                     <li><Link href="/team" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Our Team</Link></li>
                     <li><Link href="/blog" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Our Blog</Link></li>
                     <li><Link href="/contact-us" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> Contact Us</Link></li>
                     <li><Link href="/faq" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}><i className="fa-regular fa-angles-right me-1"></i> FAQ</Link></li>
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
                     <li><Link href="#" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>Terms & Condition</Link></li>
                     <li><Link href="#" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}>Privacy Policy</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
