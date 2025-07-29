import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"

const BlogOne = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Blog Grid" title="Blog Grid" />
            <BlogArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogOne
