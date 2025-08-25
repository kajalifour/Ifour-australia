"use client";
import { useEffect, useState } from "react";
import Image from "next/image"
import faqdata from "@/data/FaqData";

import shape_2 from "@/assets/images/shape/faq-line.png"
import faq_thumb from "@/assets/images/faq/faq-image.png"

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

interface StyleType {
   style_2: boolean;
}

const Faq = ({ style_2 }: StyleType) => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   const faq_data = faqdata.filter((items) => items.page === "home_2")

   useEffect(() => {
      const updatedFaq = faq_data.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(updatedFaq);
   }, [faq_data]);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq) =>
            faq.id === faqId
               ? { ...faq, showAnswer: !faq.showAnswer }
               : { ...faq, showAnswer: false }
         )
      );
   };


   return (
      <section id="faq-section" className="faq-area sub-bg pt-120 pb-120">
         <div className="container">
            <div className="row g-4">
               <div className="col-lg-5 pe-2 pe-lg-5">
                  <div className="faq__image image wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                     <div className="faq__line sway__animation">
                        <Image src={shape_2} alt="image" />
                     </div>
                     <Image src={faq_thumb} alt="image" />
                  </div>
               </div>
               <div className="col-lg-7 mt-60">
                  <div className="section-header mb-40">
                     <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <rect x="0.75" y="0.747803" width="18.5" height="10.5" rx="5.25" stroke="#0f7a95"
                              strokeWidth="1.5" />
                           <mask id="path-2-inside-1_1120_294" fill="white">
                              <path
                                 d="M3 5.9978C3 3.78866 4.79086 1.9978 7 1.9978H13C15.2091 1.9978 17 3.78866 17 5.9978C17 8.20694 15.2091 9.9978 13 9.9978H7C4.79086 9.9978 3 8.20694 3 5.9978Z" />
                           </mask>
                           <path
                              d="M3 5.9978C3 2.96024 5.46243 0.497803 8.5 0.497803H11.5C14.5376 0.497803 17 2.96024 17 5.9978C17 4.61709 15.2091 3.4978 13 3.4978H7C4.79086 3.4978 3 4.61709 3 5.9978ZM17 5.9978C17 9.03537 14.5376 11.4978 11.5 11.4978H8.5C5.46243 11.4978 3 9.03537 3 5.9978C3 7.37851 4.79086 8.4978 7 8.4978H13C15.2091 8.4978 17 7.37851 17 5.9978ZM3 9.9978V1.9978V9.9978ZM17 1.9978V9.9978V1.9978Z"
                              fill="#0f7a95" mask="url(#path-2-inside-1_1120_294)" />
                        </svg>
                        FAQ
                     </h5>
                     <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Most Common
                        Question?</h2>
                  </div>
                  <div className="faq__item">
                     <div className="accordion" id="accordionExample">
                        {faqData.map((item) => (
                           <div key={item.id} className={`accordion-item wow fadeInDown shadow border-none ${style_2 ? "dark-mode" : ""}`} data-wow-delay="00ms"
                              data-wow-duration="1500ms">
                              <h2 className="accordion-header" id={`headingOne-${item.id}`}>
                                 <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} type="button" onClick={() => toggleAnswer(item.id)} >
                                    {item.title}
                                 </button>
                              </h2>
                              <div id="collapseOne" className={`accordion-collapse collapse ${item.showAnswer ? "show" : ""}`} >
                                 <div className="accordion-body"><p>{item.desc}</p></div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Faq
