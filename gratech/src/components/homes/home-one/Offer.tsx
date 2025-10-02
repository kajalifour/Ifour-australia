import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import shape_1 from "@/assets/images/shape/offer-shadow-shape.png";
import shape_2 from "@/assets/images/shape/offer-bg-shape-left.png";
import shape_3 from "@/assets/images/shape/offer-bg-shape-right.png";
import shape_4 from "@/assets/images/icon/section-title.png";
import shape_5 from "@/assets/images/shape/offter-item-shape-top.png";
import shape_6 from "@/assets/images/shape/offter-item-shape-bottom.png";
import industry01 from "@/assets/images/industry/industry-01.webp";
import industry02 from "@/assets/images/industry/industry-02.webp";
import industry03 from "@/assets/images/industry/industry-03.webp";
import industry04 from "@/assets/images/industry/industry-04.webp";
import industry05 from "@/assets/images/industry/industry-05.webp";
import industry06 from "@/assets/images/industry/industry-06.webp";
import industry07 from "@/assets/images/industry/industry-07.webp";
import industry08 from "@/assets/images/industry/industry-08.webp";
import industry09 from "@/assets/images/industry/industry-09.webp";
import industry10 from "@/assets/images/industry/industry-10.webp";
import industry11 from "@/assets/images/industry/industry-11.webp";

interface DataType {
  id: number;
  icon: JSX.Element;
  title: string;
  link?: string;
}

const offer_data: DataType[] = [
  {
    id: 1,
    icon: (
      <>
        <Image
          src={industry01}
          alt="Healthcare"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Healthcare",
  },
  {
    id: 2,
    icon: (
      <>
        <Image
          src={industry02}
          alt="Finance"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Finance",
  },
  {
    id: 3,
    icon: (
      <>
        <Image
          src={industry03}
          alt="Education"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Education",
  },
  {
    id: 4,
    icon: (
      <>
        <Image
          src={industry04}
          alt="E-commerce"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "E-commerce",
  },
  {
    id: 5,
    icon: (
      <>
        <Image
          src={industry05}
          alt="Manufacturing"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Manufacturing",
  },
  {
    id: 6,
    icon: (
      <>
        <Image
          src={industry06}
          alt="Real Estate"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Real Estate",
  },
  {
    id: 7,
    icon: (
      <>
        <Image
          src={industry07}
          alt="Transportation"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Transportation",
  },
  {
    id: 8,
    icon: (
      <>
        <Image
          src={industry08}
          alt="Entertainment"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Entertainment",
  },
  {
    id: 9,
    icon: (
      <>
        <Image
          src={industry09}
          alt="Technology"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Technology",
  },
  {
    id: 10,
    icon: (
      <>
        <Image
          src={industry10}
          alt="Retail"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Retail",
  },
  {
    id: 11,
    icon: (
      <>
        <Image
          src={industry11}
          alt="Logistics"
          width={60}
          height={60}
          style={{
            background: "transparent",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </>
    ),
    title: "Logistics",
  },
  {
    id: 12,
    icon: <></>,
    title: "Contact Us",
    link: "/contact-us",
  },
];

const Offer = () => {
  return (
    <section className="offer-area dark-bg pt-120 pb-175">
      <div
        className="offer__shadow wow fadeIn"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <Image src={shape_1} alt="shadow" />
      </div>
      <div className="offer__shape-left">
        <Image
          className="wow fadeInUpBig"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
          src={shape_2}
          alt="shape"
        />
      </div>
      <div className="offer__shape-right">
        <Image
          className="wow fadeInDownBig"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
          src={shape_3}
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
          <div className="section-header">
            <h5
              className="wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <Image
                className="me-1 filter-brightness-white"
                src={shape_4}
                alt="icon"
              />
              Tech Talent
            </h5>
            <h2
              className="text-white wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <span className="primary-color">Industry</span> We Serve
            </h2>
          </div>
          <Link
            href="/contact-us"
            className="btn-one wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Explore More <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
        <div className="row g-4">
          {offer_data.map((item) => (
            <div
              key={item.id}
              className="col-lg-3 col-md-6 col-sm-6 wow bounceInUp mb-25"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              {item.link ? (
                <div className="offer__item we_serve h-100 d-flex align-items-center justify-content-center">
                  <div className="shape-top">
                    <Image src={shape_5} alt="shape" />
                  </div>
                  <div className="shape-bottom">
                    <Image src={shape_6} alt="shape" />
                  </div>
                  <Link href={item.link} className="we_serve_link">
                    <h4 className="header-text text-white mt-20">{item.title}</h4>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="offer__item we_serve h-100">
                    <div className="shape-top">
                      <Image src={shape_5} alt="shape" />
                    </div>
                    <div className="shape-bottom">
                      <Image src={shape_6} alt="shape" />
                    </div>
                    <div className="offer__icon">{item.icon}</div>
                    <h4 className="text-white mt-20">{item.title}</h4>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
