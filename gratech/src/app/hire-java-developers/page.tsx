import HireDetails from "@/components/hire/hire-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Hire Java Developers - Gratech IT Services",
  description: "Hire experienced Java developers for your enterprise software development projects. Professional Java development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire Java Developers"
      subtitle="Expert Java Development Services"
      description="Hire skilled Java developers who excel in building enterprise-grade, scalable applications. Our developers are experts in Java programming, Spring framework, and modern enterprise development practices."
      benefits={[
        "Expert knowledge of Java programming language",
        "Spring Framework and Spring Boot expertise",
        "Enterprise application architecture design",
        "Microservices and cloud-native development",
        "Database integration and JPA/Hibernate",
        "Performance optimization and security"
      ]}
      services={[
        "Custom Java Application Development",
        "Enterprise Application Development",
        "Spring Framework Applications",
        "Microservices Architecture",
        "API Development and Integration",
        "Application Testing and Maintenance"
      ]}
      ctaTitle="Ready to hire skilled Java developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect Java developers for your team."
      ctaButtonText="Hire Java Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 