import HireDetails from "@/components/hire/hire-details";

export const metadata = {
  title: "Hire .NET Developer - Gratech IT Services",
  description: "Hire experienced .NET developers for your software development projects. Professional .NET development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire .NET Developer"
      subtitle="Expert .NET Development Services"
      description="Hire skilled .NET developers who specialize in building robust, scalable applications using Microsoft's .NET framework. Our developers bring years of experience in C#, ASP.NET, and .NET Core development."
      benefits={[
        "Expert knowledge of C# and .NET Framework",
        "Experience with ASP.NET Core and MVC",
        "Database design and Entity Framework",
        "RESTful API development",
        "Cloud integration with Azure",
        "Performance optimization and testing"
      ]}
      services={[
        "Custom .NET Application Development",
        "Web Application Development",
        "API Development and Integration",
        "Database Design and Management",
        "Cloud Migration and Deployment",
        "Application Maintenance and Support"
      ]}
      ctaTitle="Ready to hire skilled .NET developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect .NET developers for your team."
      ctaButtonText="Hire .NET Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 