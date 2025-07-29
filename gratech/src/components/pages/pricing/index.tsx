import BreadCrumb from "@/components/common/BreadCrumb"
import Pricing from "@/components/homes/home-three/Pricing"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

const PricingMain = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Pricing" title="Pricing" />
            <Pricing style={true} />
         </main>
         <FooterOne />
      </>
   )
}

export default PricingMain
