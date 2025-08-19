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
    title: "Maximize Business Success with Our Experienced .NET Developers",
    subtitle: "Expert .NET Development Services",
    description: "iFour a leading .NET development company has certified .NET experts well-versed in the latest tech stack to help you scale your .NET project to the next level. Our expert team excels in C#, ASP.NET MVC, web API, and more, and has a solid track record of designing and developing powerpack web and mobile app projects for businesses of all sizes.\n\nOur experts work closely with clients to understand their requirements and craft solutions catering to their needs. Hence by partnering with us you can get end-to-end .net development services and gain a competitive edge. Choose from a talent pool of .NET programmers to hire and enhance your team's capabilities.",
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
    showServicesGrid: true,
    ctaTitle: "Hire our .NET experts to deal with your integration complexities",
    ctaButtonText: "SHORTLIST NOW",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Tap into the innovative world of web apps by hiring our .NET Developers.",
    ctaTwoButtonText: "Get in touch now",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Extensive Expertise",
      "End-to-end Solution",
      "Total Transparency",
      "Faster Delivery",
      "Cutting-edge Technology",
      "Customized Solution"
    ],
    serviceTwoTitle: "Why Choose iFour to Hire .NET Developers?",
    serviceTwoSubtitle: "Outsource to iFour and get access to vetted and experienced resources along with the following benefits.",
         hireAboutSection: {
       hiringOptions: {
         title: "How to Hire .NET Developers from iFour?",
         options: [
           "On an hourly basis",
           "As a part of the dedicated team"
         ]
       },
       hiringProcess: {
         title: "We have a straightforward hiring process, which is as follows:",
         steps: [
           "Gathering requirements",
           "Sending CVs of our .NET developers",
           "Shortlisting the programmer",
           "Discussing contract and payment details",
           "Introducing the team to the client",
           "Project discussion",
           "Setting up the work environment",
           "Starting the project"
         ]
       }
     }
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