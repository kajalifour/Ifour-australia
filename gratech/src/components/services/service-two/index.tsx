import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ServiceArea from "./ServiceArea"
import NewsletterSection from "@/components/common/NewsletterSection"

const ServiceTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="IT Services" title="IT Services" />
            <ServiceArea />
            <NewsletterSection />
         </main>
         <FooterOne />
      </>
   )
}

export default ServiceTwo
