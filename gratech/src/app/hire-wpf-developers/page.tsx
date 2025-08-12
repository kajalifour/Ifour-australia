import HireDetails from "@/components/hire/hire-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Hire WPF Developers - Gratech IT Services",
  description: "Hire experienced WPF developers for your Windows desktop application projects. Professional WPF development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire WPF Developers"
      subtitle="Expert WPF Development Services"
      description="Hire skilled WPF developers who excel in building modern, rich Windows desktop applications. Our developers are experts in Windows Presentation Foundation, XAML, and modern UI/UX design."
      benefits={[
        "Expert knowledge of WPF framework",
        "XAML and MVVM pattern expertise",
        "Rich UI/UX design capabilities",
        "Data binding and validation",
        "Custom control development",
        "Performance optimization and testing"
      ]}
      services={[
        "Custom WPF Application Development",
        "Desktop Application Modernization",
        "Custom Control Development",
        "Data Visualization Applications",
        "Enterprise Desktop Solutions",
        "Application Maintenance and Support"
      ]}
      ctaTitle="Ready to hire skilled WPF developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect WPF developers for your team."
      ctaButtonText="Hire WPF Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 