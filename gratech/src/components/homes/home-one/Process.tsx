import Image, { StaticImageData } from "next/image";

import img_1 from "@/assets/images/process/process-image1.png"
import img_2 from "@/assets/images/process/process-image2.png"
import img_3 from "@/assets/images/process/process-image3.png"
import shape from "@/assets/images/icon/section-title.png"
import shape_2 from "@/assets/images/process/process-arry.png"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   desc: string;
}

const process_data: DataType[] = [
   {
      id: 1,
      img: img_1,
      title: "Plan",
      desc: "We gather requirements and define your goals clearly. Concepts are mapped to create a solid foundation.",
   },
   {
      id: 2,
      img: img_2,
      title: "Design",
      desc: "We craft wireframes and interactive prototypes. Focused on usability and aligned with your vision.",
   },
   {
      id: 3,
      img: img_3,
      title: "Build",
      desc: "Developers turn designs into robust, scalable code. Agile methods ensure flexibility and speed.",
   },
   {
      id: 4,
      img: img_2,
      title: "Validate",
      desc: "We test thoroughly and collect feedback. Bugs are fixed, and performance is fine-tuned.",
   },
   {
      id: 5,
      img: img_1,
      title: "Launch",
      desc: "The product is deployed smoothly into your environment. Final checks ensure everything runs seamlessly.",
   },
   {
      id: 6,
      img: img_2,
      title: "Support, Maintenance & Assistance",
      desc: "Post-launch support ensures stability and updates. We’re here for continuous improvement and care.",
   }
];


const Process = () => {
   return (
      <section className="process-area pt-120 pb-120">
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <Image className="me-1" src={shape} alt="icon" />
                  Work Process
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                  <span style={{ color: '#0f7a95' }}>Our Software Development Process:</span> How we work
               </h2>
            </div>
            <div className="row g-4">
               {process_data.map((item) => (
                  <div key={item.id} className="col-lg-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                     <div className="process__item mb-100">
                        <div className="process-arry bobble__animation">
                           <Image src={shape_2} alt="arry-icon" />
                        </div>
                        <div className="process__image">
                           <Image src={item.img} alt="image" />
                           <span className="process-number">{item.id}</span>
                        </div>
                        <div className="process__content">
                           <h4 className="mt-25 mb-10">{item.title}</h4>
                           <p>{item.desc}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Process
