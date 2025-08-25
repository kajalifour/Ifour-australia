import HeaderTwo from "@/layouts/headers/HeaderTwo";
import Banner from "../home-two/Banner";
import Brand from "../home-one/Brand";
import About from "../home-two/About";
import Service from "../home-two/Service";
import Choose from "../home-two/Choose";
import Team from "../home-two/Team";
import Faq from "../home-two/Faq";
import Case from "../home-two/Case";
import Testimonial from "../home-two/Testimonial";
import Blog from "../home-two/Blog";
import Cta from "../home-two/Cta";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import FooterTwo from "@/layouts/footers/FooterTwo";

const DarkHome = () => {
   return (
      <>
         <ThemeSwitcher />
         <HeaderTwo />
         <main>
            <Banner />
            <Brand />
            <About style={true} />
            <Service />
            <Choose />
            <Team />
            <Faq style_2={true} />
            <Case />
            <Testimonial style={true} />
            <Blog />
            <Cta />
         </main>
         <FooterTwo />
      </>
   );
};

export default DarkHome;
