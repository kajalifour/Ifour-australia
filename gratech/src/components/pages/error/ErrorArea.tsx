import Image from "next/image"
import Link from "next/link"

import img from "@/assets/images/error/404.png"

const ErrorArea = () => {
   return (
      <section className="error-area pt-120 pb-120">
         <div className="container">
            <div className="error__item">
               <div className="image mb-60">
                  <Image src={img} alt="image" />
               </div>
               <h2>Whoops! This Page got Lost
                  in converstion</h2>
               <div className="btn-two mt-50">
                  <span className="btn-circle">
                  </span>
                  <Link href="/" className="btn-one">Go Back Home</Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ErrorArea
