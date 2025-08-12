"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireVueJS = () => {
  const hireData = {
    title: "Hire Vue.js Developers",
    subtitle: "Expert Vue.js Development Services",
    description: "Hire skilled Vue.js developers who excel in building progressive web applications. Our developers are experts in Vue.js framework, Vuex state management, and modern frontend development practices.",
    benefits: [
      "Expert knowledge of Vue.js framework",
      "Vuex state management expertise",
      "Component-based architecture design",
      "Progressive Web App (PWA) development",
      "Responsive design and mobile optimization",
      "Testing with Vue Test Utils and Jest"
    ],
    services: [
      "Custom Vue.js Application Development",
      "Single Page Application (SPA) Development",
      "Progressive Web App (PWA) Development",
      "Component Library Development",
      "API Integration and Services",
      "Performance Optimization and Testing"
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

export default HireVueJS;
