"use client"
import VideoPopup from "@/modals/VideoPopup";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import { useEffect, useState } from "react";
import Image from "next/image"
import faqdata from "@/data/FaqData";

import service_img_1 from "@/assets/images/service/service-single-image1.jpg"
import service_img_2 from "@/assets/images/service/service-single-image2.jpg"

interface ContentDataType {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   list: string[];
}

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const service_content: ContentDataType = {
   title_1: "IT Management",
   title_2: "Benefits With Our Service",
   title_3: "Most Comment Question?",
   desc_1: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
   desc_2: "lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.",
   desc_3: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
   desc_4: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
   list: ["Technology Consultancy", "Maintenance And Support", "We Provide best services", "Requirements Gathering", "Business Growth",],
}

const { title_1, title_2, title_3, desc_1, desc_2, desc_3, desc_4, list, } = service_content;

const ServiceDetailsArea = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   const [faqData, setFaqData] = useState<DataType[]>([]);

   const faq_data = faqdata.filter((items) => items.page === "home_2")

   useEffect(() => {
      const updatedFaq = faq_data.map((faq, index) => ({
         ...faq,
         showAnswer: index === 0,
      }));
      setFaqData(updatedFaq);
   }, []);

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
      <>
         <section className="service-single-area pt-120 pb-120">
            <div className="container">
               <div className="row g-4">
                  <div className="col-lg-8 order-2 order-lg-1">
                     <div className="service-single__left-item">
                        <div className="image mb-50">
                           <Image src={service_img_1} alt="image" />
                           <div className="service-single__video-btn">
                              <div className="video-btn video-pulse wow fadeIn" data-wow-delay="200ms"
                                 data-wow-duration="1500ms">
                                 <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="video-popup"><i
                                    className="fa-solid fa-play"></i></a>
                              </div>
                           </div>
                        </div>
                        <h3 className="title mb-30">{title_1}</h3>
                        <p className="mb-20">{desc_1}</p>
                        <p>{desc_2}</p>
                        <div className="row g-5 mt-40 mb-40 align-items-center">
                           <div className="col-lg-5">
                              <h4 className="mb-20">{title_2}</h4>
                              <ul>
                                 {list.map((list, i) => (
                                    <li key={i} className="mb-15"><i className="fa-solid fa-check"></i>{list}</li>
                                 ))}
                              </ul>
                           </div>
                           <div className="col-lg-7">
                              <div className="image">
                                 <Image src={service_img_2} alt="image" />
                              </div>
                           </div>
                        </div>
                        <p className="mb-40">{desc_3}</p>
                        <h3 className="title mb-30">{title_3}</h3>
                        <p className="mb-30">{desc_4}</p>
                        <div className="accordion" id="accordionExample">
                           {faqData.map((item) => (
                              <div key={item.id} className="accordion-item wow fadeInDown shadow border-none" data-wow-delay="00ms"
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
                  <div className="col-lg-4 order-1 order-lg-2">
                     <ServiceDetailsSidebar />
                  </div>
               </div>
            </div>
         </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId="eEzD-Y97ges"
         />
      </>
   )
}

export default ServiceDetailsArea
