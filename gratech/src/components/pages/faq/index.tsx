import BreadCrumb from "@/components/common/BreadCrumb"
import Faq from "@/components/homes/home-two/Faq"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const FaqMain = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Faq" title="Faq" />
            <Faq style={true} style_2={false} />
         </main>
         <FooterOne />
      </>
   )
}

export default FaqMain
