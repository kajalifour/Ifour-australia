"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireAngular = () => {
  const hireData = {
    title: "Hire Angular Developers",
    subtitle: "Expert Angular Development Services",
    description: "Hire skilled Angular developers who excel in building modern, responsive web applications. Our developers are experts in Angular framework, TypeScript, and modern web development practices.",
    benefits: [
      "Expert knowledge of Angular framework",
      "TypeScript and JavaScript expertise",
      "Component-based architecture design",
      "State management with RxJS and NgRx",
      "Responsive design and mobile-first approach",
      "Testing with Jasmine and Karma"
    ],
    services: [
      "Custom Angular Application Development",
      "Single Page Application (SPA) Development",
      "Component Library Development",
      "API Integration and Services",
      "Performance Optimization",
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

export default HireAngular;
