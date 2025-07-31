import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/service-bg-shape.png"

const ServiceArea = () => {
   return (
      <section className="service-area pt-120 pb-120">
         <div className="service__shape wow slideInRight">
            <Image className="sway_Y__animation" src={shape_1} alt="shape" />
         </div>
         <div className="container">
            <div className="row g-4">
               {service_data.filter((items) => items.page === "home_1").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6 wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1000ms">
                     <div className="service__item">

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

export default ServiceArea
