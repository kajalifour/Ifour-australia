import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceDetailsArea from "./ServiceDetailsArea"

const ServiceDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Iot Software Development Company" title="Iot Software Development Company" />
            <ServiceDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceDetails
