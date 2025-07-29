import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ContactArea from "./ContactArea"
import ContactMap from "./ContactMap"

const Contact = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Contact Us" title="Contact Us" />
            <ContactArea />
            <ContactMap />
         </main>
         <FooterOne />
      </>
   )
}

export default Contact
