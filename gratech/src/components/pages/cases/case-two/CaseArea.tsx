import Case_data from "@/data/CaseData"
import Image from "next/image"
import Link from "next/link"

const CaseArea = () => {
  // Define the 4 specific case studies we want to show
  const specificCaseStudies = [
    {
      id: 1,
      sub_title: "AI Healthcare Monitoring System",
      title: "AI system that automates manual diagnostics and removes unpredictability from the healthcare",
      thumb: Case_data[0].thumb, // Using the first case study image
      url: "/case-study/ai-healthcare-monitoring-system"
    },
    {
      id: 2,
      sub_title: "Life Cycle Assessment Software",
      title: "An integrated system that analyses project aspects and automates operations to save time",
      thumb: Case_data[1].thumb, // Using the second case study image
      url: "/case-study/life-cycle-assessment-software"
    },
    {
      id: 3,
      sub_title: "Airport Parking Operator Booking System",
      title: "AI system that automates manual diagnostics and removes unpredictability from the healthcare",
      thumb: Case_data[2].thumb, // Using the third case study image
      url: "/case-study/airport-parking-operator-booking-system"
    },
    {
      id: 4,
      sub_title: "Life Cycle Assessment for Packaging Industry",
      title: "An efficient tool for assessing the Product Life Cycle and environmental impact of packages.",
      thumb: Case_data[3].thumb, // Using the fourth case study image
      url: "/case-study/life-cycle-assessment-for-packaging-industry"
    }
  ];

  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          {specificCaseStudies.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="case__item">
                <div className="image case__image">
                  <Image src={item.thumb} alt="image" />
                </div>
                <div className="case__content">
                  <span className="primary-color sm-font">{item.sub_title}</span>
                  <h3><Link href={item.url} className="text-white">{item.title}</Link></h3>
                </div>
                <Link href={item.url} className="case__btn">
                  <i className="fa-regular fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseArea
