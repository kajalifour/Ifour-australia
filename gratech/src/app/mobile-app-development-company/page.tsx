import ServiceDetails from "@/components/services/service-details7";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Mobile Application Development Company Aus | iFour Technolab',
  keywords: 'mobile app development Australia, hybrid app development, native app development, mobile app consulting, iOS app development, Android app development, custom mobile applications, app development company Australia',
  description: 'iFour Technolab excels in mobile app development for Australia. Our consulting services deliver top-notch solutions globally, specializing in hybrid and native apps.',
  openGraph: {
    title: 'Mobile Application Development Company Aus | iFour Technolab',
    description: 'iFour Technolab excels in mobile app development for Australia. Our consulting services deliver top-notch solutions globally, specializing in hybrid and native apps.',
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