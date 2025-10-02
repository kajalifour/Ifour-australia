import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title:
    "Custom Software Development Company | iFour Technolabs - Tailored Business Solutions",
  keywords: "",
  description:
    "Professional custom software development services by iFour Technolabs. We build tailored software solutions for your business needs with cutting-edge technology and expert development.",
  openGraph: {
    title:
      "Custom Software Development Company | iFour Technolabs - Tailored Business Solutions",
    description:
      "Professional custom software development services by iFour Technolabs. We build tailored software solutions for your business needs with cutting-edge technology and expert development.",
  },
};

const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default page;
