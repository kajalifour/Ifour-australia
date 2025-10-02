import Image from "next/image"
import Link from "next/link"

import about_thumb1 from "@/assets/images/about/about-two-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-two-image2.png"
import shape_1 from "@/assets/images/shape/about-two-shape.png"
import shape_2 from "@/assets/images/shape/about-two-dot.png"
import shape_3 from "@/assets/images/shape/about-circle-helper.png"
import shape_4 from "@/assets/images/shape/about-two-circle.png"

const Case = () => {
   return (
      <section id="benefits-section"  className="about-two-area dark-bg pb-110 pt-120">
         <div className="about-two__shape">
            <Image src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="row g-4">
               <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <div className="about-two__left-item mt-90">
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
                           <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white"
                              strokeWidth="1.5" />
                           <mask id="path-2-inside-1_668_146" fill="white">
                              <path
                                 d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
                           </mask>
                           <path
                              d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                              fill="white" mask="url(#path-2-inside-1_668_146)" />
                        </svg>
                        WHO WE ARE
                     </h5>
                     <h2 className="wow fadeInUp text-white" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <span className="primary-color">Benefits of Working with</span> iFour Technolab
                     </h2>
                     <p className="wow fadeInUp text-white" data-wow-delay="400ms" data-wow-duration="1500ms">
                        When you choose iFour Technolab as your software development partner, you not only get a partner devoted to your success but also become entitled to receive several benefits. Here are a few outlined:
                     </p>
                  </div>
                  <div className="about-two__right-item wow fadeInDown" data-wow-delay="200ms"
                     data-wow-duration="1500ms">
                     <ul>
                        <li className="text-white"><i className="fa-solid fa-check"></i>Fast project kickoff</li>
                        <li className="text-white"><i className="fa-solid fa-check"></i>Fully Tailored Solutions</li>
                         <li className="text-white"><i className="fa-solid fa-check"></i>Agile development approaches</li>
                        <li className="text-white"><i className="fa-solid fa-check"></i>Flexible hiring models</li>
                         <li className="text-white"><i className="fa-solid fa-check"></i>High data security</li>
                        <li className="text-white"><i className="fa-solid fa-check"></i>100% IP rights and ownership</li>
                         <li className="text-white"><i className="fa-solid fa-check"></i>Client satisfaction</li>
                     </ul>
                     {/* <p className="wow fadeInUp text-white" data-wow-delay="400ms" data-wow-duration="1500ms">
                        Are you ready to unleash the full potential of your company with our services? Contact us right away to discuss your business needs.
                     </p> */}
                  </div>
                  <div className="about__info mt-20 wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                     <Link href="/contact-us" className="btn-one">Let&apos;s Get Started<i
                        className="fa-regular fa-arrow-right-long"></i></Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Case
