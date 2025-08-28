import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogListArea from "./BlogListArea"

const BlogList = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Blog" title="Blog" />
            <BlogListArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogList
