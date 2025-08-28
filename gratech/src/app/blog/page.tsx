import BlogListArea from "@/components/blogs/blog-list";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog - iFour Technolab",
  description: "Explore our latest blog posts and insights",
};

const page = () => {
  return (
    <Wrapper>
      <BlogListArea />
    </Wrapper>
  )
};

export default page