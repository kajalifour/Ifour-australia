import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import ErrorArea from "./ErrorArea"

const NotFound = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Page Not Found" title="404" />
            <ErrorArea />
         </main>
         <FooterOne />
      </>
   )
}

export default NotFound
