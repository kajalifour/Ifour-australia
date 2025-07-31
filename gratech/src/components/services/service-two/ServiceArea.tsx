import service_data from "@/data/ServiceData"
import Image from "next/image"
import Link from "next/link"



const ServiceArea = () => {
   return (
      <section className="service-inner-area pt-120 pb-120">
         <div className="container">
            <div className="row g-4">
               {service_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="service-two__item">
                        <div className="image">
                           <Image src={item.thumb ? item.thumb : ""} alt="image" />
                        </div>
                        <div className="service-two__content">
                           <div className="icon">
                              <Image src={item.icon} alt="icon" />
                           </div>

                           <h4><Link href="/service-details" className="primary-hover">Angular Development</Link></h4>
                           <p>{item.desc}</p>
                           <Link className="read-more-btn" href="/service-details">Read More <i
                              className="fa-regular fa-arrow-right-long"></i></Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default ServiceArea
