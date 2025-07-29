import team_data from "@/data/TeamData"
import Image from "next/image"
import Link from "next/link"

const TeamArea = () => {
   return (
      <section className="team-area pt-120 pb-120">
         <div className="container">
            <div className="row g-4">
               {team_data.filter((items) => items.page === "team").map((item) => (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="00ms"
                     data-wow-duration="1500ms">
                     <div className="team__item">
                        <div className="image">
                           <Image src={item.thumb} alt="image" />
                        </div>
                        <div className="team__content">
                           <h4><Link className="text-white" href="/team-details">{item.title}</Link></h4>
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

export default TeamArea
