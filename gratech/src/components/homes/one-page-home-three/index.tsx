import OnePageHeaderOne from "@/layouts/headers/OnePageHeaderOne"
import Banner from "../home-three/Banner"
import Service from "../home-three/Service"
import Brand from "../home-three/Brand"
import About from "../home-three/About"
import Counter from "../home-one/Counter"
import Project from "../home-three/Project"
import BannerVideo from "../home-three/BannerVideo"
import Pricing from "../home-three/Pricing"
import Testimonial from "../home-three/Testimonial"
import Blog from "./Blog"
import FooterOne from "@/layouts/footers/FooterOne"

const OnePageHomeThree = () => {
   return (
      <>
         <OnePageHeaderOne page="home_3" />
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

export default OnePageHomeThree
