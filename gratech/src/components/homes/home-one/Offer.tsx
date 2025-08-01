import Image from "next/image"
import Link from "next/link"
import { JSX } from "react"

import shape_1 from "@/assets/images/shape/offer-shadow-shape.png"
import shape_4 from "@/assets/images/icon/section-title.png"
import shape_5 from "@/assets/images/shape/offter-item-shape-top.png"
import shape_6 from "@/assets/images/shape/offter-item-shape-bottom.png"
import industryIcon1 from "@/assets/images/icon/about-icon1.png"
import industryIcon2 from "@/assets/images/icon/about-icon2.png"
import industryIcon3 from "@/assets/images/icon/about-three-icon1.png"
import industryIcon4 from "@/assets/images/icon/about-three-icon2.png"
import industryIcon5 from "@/assets/images/icon/about-three-icon3.png"
import industryIcon6 from "@/assets/images/icon/service-icon1.png"
import industryIcon7 from "@/assets/images/icon/service-icon2.png"
import industryIcon8 from "@/assets/images/icon/service-icon3.png"
import industryIcon9 from "@/assets/images/icon/service-two-icon1.png"
import industryIcon10 from "@/assets/images/icon/service-two-icon2.png"
import industryIcon11 from "@/assets/images/icon/service-two-icon3.png"
import contactIcon from "@/assets/images/icon/counter-icon1.png"

interface DataType {
   id: number;
   icon: JSX.Element;
   title: string;
}

const offer_data: DataType[] = [
   {
      id: 1,
      icon: (<><Image src={industryIcon1} alt="Healthcare" width={36} height={36} /></>),
      title: "Healthcare",
   },
   {
      id: 2,
      icon: (<><Image src={industryIcon2} alt="Finance" width={36} height={36} /></>),
      title: "Finance",
   },
   {
      id: 3,
      icon: (<><Image src={industryIcon3} alt="Education" width={36} height={36} /></>),
      title: "Education",
   },
  {
  id: 4,
      icon: (<><Image src={industryIcon4} alt="E-commerce" width={36} height={36} /></>),
      title: "E-commerce",
},
   {
      id: 5,
      icon: (<><Image src={industryIcon5} alt="Manufacturing" width={36} height={36} /></>),
      title: "Manufacturing",
   },
   {
      id: 6,
      icon: (<><Image src={industryIcon6} alt="Real Estate" width={36} height={36} /></>),
      title: "Real Estate",
   },
    {
      id: 7,
      icon: (<><Image src={industryIcon7} alt="Transportation" width={36} height={36} /></>),
      title: "Transportation",
   },
   {
      id: 8,
      icon: (<><Image src={industryIcon8} alt="Entertainment" width={36} height={36} /></>),
      title: "Entertainment",
   },
   {
      id: 9,
      icon: (<><Image src={industryIcon9} alt="Technology" width={36} height={36} /></>),
      title: "Technology",
   },
   {
      id: 10,
      icon: (<><Image src={industryIcon10} alt="Retail" width={36} height={36} /></>),
      title: "Retail",
   },
   {
      id: 11,
      icon: (<><Image src={industryIcon11} alt="Logistics" width={36} height={36} /></>),
      title: "Logistics",
   },
   {
      id: 12,
      icon: (<><Image src={contactIcon} alt="Contact Us" width={36} height={36} /></>),
      title: "Contact Us",
   },
];

const Offer = () => {
   return (
      <section className="offer-area secondary-bg pt-120 pb-200">
         <div className="offer__shadow wow fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
            <Image src={shape_1} alt="shadow" />
         </div>


         <div className="container">
            <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
               <div className="section-header">
                  <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <Image className="me-1" src={shape_4} alt="icon" />
                     Tech Talent
                  </h5>
                  <h2 className="text-white wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <span style={{ color: '#0f7a95' }}>Industry</span> We Serve
                  </h2>
               </div>
               <Link href="/pricing" className="btn-one wow fadeInUp" data-wow-delay="200ms"
                  data-wow-duration="1500ms">Explore
                  More <i className="fa-regular fa-arrow-right-long"></i></Link>
            </div>
            <div className="row g-4">
               {offer_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 wow bounceInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                     <div className="offer__item">
                        <div className="shape-top">
                           <Image src={shape_5} alt="shape" />
                        </div>
                        <div className="shape-bottom">
                           <Image src={shape_6} alt="shape" />
                        </div>
                        <div className="offer__icon">{item.icon}</div>
                        <h4 className="text-white mt-20">{item.title}</h4>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Offer
