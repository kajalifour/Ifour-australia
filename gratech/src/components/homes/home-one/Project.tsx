"use client"
import project_data from "@/data/ProjectData"
import Image from "next/image"

import shape_2 from "@/assets/images/icon/section-title.png"

const Project = () => {
   // Get project data
   const project_items = project_data.filter((items) => items.page === "home_1");

   return (
      <section id="project-section" className="service-area pt-120 pb-120">
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_2} alt="icon" />
                     What We DO
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Our</span> Project
                  </h2>
               </div>
            </div>
            <div className="row g-4">
               {project_items.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                                                 <div className="project__item position-relative overflow-hidden rounded-3 project-hover-container" style={{ height: '300px' }}>
                         <div className="project__image w-100 h-100">
                            <Image src={item.image} alt={item.title} fill className="object-fit-cover" />
                         </div>
                         <div className="project__overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4" 
                              style={{
                                 background: 'linear-gradient(135deg, rgba(12, 121, 147, 0.9), rgba(15, 121, 147, 0.9), rgba(17, 19, 20, 0.9))',
                                 transform: 'translateY(-100%)',
                                 transition: 'transform 0.3s ease-in-out',
                                 cursor: 'pointer',
                                 boxShadow: '0 0 25px rgba(15, 122, 149, 0.4)'
                              }}>
                           <h4 className="text-white mb-3 fw-bold fs-4">{item.title}</h4>
                           <p className="text-white mb-0 fs-6 lh-base">{item.desc}</p>
                        </div>
                        <style jsx>{`
                           .project-hover-container:hover .project__overlay {
                              transform: translateY(0%) !important;
                           }
                        `}</style>
                      </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Project 