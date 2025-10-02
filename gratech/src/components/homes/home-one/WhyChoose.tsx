import Image from "next/image"

import about_thumb1 from "@/assets/images/about/about-image1.jpg"
import about_thumb2 from "@/assets/images/about/about-image2.png"
import shape_1 from "@/assets/images/shape/about-line.png"
import shape_2 from "@/assets/images/shape/about-circle.png"
import shape_3 from "@/assets/images/icon/section-title.png"

const WhyChoose = () => {

   return (
      <div>
         <section id="why-ifour-section" className="about-area sub-bg pt-120 pb-100">
            <div className="about__shape wow slideInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
               <Image src={shape_1} alt="shape" />
            </div>
            <div className="container">
               <div className="row g-4">
                  <div className="col-xl-6">
                     <div className="section-header pt-120">
                        <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                           <Image className="me-1 filter-brightness" src={shape_3} alt="icon" />
                           ABOUT iFour Technolab
                        </h5>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                           <span className="primary-color">Why Choose Us as Your</span> Software Development Agency?
                        </h2>
                        <p className="wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                           At iFour Technolab, what differentiates us from others is our steadfast dedication to innovation and making sustainable success a goal that our clients can easily achieve. With our focus set on this objective, we deliver value-driven solutions and services to clients that act as catalysts for long-term prosperity. Our highlights include:
                        </p>
                     </div>
                  </div>
                  <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="about__left-item">
                        <div className="image big-image">
                           <Image src={about_thumb1} alt="image" />
                        </div>
                        <div className="image sm-image">
                           <Image src={about_thumb2} alt="image" />
                        </div>
                        <div className="circle-shape">
                           <Image src={shape_2} alt="shape" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row g-4 mt-4">
                  <div className="col-xl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="feature-item">
                        <div className="d-flex align-items-start">
                           <div className="icon me-3">
                              <i className="fa-solid fa-users-gear primary-color fa-3x"></i>
                           </div>
                           <div className="content">
                              <h4 className="mb-3 fw-semibold primary-color">Expert Team</h4>
                              <p>We have assembled a team of 120+ veteran software developers capable of building top-grade bespoke software solutions based on your specifications.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                     <div className="feature-item">
                        <div className="d-flex align-items-start">
                           <div className="icon me-3">
                              <i className="fa-solid fa-headset primary-color fa-3x"></i>
                           </div>
                           <div className="content">
                              <h4 className="mb-3 fw-semibold primary-color">Round-the-Clock Support</h4>
                              <p>We have a diligent tech support team that is always available for hands-on support, responds to client questions and queries, and addresses them.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                     <div className="feature-item">
                        <div className="d-flex align-items-start">
                           <div className="icon me-3">
                              <i className="fa-solid fa-microchip primary-color fa-3x"></i>
                           </div>
                           <div className="content">
                              <h4 className="mb-3 fw-semibold primary-color">Modern Tech Expertise</h4>
                              <p>We remain on the cutting edge of technology, adopting new trends and advancements as they unfold. This up-to-date knowledge and our extensive industry expertise enable us to build unique solutions.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default WhyChoose