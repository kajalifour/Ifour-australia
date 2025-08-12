"use client";

import ServiceDetailsArea from "@/components/services/ServiceDetailsArea";
import ServicesGrid from "@/components/services/ServicesGrid";

const HireJava = () => {
  const hireData = {
    title: "Hire Java Developers",
    subtitle: "Expert Java Development Services",
    description: "Hire skilled Java developers who excel in building enterprise-grade, scalable applications. Our developers are experts in Java programming, Spring framework, and modern enterprise development practices.",
    benefits: [
      "Expert knowledge of Java programming language",
      "Spring Framework and Spring Boot expertise",
      "Enterprise application architecture design",
      "Microservices and cloud-native development",
      "Database integration and JPA/Hibernate",
      "Performance optimization and security"
    ],
    services: [
      "Custom Java Application Development",
      "Enterprise Application Development",
      "Spring Framework Applications",
      "Microservices Architecture",
      "API Development and Integration",
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

export default HireJava;
