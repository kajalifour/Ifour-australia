import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import CaseArea from "./CaseArea"

const CaseOne = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb title="Case Study 01" sub_title="Case Study 01" />
            <CaseArea />
         </main>
         <FooterOne />
      </>
   )
}

export default CaseOne
