"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireDotNet = () => {
  const hireData = {
    title: "Hire .NET Developer",
    subtitle: "Expert .NET Development Services",
    description: "Hire skilled .NET developers who specialize in building robust, scalable applications using Microsoft's .NET framework. Our developers bring years of experience in C#, ASP.NET, and .NET Core development.",
    benefits: [
      "Expert knowledge of C# and .NET Framework",
      "Experience with ASP.NET Core and MVC",
      "Database design and Entity Framework",
      "RESTful API development",
      "Cloud integration with Azure",
      "Performance optimization and testing"
    ],
    services: [
      "Custom .NET Application Development",
      "Web Application Development",
      "API Development and Integration",
      "Database Design and Management",
      "Cloud Migration and Deployment",
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

export default HireDotNet;
