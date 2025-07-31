import Image from "next/image"
import service_data from "@/data/ServiceData"
import Link from "next/link"

import shape_2 from "@/assets/images/icon/section-title.png"

const Service = () => {
   return (
      <section className="service-three-area pt-120 pb-120">

         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape_2} alt="icon" />
                  Smart, Scalable Tech
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Proven Technology Solutions That Drive Results
                  Solution</h2>
            </div>
            <div className="row g-4">
               {service_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <div className="service-three__item">
                        <div className="service-three__image image">
                           <Image src={item.thumb ? item.thumb : ""} alt="image" />
                        </div>
                        <div className="service-three__content">
                           <div className="icon">
                              <Image src={item.icon} alt="icon" />
                           </div>
                           <h4>{item.title}</h4>
                        </div>
                        <div className="service-three__up-content text-center">
                           <div className="icon">
                              <Image src={item.icon} alt="icon" />
                           </div>
                           <h4><Link href="/service-single" className="text-white mt-25 mb-15">{item.title}</Link>
                           </h4>
                           <p className="text-white">{item.desc}</p>
                           <Link className="mt-20 read-more-btn text-white" href="/service-single">Read More <i
                              className="fa-regular fa-arrow-right-long text-white"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Service
