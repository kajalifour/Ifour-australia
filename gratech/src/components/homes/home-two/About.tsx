import Image from "next/image"
import Link from "next/link"

import about_thumb1 from "@/assets/images/about/about-two-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-two-image2.png"
import shape_1 from "@/assets/images/shape/about-two-shape.png"
import shape_2 from "@/assets/images/shape/about-two-dot.png"
import shape_3 from "@/assets/images/shape/about-circle-helper.png"
import shape_4 from "@/assets/images/shape/about-two-circle.png"
import shape_5 from "@/assets/images/about/singature.png"
import shape_6 from "@/assets/images/about/singature-light.png"

interface StyleType{
   style:boolean;
}

const About = ({style}:StyleType) => {
   return (
      <section id="about-section"  className="about-two-area pt-120">
         <div className="about-two__shape">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="row g-4">
               <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="about-two__left-item">
                     <div className="dots">
                        <Image className="sway_Y__animation" src={shape_2} alt="shape" />
                     </div>
                     <div className="shape-halper">
                        <Image className="sway__animation" src={shape_3}
                           alt="shape" />
                     </div>
                     <div className="image big-image">
                        <Image src={about_thumb1} alt="image" />
                     </div>
                     <div className="image sm-image">
                        <Image src={about_thumb2} alt="image" />
                     </div>
                     <div className="circle-shape">
                        <Image className="animation__rotate" src={shape_4}
                           alt="shape" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-6">
                  <div className="section-header mb-40">
                     <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95"
                              strokeWidth="1.5" />
                           <mask id="path-2-inside-1_668_146" fill="white">
                              <path
                                 d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
                           </mask>
                           <path
                              d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                              fill="#0f7a95" mask="url(#path-2-inside-1_668_146)" />
                        </svg>
                        WHO WE ARE
                     </h5>
                     <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Ensuring Your
                        Success Through Reliable IT Solutions </h2>
                     <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">Aonsectetur
                        adipiscing elit aenean scelerisque augue vitae consequat aisque eget congue
                        velit in cursus sodales the
                        turpis euismod quis sapien euismod
                        quis sapien the condimentum nec lorem nulla augue.</p>
                  </div>
                  <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <ul>
                        <li><i className="fa-solid fa-check"></i>Technology Consultancy</li>
                        <li><i className="fa-solid fa-check"></i>We Provide best services</li>
                     </ul>
                     <ul>
                        <li><i className="fa-solid fa-check"></i>Maintenance And Support</li>
                        <li><i className="fa-solid fa-check"></i>Requirements Gathering</li>
                     </ul>
                  </div>
                  <div className="about__info mt-50 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                     <Link href="/about" className="btn-one">About Us <i
                        className="fa-regular fa-arrow-right-long"></i></Link>
                     <Image src={style?shape_6:shape_5} alt="singature" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About
