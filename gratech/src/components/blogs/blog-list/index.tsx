import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogListArea from "./BlogListArea"
import BlogBanner from "../BlogBanner"
import NewsletterSection from "@/components/common/NewsletterSection"

const BlogList = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BlogBanner pageName="Blog" />
            <BlogListArea />
            <NewsletterSection />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogList
