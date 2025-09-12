import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'About Us | IT Solutions Provider - iFour Technolab AUS',
  keywords: '',
  description: 'As one of the top-notch IT consulting company, iFour leverages the latest technologies and deliver custom-made business solutions to firms of any size.',
  openGraph: {
    title: 'About Us | IT Solutions Provider - iFour Technolab AUS',
    description: 'As one of the top-notch IT consulting company, iFour leverages the latest technologies and deliver custom-made business solutions to firms of any size.',
  },
};
const page = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default page