import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import Banner from "./Banner"
import Service from "./Service"
import About from "./About"
import Counter from "./Counter"
import Case from "./Case"
import Offer from "./Offer"
import Brand from "./Brand"
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
        <Process />
        <Testimonial />
        <Blog />
      </main>
      <FooterOne />
    </>
  )
}

export default HomeOne
