import FooterOne from "@/layouts/footers/FooterOne"
import HeaderThree from "@/layouts/headers/HeaderThree"
import Banner from "./Banner"
import Service from "./Service"
import Brand from "./Brand"
import About from "./About"
import Counter from "../home-one/Counter"
import Project from "./Project"
import BannerVideo from "./BannerVideo"
import Pricing from "./Pricing"
import Testimonial from "./Testimonial"
import Blog from "../home-one/Blog"

const HomeThree = () => {
   return (
      <>
         <HeaderThree />
         <main>
            <Banner />
            <Service />
            <Brand />
            <About />
            <Counter />
            <Project />
            <BannerVideo />
            <Pricing style={false} />
            <Testimonial />
            <Blog />
         </main>
         <FooterOne />
      </>
   )
}

export default HomeThree
