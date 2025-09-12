import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'IT Service & Technology Solutions | iFour Technolabs - Leading Software Development Company',
  keywords: '',
  description: 'iFour Technolabs is a leading IT service and technology company providing comprehensive software development solutions including web development, mobile apps, cloud services, and digital transformation.',
  openGraph: {
    title: 'IT Service & Technology Solutions | iFour Technolabs - Leading Software Development Company',
    description: 'iFour Technolabs is a leading IT service and technology company providing comprehensive software development solutions including web development, mobile apps, cloud services, and digital transformation.',
  },
};
const page = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  )
}

export default page