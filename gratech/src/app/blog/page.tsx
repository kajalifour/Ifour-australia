import BlogOne from "@/components/blogs/blog-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Blog One Gratech - IT Service React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <BlogOne />
    </Wrapper>
  )
}

export default page