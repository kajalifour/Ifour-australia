import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Team Details" title="Team Details" />
            <TeamDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default TeamDetails
