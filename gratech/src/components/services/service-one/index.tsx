import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceArea from "./ServiceArea"
import About from "@/components/homes/home-one/About"
import Counter from "@/components/homes/home-one/Counter"
import Team from "@/components/homes/home-two/Team"

const ServiceOne = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="IT Solutions" title="IT Solutions" />
            <ServiceArea />
            <About />
            <Counter />
            <Team />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceOne
