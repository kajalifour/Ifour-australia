import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Microsoft 365 Development Company - Gratech IT Services",
  description: "Professional Microsoft 365 development services. We create custom solutions for Office 365, SharePoint, and Microsoft Teams.",
};

const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page 