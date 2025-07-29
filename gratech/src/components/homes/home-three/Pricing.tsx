import Image from "next/image"
import pricing_data from "@/data/PricingData"
import Link from "next/link"

import shape_1 from "@/assets/images/shape/pricing-shape-up.png"
import shape_2 from "@/assets/images/shape/pricing-shape-down.png"
import shape_3 from "@/assets/images/shape/pricing-shape.png"
import shape_4 from "@/assets/images/icon/section-title.png"
import shape_5 from "@/assets/images/shape/pricing-item-shape.png"

interface StyleType {
   style: boolean;
}

const Pricing = ({ style }: StyleType) => {
   return (
      <section id="pricing-section" className="pricing-area pt-120 pb-120">
         {!style &&
            <>
               <div className="pricing__shape-up wow slideInLeft d-none d-sm-block" data-wow-delay="00ms"
                  data-wow-duration="1500ms">
                  <Image className="sway_Y__animationY" src={shape_1} alt="image" />
               </div>
               <div className="pricing__shape-down wow slideInLeft d-none d-sm-block" data-wow-delay="200ms"
                  data-wow-duration="1500ms">
                  <Image className="sway_Y__animation" src={shape_2} alt="image" />
               </div>
               <div className="pricing__shape">
                  <Image className="sway_Y__animationY" src={shape_3} alt="image" />
               </div>
            </>}
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape_4} alt="icon" />
                  PRICE PLANS
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Flexible Pricing Plans
               </h2>
            </div>
            <div className="row g-4">
               {pricing_data.filter((items) => items.page === "home_3").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                     <div className="pricing__item">
                        <div className="item-shape">
                           <Image src={shape_5} alt="shape" />
                        </div>
                        <div className="pricing-head">
                           <div>
                              <h4 className="text-white mb-10">{item.title}</h4>
                              <h2>${item.price}<span>/monthly</span></h2>
                           </div>
                           <div className="pricing-icon" style={{ backgroundImage: `url(/assets/images/shape/pricing-icon-bg.png)` }}>
                              <Image src={item.icon} alt="icon" />
                           </div>
                        </div>
                        <ul>
                           {item.list.map((list, i) => (
                              <li key={i}>{list}</li>
                           ))}
                        </ul>
                        <Link href="#" className="btn-one d-block text-center">choose Plan <i
                           className="fa-regular fa-arrow-right-long"></i></Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Pricing
