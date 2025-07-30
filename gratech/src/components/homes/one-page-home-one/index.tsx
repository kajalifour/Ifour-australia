import OnePageHeaderOne from "@/layouts/headers/OnePageHeaderOne"
import Banner from "../home-one/Banner"
import Service from "../home-one/Service"
import About from "../home-one/About"
import Counter from "../home-one/Counter"
import Case from "../home-one/Case"
import Offer from "../home-one/Offer"
import Brand from "../home-one/Brand"
import Process from "../home-one/Process"
import Blog from "../home-one/Blog"
import FooterOne from "@/layouts/footers/FooterOne"

const OnePageHomeOne = () => {
  return (
    <>
      <OnePageHeaderOne page="home_1" />
      <main>
        <Banner />
        <Service />
        <About />
        <Counter />
        <Case />
        <Offer />
        <Brand />
        <Process />
        <Blog />
      </main>
      <FooterOne />
    </>
  )
}

export default OnePageHomeOne
