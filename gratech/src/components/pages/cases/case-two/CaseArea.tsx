import Case_data from "@/data/CaseData"
import Image from "next/image"
import Link from "next/link"

const CaseArea = () => {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          {Case_data.filter((items) => items.page === "case_2").map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="case-two__item">
                <div className="image case-two__image">
                  <Image src={item.thumb} alt="image" />
                </div>
                <div className="case-two__content">
                  <span className="primary-color sm-font">{item.sub_title}</span>
                  <h3><Link href="/case-details" className="text-white">{item.title}</Link></h3>
                </div>
                <Link href="/case-details" className="case-two__btn">
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
