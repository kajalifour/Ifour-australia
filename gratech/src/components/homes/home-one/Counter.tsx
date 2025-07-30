import Count from "@/components/common/Count"
import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/counter-icon1.png"
import icon_2 from "@/assets/images/icon/counter-icon2.png"
import icon_3 from "@/assets/images/icon/counter-icon3.png"
import icon_4 from "@/assets/images/icon/counter-icon4.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   count: number;
   title: string;
}

const counter_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      count: 12,
      title: "Years of Technology<br />Experience"
   },
   {
      id: 2,
      icon: icon_2,
      count: 95,
      title: "Success Ratio"
   },
   {
      id: 3,
      icon: icon_3,
      count: 120,
      title: "Creative nerds under <br/>one Roof"
   },
   {
      id: 4,
      icon: icon_4,
      count: 400,
      title: "Projects Delivered"
   },
];

const Counter = () => {
   return (
      <section className="counter-area">
         <div className="container">
            <div className="counter__wrp gradient-bg">
               {counter_data.map((item) => (
                  <div key={item.id} className="counter__item wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1000ms">
                     <Image src={item.icon} alt="icon" />
                     <div className="content">
                        <h3><span className="count"><Count number={item.count} /></span>+</h3>
                        <p className="text-white" dangerouslySetInnerHTML={{ __html: item.title }}></p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Counter
