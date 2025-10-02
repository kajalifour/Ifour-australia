"use client";

import Link from "next/link";
import NewsletterSection from "@/components/common/NewsletterSection";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const ThankYouPage = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <section className="banner__inner-page bg-image pt-180 pb-180 bg-image ty-banner-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="section-header mb-20">
                  <h2
                    className="wow fadeInUp text-white ty-title"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    Thank You!
                  </h2>
                  <p
                    className="wow fadeInUp mt-3 text-white ty-subtitle"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    Your message has been sent successfully.
                  </p>
                </div>

                <div
                  className="thank-you-content wow fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="ty-card p-40">
                    <div className="ty-icon-wrap">
                      <i className="fa-solid fa-check ty-icon"></i>
                    </div>

                    <p className="text-white mb-4 ty-text">
                      We&apos;ll get back to you within 24 hours.
                    </p>

                    <div className="ty-actions">
                      <Link
                        href="/"
                        className="btn btn-primary ty-btn-primary thank-you-btn"
                      >
                        <i className="fa-solid fa-home me-2"></i>
                        Back to Home
                      </Link>
                      <Link
                        href="/contact-us"
                        className="btn btn-outline-light ty-btn-outline thank-you-btn"
                      >
                        <i className="fa-solid fa-envelope me-2"></i>
                        Send Another Message
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <NewsletterSection />
      </main>
      <FooterOne />
    </>
  );
};

export default ThankYouPage;
