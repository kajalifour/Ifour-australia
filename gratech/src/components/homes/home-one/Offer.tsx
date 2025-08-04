'use client'

import Image from "next/image"
import Link from "next/link"
import { JSX } from "react"

import shape_1 from "@/assets/images/shape/offer-shadow-shape.png"
import industry01 from "@/assets/images/industry/industry-01.webp"
import industry02 from "@/assets/images/industry/industry-02.webp"
import industry03 from "@/assets/images/industry/industry-03.webp"
import industry04 from "@/assets/images/industry/industry-04.webp"
import industry05 from "@/assets/images/industry/industry-05.webp"
import industry06 from "@/assets/images/industry/industry-06.webp"
import industry07 from "@/assets/images/industry/industry-07.webp"
import industry08 from "@/assets/images/industry/industry-08.webp"
import industry09 from "@/assets/images/industry/industry-09.webp"
import industry10 from "@/assets/images/industry/industry-10.webp"
import industry11 from "@/assets/images/industry/industry-11.webp"
import contactIcon from "@/assets/images/icon/about-icon2.png"

interface DataType {
   id: number;
   icon?: JSX.Element;
   title: string;
   link?: string;
}

const offer_data: DataType[] = [
   {
      id: 1,
      icon: (<><Image src={industry01} alt="Healthcare" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Healthcare",
   },
   {
      id: 2,
      icon: (<><Image src={industry02} alt="Finance" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Finance",
   },
   {
      id: 3,
      icon: (<><Image src={industry03} alt="Education" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Education",
   },
  {
  id: 4,
      icon: (<><Image src={industry04} alt="E-commerce" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "E-commerce",
},
   {
      id: 5,
      icon: (<><Image src={industry05} alt="Manufacturing" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Manufacturing",
   },
   {
      id: 6,
      icon: (<><Image src={industry06} alt="Real Estate" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Real Estate",
   },
    {
      id: 7,
      icon: (<><Image src={industry07} alt="Transportation" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Transportation",
   },
   {
      id: 8,
      icon: (<><Image src={industry08} alt="Entertainment" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Entertainment",
   },
   {
      id: 9,
      icon: (<><Image src={industry09} alt="Technology" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Technology",
   },
   {
      id: 10,
      icon: (<><Image src={industry10} alt="Retail" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Retail",
   },
   {
      id: 11,
      icon: (<><Image src={industry11} alt="Logistics" width={60} height={60} style={{ background: 'transparent', borderRadius: '50%', objectFit: 'cover' }} /></>),
      title: "Logistics",
   },
   {
      id: 12,
      title: "Contact Us",
      link: "/contact",
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
                     <div className="offer__item" style={{ 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '20px',
                        transition: 'all 0.3s ease',
                        cursor: item.link ? 'pointer' : 'default',
                        isolation: 'isolate',
                        borderRadius: '0'
                     }}>
                        {item.link ? (
                           <Link href={item.link} style={{ 
                              textDecoration: 'none', 
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              width: '100%',
                              height: '100%',
                              justifyContent: 'center'
                           }}>
                              {item.icon && <div className="offer__icon" style={{ marginBottom: '15px' }}>{item.icon}</div>}
                              <h4 className="text-white mt-20" style={{ margin: 0, textAlign: 'center' }}>{item.title}</h4>
                           </Link>
                        ) : (
                           <>
                              {item.icon && <div className="offer__icon" style={{ marginBottom: '15px' }}>{item.icon}</div>}
                              <h4 className="text-white mt-20" style={{ margin: 0, textAlign: 'center' }}>{item.title}</h4>
                           </>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <style jsx>{`
            .offer__item {
               position: relative;
               z-index: 1;
            }
            .offer__item:hover {
               z-index: 2;
            }
            .offer__item:hover .offer__icon {
               transform: rotateY(180deg);
            }
            .offer__item:not(:hover) .offer__icon {
               transform: rotateY(0deg);
            }
         `}</style>
      </section>
   )
}

export default Offer
