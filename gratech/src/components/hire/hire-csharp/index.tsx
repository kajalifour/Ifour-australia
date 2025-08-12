"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireCSharp = () => {
  const hireData = {
    title: "Hire C# Developers",
    subtitle: "Expert C# Development Services",
    description: "Hire skilled C# developers who excel in building robust, enterprise-grade applications. Our developers are experts in C# programming, .NET framework, and modern software development practices.",
    benefits: [
      "Expert knowledge of C# programming language",
      ".NET Framework and .NET Core expertise",
      "Object-oriented programming principles",
      "Design patterns and best practices",
      "Database integration and Entity Framework",
      "Performance optimization and debugging"
    ],
    services: [
      "Custom C# Application Development",
      "Desktop Application Development",
      "Web Application Development",
      "API Development and Integration",
      "Database Design and Management",
      "Application Testing and Maintenance"
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

export default HireCSharp;
