import BreadCrumb from '@/components/common/BreadCrumb'
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import BlogDetailsArea from './BlogDetailsArea'

const BlogDetails = () => {
   return (
      <>
         <HeaderOne />
         <main>
            <BreadCrumb sub_title='Blog Details' title='Blog Details' />
            <BlogDetailsArea />
         </main>
         <FooterOne />
      </>
   )
}

export default BlogDetails
