import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire .NET Developers - Gratech IT Services",
  description: "Hire experienced .NET developers for your Microsoft applications. Professional .NET development services.",
};

const page = () => {
  const hireData = {
    title: "Hire .NET Developers",
    subtitle: "Expert .NET Development Services",
    description: "Hire skilled .NET developers who excel in building robust Microsoft applications and enterprise solutions. Our developers are experts in .NET Framework, .NET Core, and Microsoft technologies.",
    benefits: [
      "Expert knowledge of .NET Framework and .NET Core",
      "ASP.NET and MVC development expertise",
      "C# programming and best practices",
      "Entity Framework and database integration",
      "Web API and microservices development",
      "Performance optimization and security"
    ],
    services: [
      ".NET Web Development",
      ".NET Mobile App Development", 
      ".NET Desktop Development",
      ".NET Integration Services",
      ".NET Migration",
      ".NET Support & Maintenance"
    ],
    showServiceCards: true,
    showProjects: true,
    showClients: true,
    showTechnologies: true,
    showMediaCoverage: true,
    showTestimonials: true,
    showBlog: true,
    showAgileApproach: true,
    showTechnologyPartners: true,
    showAbout: true,
    showServicesGrid: true
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Hire Developers" title="Hire .NET Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 