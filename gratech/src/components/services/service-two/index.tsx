import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceArea from "./ServiceArea"

const ServiceTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="IT Services" title="IT Services" />
            <ServiceArea />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceTwo
