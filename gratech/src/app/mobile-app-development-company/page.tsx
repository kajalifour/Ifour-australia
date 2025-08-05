import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Mobile App Development Company - Gratech IT Services",
  description: "Professional mobile app development services. We create iOS and Android applications for businesses.",
};

const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page 