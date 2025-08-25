import HeaderTwo from "@/layouts/headers/HeaderTwo"
import Banner from "./Banner"
import Brand from "../home-one/Brand"
import About from "./About"
import Service from "./Service"
import Choose from "./Choose"
import Team from "./Team"
import Faq from "./Faq"
import Case from "./Case"
import Testimonial from "./Testimonial"
import Blog from "./Blog"
import Cta from "./Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Banner />
        <Brand />
        <About style={false} />
        <Service />
        <Choose />
        <Team />
        <Faq style_2={false} />
        <Case />
        <Testimonial style={false} />
        <Blog />
        <Cta />
      </main>
      <FooterTwo/>
    </>
  )
}

export default HomeTwo
