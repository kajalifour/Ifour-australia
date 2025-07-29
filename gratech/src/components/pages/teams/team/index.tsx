import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Our Team" title="Our Team" />
            <TeamArea />
         </main>
         <FooterOne />
      </>
   )
}

export default Team
