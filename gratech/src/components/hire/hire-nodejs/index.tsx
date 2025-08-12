"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireNodeJS = () => {
  const hireData = {
    title: "Hire Node.js Developers",
    subtitle: "Expert Node.js Development Services",
    description: "Hire skilled Node.js developers who specialize in building scalable, high-performance backend applications. Our developers excel in server-side JavaScript, Express.js, and modern backend architectures.",
    benefits: [
      "Expert knowledge of Node.js runtime",
      "Express.js and server framework expertise",
      "RESTful API and GraphQL development",
      "Database integration and ORM usage",
      "Microservices architecture design",
      "Performance optimization and scaling"
    ],
    services: [
      "Custom Node.js Application Development",
      "RESTful API Development",
      "GraphQL API Development",
      "Microservices Architecture",
      "Database Design and Integration",
      "Application Deployment and DevOps"
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

export default HireNodeJS;
