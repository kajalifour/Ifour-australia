import Contact from "@/components/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Contact iFour Technolabs - Get in Touch for IT Services & Technology Solutions',
  keywords: '',
  description: 'Contact iFour Technolabs for professional IT services and technology solutions. Get in touch for software development, digital transformation, and technology consulting.',
  openGraph: {
    title: 'Contact iFour Technolabs - Get in Touch for IT Services & Technology Solutions',
    description: 'Contact iFour Technolabs for professional IT services and technology solutions. Get in touch for software development, digital transformation, and technology consulting.',
  },
};
const page = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}

export default page