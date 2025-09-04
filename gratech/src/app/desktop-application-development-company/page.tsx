import ServiceDetails from "@/components/services/service-details2";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Desktop Application Development Company Australia',
  keywords: 'desktop application development, cross-platform desktop apps, Windows app development, desktop software company, custom desktop application services, Microsoft Solutions Partner, enterprise desktop applications',
  description: 'Empowering Australian industries with optimized cross-platform software app development. We are a Microsoft Solutions Partner company driving innovation and upgrades.',
  openGraph: {
    title: 'Desktop Application Development Company Australia',
    description: 'Empowering Australian industries with optimized cross-platform software app development. We are a Microsoft Solutions Partner company driving innovation and upgrades.',
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