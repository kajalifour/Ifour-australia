import Image from "next/image"
import Link from "next/link"
import shape_2 from "@/assets/images/shape/quote-shape2.png"

const Cta = () => {
   return (
      <section className="quote-area">
         <div className="container">
            <div className="quote__wrp gradient-bg">

               <div className="quote__shape bobble__animation">
                  <Image src={shape_2} alt="shape" />
               </div>
               <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
                  <div className="section-header">
                     <h5 className="wow fadeInLeft text-white" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <svg className="me-1" width="28" height="12" viewBox="0 0 28 12" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <rect x="0.75" y="0.75" width="18.5" height="10.5" rx="5.25" stroke="white"
                              strokeWidth="1.5" />
                           <rect x="8.75" y="0.75" width="18.5" height="10.5" rx="5.25" fill="white"
                              stroke="white" strokeWidth="1.5" />
                        </svg>
                        GET IN TOUCH
                     </h5>
                     <h2 className="wow fadeInLeft text-white" data-wow-delay="200ms" data-wow-duration="1500ms">We
                        Take Care of
                        Your <br /> Technology</h2>
                  </div>
                  <Link href="/contact" className="btn-one wow fadeInUp" data-wow-delay="200ms"
                     data-wow-duration="1500ms">get A
                     Quote <i className="fa-regular fa-arrow-right-long"></i></Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Cta
