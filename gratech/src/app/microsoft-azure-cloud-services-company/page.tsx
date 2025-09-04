import ServiceDetails from "@/components/services/service-details5";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Microsoft Azure Cloud Service Provider | iFour Technolab',
  keywords: 'Microsoft Azure services, Azure CloudOps, Azure IaaS provider, Azure consulting, Azure automation, hybrid cloud management, cloud managed support, Azure cloud provider Australia',
  description: 'iFour Technolab offers Azure CloudOps in Australia, providing IaaS with consulting, automation, hybrid cloud management, and cloud-managed support.',
  openGraph: {
    title: 'Microsoft Azure Cloud Service Provider | iFour Technolab',
    description: 'iFour Technolab offers Azure CloudOps in Australia, providing IaaS with consulting, automation, hybrid cloud management, and cloud-managed support.',
  },
};
const page = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  )
}

export default page 