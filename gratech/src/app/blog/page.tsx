import BlogListArea from "@/components/blogs/blog-list";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Blog - Latest IT & Technology Insights | iFour Technolabs',
  keywords: 'IT blog, technology blog, software development blog, tech insights, programming tips, technology trends, IT solutions',
  description: 'Explore our latest blog posts and insights on IT services, technology trends, software development, and digital transformation solutions.',
  openGraph: {
    title: 'Blog - Latest IT & Technology Insights | iFour Technolabs',
    description: 'Explore our latest blog posts and insights on IT services, technology trends, software development, and digital transformation solutions.',
  },
};

const page = () => {
  return (
    <Wrapper>
      <BlogListArea />
    </Wrapper>
  )
};

export default page