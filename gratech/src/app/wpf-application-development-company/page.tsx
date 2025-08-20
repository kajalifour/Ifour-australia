import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "WPF Application Development Company - Gratech IT Services",
  description: "WPF application development for modern Windows desktop experiences and enterprise solutions.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert WPF Development Services",
    description: "Design and build high‑quality Windows applications with our experienced WPF engineers using MVVM and modern tooling.",
    benefits: [
      "MVVM architecture",
      "Rich UI/UX",
      "High performance",
      "Third‑party component integration",
      "Legacy modernization",
      "Testing & automation",
    ],
    services: [
      "Custom WPF Development",
      "WPF Business Portals & Intelligence",
      "Migration and Porting to .Net platform",
      "WPF Components Development",
      "Legacy App Modernization",
      "WPF Add-in Development",
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
    ctaTitle: "Build modern WPF applications",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Revamp your desktop apps",
    ctaTwoButtonText: "Talk to experts",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Vetted WPF Experts",
      "Qualitative Solution",
      "Hire 4X Faster",
      "100% Transparency",
      "Cost Effectiveness",
      "Ongoing Tech Support",
    ],
    serviceTwoTitle: "Why Choose iFour for WPF?",
    serviceTwoSubtitle: "High‑quality Windows app delivery",
    hireAboutSection: {
      title: "WPF Development Services We Provide",
      description: "We create advanced desktop experiences that delight users and improve productivity.",
      hiringOptions: {
        title: "Engagement Options",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our collaboration process",
        steps: ["Requirements", "Profiles", "Shortlist", "Kickoff", "Delivery"],
      },
    },
    angularBenefits: {
      title: "Why WPF is Ideal for Desktop Application Development?",
      description: "Windows Presentation Foundation (WPF) is Microsoft's powerful framework for building rich, modern desktop applications. Since its introduction, WPF has become the preferred choice for creating sophisticated, high-performance Windows applications that deliver exceptional user experiences and drive business productivity.\n\nWith its XAML-based declarative UI, MVVM architecture pattern, and extensive customization capabilities, WPF stands as the top choice for desktop development today. WPF continues to dominate the Windows desktop landscape, thanks to its seamless integration with the .NET ecosystem, powerful data binding, and advanced UI capabilities that enable rapid development.\n\nLet us explore the key reasons why businesses should consider WPF for their desktop application development:",
      benefits: [
        "Rich User Interface",
        "MVVM Architecture",
        "XAML-Based Design",
        "Data Binding",
        "Custom Controls",
        "High Performance",
        "Windows Integration",
        "Modern UI/UX"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="WPF Application Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


