import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Custom Software Development Company - Gratech IT Services",
  description: "Professional custom software development services. We build tailored software solutions for your business needs.",
};

const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page 