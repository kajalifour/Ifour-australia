"use client";
import Image from "next/image";

const tech_1 = "/assets/images/technologies/tech-image-01.png";
const tech_2 = "/assets/images/technologies/tech-image-02.png";
const tech_3 = "/assets/images/technologies/tech-image-03.png";
const tech_4 = "/assets/images/technologies/tech-image-04.png";
const tech_5 = "/assets/images/technologies/tech-image-05.png";
const tech_6 = "/assets/images/technologies/tech-image-06.webp";
const tech_7 = "/assets/images/technologies/tech-image-07.png";
const tech_8 = "/assets/images/technologies/tech-image-08.png";
const tech_9 = "/assets/images/technologies/tech-image-09.png";
const tech_10 = "/assets/images/technologies/tech-image-10.png";
import shape_2 from "@/assets/images/icon/section-title.png";

const tech_data = [
  { id: 1, icon: tech_1 },
  { id: 2, icon: tech_2 },
  { id: 3, icon: tech_3 },
  { id: 4, icon: tech_4 },
  { id: 5, icon: tech_5 },
  { id: 6, icon: tech_6 },
  { id: 7, icon: tech_7 },
  { id: 8, icon: tech_8 },
  { id: 9, icon: tech_9 },
  { id: 10, icon: tech_10 },
];

const Technologies = () => {
  return (
    <section className="technologies-area pt-120 pb-80">
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
              Tech Talent
            </h5>
            <h2
              className="wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
            <span className="primary-color">Technologies</span> We Utilise
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="technology__col">
            {tech_data.map((tech, index) => (
              <div
                key={tech.id}
                className="technology__item text-center wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="1500ms"
              >
                <Image
                  src={tech.icon}
                  alt="technology"
                  width={120}
                  height={60}
                  className="technology__img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
