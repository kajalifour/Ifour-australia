import ServiceDetails from "@/components/services/service-details4";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: 'Microsoft 365 Fundamentals Specialization and Hosting Partners | iFour Technolab',
  keywords: 'Microsoft 365 development, Office 365 add-in development, Excel add-in solutions, Word add-in solutions, PowerPoint add-ins, Outlook add-in development, OneNote add-ins, Microsoft hosting partners',
  description: 'iFour Technolab is an authorized Microsoft 365 development service provider. It helps businesses with custom Addin solutions for Office platforms like Excel, Word, PowerPoint, OneNote, and Outlook.',
  openGraph: {
    title: 'Microsoft 365 Fundamentals Specialization and Hosting Partners | iFour Technolab',
    description: 'iFour Technolab is an authorized Microsoft 365 development service provider. It helps businesses with custom Addin solutions for Office platforms like Excel, Word, PowerPoint, OneNote, and Outlook.',
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