import HireDetails from "@/components/hire/hire-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Hire C# Developers - Gratech IT Services",
  description: "Hire experienced C# developers for your software development projects. Professional C# development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire C# Developers"
      subtitle="Expert C# Development Services"
      description="Hire skilled C# developers who excel in building robust, enterprise-grade applications. Our developers are experts in C# programming, .NET framework, and modern software development practices."
      benefits={[
        "Expert knowledge of C# programming language",
        ".NET Framework and .NET Core expertise",
        "Object-oriented programming principles",
        "Design patterns and best practices",
        "Database integration and Entity Framework",
        "Performance optimization and debugging"
      ]}
      services={[
        "Custom C# Application Development",
        "Desktop Application Development",
        "Web Application Development",
        "API Development and Integration",
        "Database Design and Management",
        "Application Testing and Maintenance"
      ]}
      ctaTitle="Ready to hire skilled C# developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect C# developers for your team."
      ctaButtonText="Hire C# Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 