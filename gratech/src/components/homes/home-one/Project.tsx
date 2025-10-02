"use client"
import project_data from "@/data/ProjectData"
import Image from "next/image"

import shape_1 from "@/assets/images/shape/service-three-shape.png"
import shape_2 from "@/assets/images/icon/section-title.png"

const Project = () => {
   const project_items = project_data.filter((items) => items.page === "home_1");

   return (
      <section id="project-section" className="service-area sub-bg pt-120 pb-110">
         <div className="service-three__shape">
            <Image className="sway__animationX" src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1 filter-brightness" src={shape_2} alt="icon" />
                     What We DO
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span className="primary-color">Our</span> Project
                  </h2>
               </div>
            </div>
            <div className="row g-4">
               {project_items.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <div className="project__item position-relative overflow-hidden rounded-3 project-hover-container" style={{ height: '300px' }}>
                        <div className="project__image w-100 h-100">
                           <Image
                           src={item.image}
                           alt={item.title}
                           fill
                           className="object-fit-cover"
                           />
                        </div>
                        <div className="project__overlay">
                           <h4 className="text-white mb-3 fw-bold fs-4">{item.title}</h4>
                           <p className="text-white mb-0 fs-6 lh-base">{item.desc}</p>
                        </div>
                      </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Project 