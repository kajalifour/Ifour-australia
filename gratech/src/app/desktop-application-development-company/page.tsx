import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Desktop Application Development Company - Gratech IT Services",
  description: "Professional desktop application development services. We create powerful desktop applications for Windows, Mac, and Linux.",
};

const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page 