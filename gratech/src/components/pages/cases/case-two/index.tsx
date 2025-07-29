import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import CaseArea from "./CaseArea"

const CaseTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb title="Case Study 02" sub_title="Case Study 02" />
            <CaseArea />
         </main>
         <FooterOne />
      </>
   )
}

export default CaseTwo
