import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import AboutHome from "../homes/home-two/About"
import Offer from "../homes/home-one/Offer"
import Brand from "../homes/home-one/Brand"
import Case from "../homes/home-one/Case"
import Testimonial from "../homes/home-one/Testimonial"
import Team from "../homes/home-two/Team"

const About = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb title="About Us" sub_title="About Us" />
            <AboutHome style={false} />
            <Offer />
            <Brand />
            <Case />
            <Testimonial />
            <Team />
         </main>
         <FooterOne />
      </>
   )
}

export default About
