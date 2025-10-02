"use client";
import Image from "next/image";
import shape_2 from "@/assets/images/icon/section-title.png";

const partner_image = "/assets/images/logo/technology_partner.webp";

const TechnologyPartners = () => {
  return (
    <section className="technology-partners-area sub-bg pt-110 pb-120">
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              className="wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <Image
                className="me-1 filter-brightness"
                src={shape_2}
                alt="icon"
              />
              Partnerships
            </h5>
            <h2
              className="wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <span className="primary-color">Our</span> Technology Partners
            </h2>
          </div>
        </div>

        <div
          className="technology-partners__container wow fadeInUp"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <Image
            className="technology-partners__logo"
            src={partner_image}
            alt="Our Technology Partners"
            width={800}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
