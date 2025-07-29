import OnePageHeaderOne from "@/layouts/headers/OnePageHeaderOne"
import Banner from "../home-two/Banner"
import Brand from "../home-one/Brand"
import About from "../home-two/About"
import Service from "../home-two/Service"
import Choose from "../home-two/Choose"
import Team from "../home-two/Team"
import Faq from "../home-two/Faq"
import Case from "../home-two/Case"
import Testimonial from "../home-two/Testimonial"
import Blog from "../home-two/Blog"
import Cta from "../home-two/Cta"
import FooterTwo from "@/layouts/footers/FooterTwo"

const OnePageHomeTwo = () => {
   return (
      <>
         <OnePageHeaderOne page="home_2" />
         <main>
            <Banner />
            <Brand />
            <About style={false} />
            <Service />
            <Choose />
            <Team />
            <Faq style={false} style_2={false} />
            <Case />
            <Testimonial style={false} />
            <Blog />
            <Cta />
         </main>
         <FooterTwo />
      </>
   )
}

export default OnePageHomeTwo
