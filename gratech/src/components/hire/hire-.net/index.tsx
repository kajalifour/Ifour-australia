"use client";

import ServiceDetailsArea from "@/components/hire/HireDetailsArea";
import HireGrid from "@/components/hire/HireGrid";

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
        ".NET Web Development",
        ".NET Mobile App Development",
        ".NET Desktop Development",
        ".NET Integration Services",
        ".NET Migration",
        ".NET Support & Maintenance"
    ],
    showBlog: true,
    showTechnologyPartners: true,
    showAgileApproach: true,
    showAbout: true,
    showServicesGrid: false
  };

  return (
    <>
      <ServiceDetailsArea data={hireData} />
      <HireGrid services={hireData.services} />
    </>
  );
};

export default HireDotNet;
