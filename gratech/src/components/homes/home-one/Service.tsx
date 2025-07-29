import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/service-bg-shape.png"
import shape_2 from "@/assets/images/icon/section-title.png"
import shape_3 from "@/assets/images/shape/service-item-shape.png"

const Service = () => {
   return (
      <section id="service-section" className="service-area pt-120 pb-120">
         <div className="service__shape wow slideInRight">
            <Image className="sway_Y__animation" src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_2} alt="icon" />
                     What We OFFER
                  </h5>
                  <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">Excellent IT
                     Services</h2>
               </div>
               <a href="service.html" className="btn-one wow fadeInUp" data-wow-delay="200ms"
                  data-wow-duration="1500ms">View All
                  Services <i className="fa-regular fa-arrow-right-long"></i></a>
            </div>
            <div className="row g-4">
               {service_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1000ms">
                     <div className="service__item">
                        <div className="service-shape">
                           <Image src={shape_3} alt="shape" />
                        </div>
                        <div className="service__icon">
                           <Image src={item.icon} alt="icon" />
                        </div>
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p>{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Service
