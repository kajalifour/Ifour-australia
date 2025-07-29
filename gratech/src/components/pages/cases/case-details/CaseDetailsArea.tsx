import Image from "next/image"

import thumb_1 from "@/assets/images/case/case-details-image1.jpg"
import thumb_2 from "@/assets/images/case/case-details-image2.jpg"
import thumb_3 from "@/assets/images/case/case-details-image3.jpg"

interface ContentDataType {
   title_1: string;
   title_2: string;
   title_3: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   list: string[];
}

const case_content: ContentDataType = {
   title_1: "Mobile App Development Solution",
   title_2: "Our Challenge",
   title_3: "Project Overview",
   desc_1: "Nulla faucibus malesuada. In placerat feugiat eros ac tempor. Integer euismod massa sapien, et consequat enim laoreet et. Nulla sit amet nisi dapibus, gravida turpis sit amet, accumsan nisl. Fusce vel semper risus. Morbi congue eros sagittis, sodales turpis venenatis, iaculis dui. Proin ac purus sed nibh dapibus neque. scelerisque sed quis ante. Suspendisse potenti. Mauris vitae sagittis diam. Vivamus imperdiet nulla ut nisi fermentum, vitae euismod mi egestas. In quis auctor magna. Maecenas sodales nunc tellus, non iaculis est iaculis placerat. Morbi suscipit,",
   desc_2: "Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id.",
   desc_3: "Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum mauris id nunc molestie, ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et, venenatis tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex molestie id.",
   list: ["Maintenance And Support", "Technology Consultancy", "We Provide best services", "Maintenance And Support", "Requirements Gathering", "Technology Consultancy",],
}

const { title_1, title_2, title_3, desc_1, desc_2, desc_3, } = case_content;

const CaseDetailsArea = () => {
   return (
      <section className="case-single-area pt-120 pb-120">
         <div className="container">
            <div className="case-single__item">
               <div className="image">
                  <Image src={thumb_1} alt="image" />
               </div>
               <h3 className="case-single__title mt-40 mb-30">{title_1}</h3>
               <p>{desc_1}</p>
               <ul className="case-date py-4 bor-top bor-bottom mt-40">
                  <li><span>Completed Date:</span> 23-12-2023</li>
                  <li><span>Category:</span> Technology</li>
                  <li><span>Client:</span> Robert Fox</li>
                  <li><span>Location:</span> fot kde, USA</li>
               </ul>
               <h3 className="case-single__title mt-40 mb-30">{title_2}</h3>
               <p>{desc_2}</p>
               <div className="case-challenge-list mt-30">
                  <ul className="case-challenge">
                     <li className="mb-3"><i className="fa-solid fa-check"></i>Technology Consultancy</li>
                     <li><i className="fa-solid fa-check"></i>Maintenance And Support</li>
                  </ul>
                  <ul className="case-challenge">
                     <li className="mb-3"><i className="fa-solid fa-check"></i>We Provide best services</li>
                     <li><i className="fa-solid fa-check"></i>Requirements Gathering</li>
                  </ul>
                  <ul className="case-challenge">
                     <li className="mb-3"><i className="fa-solid fa-check"></i>Maintenance And Support</li>
                     <li><i className="fa-solid fa-check"></i>Technology Consultancy</li>
                  </ul>
               </div>
               <h3 className="case-single__title mt-40 mb-30">{title_3}</h3>
               <p>{desc_3}</p>
            </div>
            <div className="row g-4 mt-10">
               <div className="col-md-6">
                  <div className="image">
                     <Image src={thumb_2} alt="image" />
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="image">
                     <Image src={thumb_3} alt="image" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CaseDetailsArea
