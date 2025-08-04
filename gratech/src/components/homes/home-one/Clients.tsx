import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import shape_1 from "@/assets/images/shape/service-bg-shape.png"
import shape_2 from "@/assets/images/icon/section-title.png"

// Import client logos - you can replace these with actual client logos
import client1 from "@/assets/images/brand/brand-image6.webp"
import client2 from "@/assets/images/brand/brand-image7.webp"
import client3 from "@/assets/images/brand/brand-image8.webp"
import client4 from "@/assets/images/brand/brand-image-9.webp"
import client5 from "@/assets/images/brand/brand-image-10.webp"

interface ClientType {
   id: number;
   logo: any;
   name: string;
}

const client_data: ClientType[] = [
   {
      id: 1,
      logo: client1,
      name: "Spearity™"
   },
   {
      id: 2,
      logo: client2,
      name: "Taglogic"
   },
   {
      id: 3,
      logo: client3,
      name: "Manning Audiology"
   },
   {
      id: 4,
      logo: client4,
      name: "Greater Dandenong Bookkeeping Services"
   },
   {
      id: 5,
      logo: client5,
      name: "WGE EQUIPMENT SOLUTIONS"
   },
];

const repeated_data = [...client_data, ...client_data];

const setting = {
   slidesPerView: 5,
   spaceBetween: 30,
   loop: true,
   autoplay: {
     delay: 2000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".clients__dot",
     clickable: true,
   },
   navigation: {
     nextEl: ".clients__arry-next",
     prevEl: ".clients__arry-prev",
   },
   breakpoints: {
     1200: { slidesPerView: 5 },
     992: { slidesPerView: 4 },
     768: { slidesPerView: 3 },
     575: { slidesPerView: 2 },
     480: { slidesPerView: 1 },
   },
};


const Clients = () => {
   return (
      <>
         <section className="clients-area pt-120 pb-120">
            <div className="container">
               <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                  <div className="section-header">
                     <h5 className="wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <Image className="me-1" src={shape_2} alt="icon" />
                        OUR CLIENTS
                     </h5>
                     <h2 className="wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">Clients We've Served Thus Far</h2>
                  </div>

               </div>
               <Swiper {...setting} modules={[Autoplay, Navigation, Pagination]} className="swiper clients__slider">
                  {repeated_data.map((item, index) => (
                     <SwiperSlide key={`${item.id}-${index}`} className="swiper-slide">
                        <div className="clients__item">
                           <Image src={item.logo} alt={item.name} />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               <div className="clients__navigation wow fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                  <button className="arry-prev clients__arry-prev"><i className="fa-light fa-chevron-left"></i></button>
                  <div className="clients__dot"></div>
                  <button className="arry-next clients__arry-next active"><i className="fa-light fa-chevron-right"></i></button>
               </div>
            </div>
         </section>
         <style jsx global>{`
           .swiper-wrapper {
             transition-timing-function: linear !important;
           }
         `}</style>
      </>
   )
}

export default Clients 