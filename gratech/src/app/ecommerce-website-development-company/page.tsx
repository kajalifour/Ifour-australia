import ServiceDetails from "@/components/services/service-details3";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Custom E-commerce Website Development Company Australia',
  keywords: 'custom e-commerce development, e-commerce website development, online store development, e-commerce solutions Australia, Shopify developers, Magento developers, WooCommerce development, custom e-commerce services',
  description: 'iFour Technolab, a custom eCommerce website development company effectively provides impeccable custom eCommerce solutions & services for your brand evolution with 98% accuracy and 99% success rate.',
  openGraph: {
    title: 'Custom E-commerce Website Development Company Australia',
    description: 'iFour Technolab, a custom eCommerce website development company effectively provides impeccable custom eCommerce solutions & services for your brand evolution with 98% accuracy and 99% success rate.',
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