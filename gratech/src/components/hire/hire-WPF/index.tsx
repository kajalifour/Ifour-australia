"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireWPF = () => {
  const hireData = {
    title: "Hire WPF Developers",
    subtitle: "Expert WPF Development Services",
    description: "Hire skilled WPF developers who excel in building modern, rich Windows desktop applications. Our developers are experts in Windows Presentation Foundation, XAML, and modern UI/UX design.",
    benefits: [
      "Expert knowledge of WPF framework",
      "XAML and MVVM pattern expertise",
      "Rich UI/UX design capabilities",
      "Data binding and validation",
      "Custom control development",
      "Performance optimization and testing"
    ],
    services: [
      "Custom WPF Application Development",
      "Desktop Application Modernization",
      "Custom Control Development",
      "Data Visualization Applications",
      "Enterprise Desktop Solutions",
      "Application Maintenance and Support"
    ],
    showBlog: true,
    showTechnologyPartners: true,
    showAgileApproach: true,
    showAbout: true,
    showServicesGrid: true
  };

  return (
    <>
      <ServiceDetailsArea data={hireData} />
      <ServicesGrid />
    </>
  );
};

export default HireWPF;
