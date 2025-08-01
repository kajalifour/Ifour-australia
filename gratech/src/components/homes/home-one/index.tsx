import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import Service from "./Service"
import About from "./About"
import Counter from "./Counter"
import Case from "./Case"
import Offer from "./Offer"
import Brand from "./Brand"
import Technologies from "./Technologies"
import TechnologyPartners from "./TechnologyPartners"
import MediaCoverage from "./MediaCoverage"
import Project from "./Project"
import Process from "./Process"
import Testimonial from "./Testimonial"
import Blog from "./Blog"

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Banner />
        <Counter />
        <Service />
        <About />
        <Case />
        <Offer />
        <Brand />
        <Technologies />
        <TechnologyPartners />
        <MediaCoverage />
        <Project />
        <Process />
        <Testimonial />
        <Blog />
      </main>
      <FooterOne />
    </>
  )
}

export default HomeOne
