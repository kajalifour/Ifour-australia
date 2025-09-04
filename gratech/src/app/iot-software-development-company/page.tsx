import ServiceDetails from "@/components/services/service-details8";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'IoT Software Development Company Australia | iFour Technolab',
  keywords: 'IoT software development Australia, Internet of Things solutions, IoT automation services, smart IoT applications, IoT consulting, custom IoT software, IoT app development company',
  description: 'iFour Technolab is a dedicated IoT software development company in Australia. Automation is the future of this technical world, and IoT has proved this by making things smarter for human life.',
  openGraph: {
    title: 'IoT Software Development Company Australia | iFour Technolab',
    description: 'iFour Technolab is a dedicated IoT software development company in Australia. Automation is the future of this technical world, and IoT has proved this by making things smarter for human life.',
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