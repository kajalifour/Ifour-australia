import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import HireDetailsArea from "@/components/hire/HireDetailsArea"

export const metadata = {
  title: "Hire C# Developers - Gratech IT Services",
  description: "Hire experienced C# developers for your .NET and Windows application projects. Professional C# development services.",
};

const page = () => {
  const hireData = {
    title: "Hire C# Developers",
    subtitle: "Expert C# Development Services",
    description: "Hire skilled C# developers who excel in building robust Windows applications, web solutions, and enterprise software. Our developers are experts in C#, .NET Framework, and Microsoft technologies.",
    benefits: [
      "Expert knowledge of C# programming language",
      ".NET Framework and .NET Core expertise",
      "Windows application development skills",
      "ASP.NET and MVC development experience",
      "Database integration and design capabilities",
      "Cloud development and migration services"
    ],
    services: [
      "Custom Software Development",
      "C# SaaS Development",
      "C# PaaS Development",
      "C# Cloud Development",
      "C# Migration Services",
      "C# Integration Services",
      "Mobile App Development",
      "Windows App Development",
      "C# Support and Maintenance"
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
    showServicesGrid: true,
    ctaTitle: "Hire C#Developers for Optimized Solutions and Assured Business Growth",
    ctaButtonText: "Talk to Our Experts",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Get Instant Access to C# Experts with iFour",
    ctaTwoButtonText: "Let’s Work Together",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Talented Team",
      "Quick Hiring",
      "Industry Expertise",
      "Qualitative Solutions",
      "Cost-effectiveness",
      "24*7 Support"
    ],
    serviceTwoTitle: "Why Choose iFour to Hire C# Developers?",
    serviceTwoSubtitle: "We provide a plethora of services to help you build robust and reliable cross-platform solutions. iFour is your development partner from concept to completion.",
    hireAboutSection: {
      hiringOptions: {
        title: "How to Hire C# Programmers from iFour?",
        subtitle: "Get an extended team of programmers with industry expertise and proficiency in advanced technology to build the next-gen digital solutions. With iFour clients can hire C-sharp programmers 4x faster.\n\nWe offer the following hiring models.",
        options: [
          "On an hourly basis",
          "As a part of the dedicated team"
        ]
      }
    }
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Hire Developers" title="Hire C# Developers" />
        <HireDetailsArea data={hireData} />
      </main>
      <FooterOne />
    </>
  )
}

export default page 