import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const Team = () => {
   return (
      <section id="team-section" className="team-area pt-120 pb-120">
         <div className="container">
            <div className="section-header text-center mb-60">
               <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                  <svg className="me-1" width="20" height="12" viewBox="0 0 20 12" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                     <rect x="0.75" y="0.747803" width="18.5" height="10.5" rx="5.25" stroke="#3C72FC"
                        strokeWidth="1.5" />
                     <mask id="path-2-inside-1_687_602" fill="white">
                        <path
                           d="M3 5.9978C3 3.78866 4.79086 1.9978 7 1.9978H13C15.2091 1.9978 17 3.78866 17 5.9978C17 8.20694 15.2091 9.9978 13 9.9978H7C4.79086 9.9978 3 8.20694 3 5.9978Z" />
                     </mask>
                     <path
                        d="M3 5.9978C3 2.96024 5.46243 0.497803 8.5 0.497803H11.5C14.5376 0.497803 17 2.96024 17 5.9978C17 4.61709 15.2091 3.4978 13 3.4978H7C4.79086 3.4978 3 4.61709 3 5.9978ZM17 5.9978C17 9.03537 14.5376 11.4978 11.5 11.4978H8.5C5.46243 11.4978 3 9.03537 3 5.9978C3 7.37851 4.79086 8.4978 7 8.4978H13C15.2091 8.4978 17 7.37851 17 5.9978ZM3 9.9978V1.9978V9.9978ZM17 1.9978V9.9978V1.9978Z"
                        fill="#3C72FC" mask="url(#path-2-inside-1_687_602)" />
                  </svg>
                  OUR team
               </h5>
               <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Our Leadership Team</h2>
            </div>
            <div className="row g-4">
               {team_data.filter((items) => items.page === "home_2").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                     <div className="team__item">
                        <div className="image">
                           <Image src={item.thumb} alt="image" />
                        </div>
                        <div className="team__content">
                           <h4><a className="text-white" href="team-details">{item.title}</a></h4>
                           <span className="text-white">{item.designation}</span>
                        </div>
                        <div className="team__share">
                           <ul>
                              <li>
                                 <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                              </li>
                              <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                              <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                           </ul>
                           <button><i className="fa-sharp fa-light fa-share-nodes"></i></button>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Team
