import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import CaseDetailsArea from "./CaseDetailsArea"

const CaseDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb title="Case Study Details" sub_title="Case Study Details" />
            <CaseDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default CaseDetails
