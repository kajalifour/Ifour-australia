import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"

const BlogTwo = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title="Blog Standard" title="Blog Standard" />
            <BlogArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogTwo
