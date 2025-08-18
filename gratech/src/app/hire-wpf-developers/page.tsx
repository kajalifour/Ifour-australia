import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire WPF Developers - Gratech IT Services",
  description: "Hire experienced WPF developers for your Windows desktop application projects. Professional WPF development services.",
};

const page = () => {
  const hireData = {
    title: "Hire WPF Developers",
    subtitle: "Expert WPF Development Services",
    description: "Hire skilled WPF developers who excel in building modern Windows desktop applications and user interfaces. Our developers are experts in WPF, XAML, and Windows application development.",
    benefits: [
      "Expert knowledge of WPF framework",
      "XAML and C# programming expertise",
      "Windows desktop application development",
      "Custom control and component creation",
      "Data binding and MVVM pattern experience",
      "Modern UI/UX design capabilities"
    ],
    services: [
      "Custom WPF Development",
      "WPF Business Portals & Intelligence",
      "Migration and Porting to .Net platform",
      "WPF Components Development",
      "Legacy App Modernization",
      "WPF Add-in Development"
    ],
    showServiceCards: true,
    showProjects: true,
    showClients: true,
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true,
    showAbout: true,
    showServicesGrid: true
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Hire Developers" title="Hire WPF Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 