"use client";
import Image from "next/image";
import Link from "next/link";

import shape_1 from "@/assets/images/shape/footer-regular-left.png";
import shape_2 from "@/assets/images/shape/footer-solid-left.png";
import shape_3 from "@/assets/images/shape/footer-regular-right.png";
import shape_4 from "@/assets/images/shape/footer-solid-right.png";
import shape_5 from "@/assets/images/shape/footer-shadow-shape.png";
import logo from "@/assets/images/logo/logo-white.png";

const FooterOne = () => {
  return (
    <footer className="footer-area secondary-bg">
      <div
        className="footer__shape-regular-left wow slideInLeft"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
      >
        <Image src={shape_1} alt="shape" />
      </div>
      <div
        className="footer__shape-solid-left wow slideInLeft"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <Image className="sway_Y__animation" src={shape_2} alt="shape" />
      </div>
      <div
        className="footer__shape-solid-right wow slideInRight"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
      >
        <Image className="sway_Y__animation" src={shape_3} alt="shape" />
      </div>
      <div
        className="footer__shape-regular-right wow slideInRight"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <Image src={shape_4} alt="shape" />
      </div>
      <div className="footer__shadow-shape">
        <Image src={shape_5} alt="shodow" />
      </div>
      <div className="container">
        <div className="footer__wrp pt-80 pb-50">
          <div
            className="footer__item mt-30 item-big wow fadeInUp"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <Link href="/" className="logo mb-30">
              <Image src={logo} alt="image" />
            </Link>
            <p>Empowering Industries through Innovative Software Solutions.</p>
            <div className="social-icon">
              <Link
                href="https://www.facebook.com/ifourtechnolab/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="https://x.com/consultifour" target="_blank">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ifourtechnolab"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link
                href="https://www.instagram.com/ifourtechnolab/"
                target="_blank"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div
            className="footer__item item-sm wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h3 className="footer-title">OUR EXPERTISE</h3>
            <ul>
              <li>
                <Link href="/software-development-technologies">
                  <i className="fa-regular fa-angles-right me-1"></i>{" "}
                  Technologies
                </Link>
              </li>
              <li>
                <Link href="/case-study">
                  <i className="fa-regular fa-angles-right me-1"></i> Showcase
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <i className="fa-regular fa-angles-right me-1"></i> Blog
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-sm wow fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <h3 className="footer-title">Services</h3>
            <ul>
              <li>
                <Link href="/about-us">
                  <i className="fa-regular fa-angles-right me-1"></i> About Us
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use">
                  <i className="fa-regular fa-angles-right me-1"></i> Terms of
                  Use
                </Link>
              </li>
              <li>
                <Link href="/contact-us-us">
                  <i className="fa-regular fa-angles-right me-1"></i> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big wow fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <h3 className="footer-title">Contact Us</h3>
            <p className="mb-20">
              15 Banyula drive, Old bar - NSW, 2430, Australia
            </p>
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
                  <h5>Phone Call:</h5>
                  <a href="tel:+61489931698">+61 4 8993 1698</a>
                </div>
              </li>
              <li>
                <i className="fa-regular fa-envelope"></i>
                <div className="info">
                  <h5>Email:</h5>
                  <a href="mailto:info@ifourtechnolab.com.au">
                    info@ifourtechnolab.com.au
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-center">
            <p
              className="wow fadeInDown"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              &copy; 2023 - 2025{" "}
              <Link href="/" target="_blank">
                iFour Technolab Pty. Ltd.
              </Link>{" "}
              all the rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
