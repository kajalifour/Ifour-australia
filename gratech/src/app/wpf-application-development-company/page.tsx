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
    description: "In the ever-evolving landscape of software development, Windows Presentation Foundation (WPF) has emerged as a powerful technology that enables businesses to build visually stunning and feature-rich desktop applications.\n\nIt allows developers to create visually appealing interfaces with rich graphics, animations, and multimedia elements. This enhances user engagement and provides a seamless, interactive experience, leading to increased user satisfaction.\n\nWPF applications can run on various Windows operating systems, making them accessible to a broad audience. This cross-platform compatibility ensures your software reaches a larger user base, maximizing its impact on your target audience.\n\niFour Technolab is a one-stop destination for top-class WPF development services in Australia. We have over 10 years of development experience and a remarkable track record of providing quality services to a variety of enterprises. Connect us now to learn more.",
    benefits: [
      "MVVM architecture",
      "Rich UI/UX",
      "High performance",
      "Third‑party component integration",
      "Legacy modernization",
      "Testing & automation",
    ],
    services: [
      "Custom WPF Development Solutions",
      "Migration and Porting to the .NET Platform",
      "WPF Custom Components Development",
      "Integration with Non-.NET Applications",
      "WPF Add-ins Development",
      "Legacy Application Modernization",
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
    ctaTwoTitle: "Revolutionise your business with custom software solutions.",
    ctaTwoButtonText: "Get started now",
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
    whyChooseUs: {
      title: "Why Choose Us as Your WPF Development Company?",
      paragraphs: [
        "iFour Technolab is a Microsoft certified solutions partner and a leading Custom Application development company with over 10 years of experience. We are committed to delivering innovative and quality-oriented solutions meeting the unique demands of businesses in the Australian market.",
        "When you choose iFour Technolab as your WPF development partner, you are choosing a collaboration that goes beyond contracts and milestones. We become an extension of your team, a cohesive force striving tirelessly to attain your goals. Together, we traverse the ever-changing world of technology, laying the foundation for a profitable future where your company will be at the cutting edge of innovation.",
        "Reach out to us today to discuss your WPF development needs and embark on a journey of technological excellence with iFour Technolab."
      ],
      ctaText: "",
      ctaLink: "",
      ctaSuffix: ""
    },
    hireAboutSection: {
      title: "Our WPF development services",
      description: "Choosing the right technology for your business is pivotal to its success. WPF is built on the .NET Framework, allowing seamless integration with other .NET technologies. This integration enables developers to leverage a wide range of libraries and tools, reducing development time and costs.\n\nAt iFour, we are committed to empowering Australian businesses with efficient and innovative software solutions. Our expertise in WPF development and proficiency in simplifying diverse businesses makes us a go-to partner for several clients.\n\nOur WPF development services include:",
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
      title: "Why WPF is ideal for Business Application development?",
      description: "By choosing WPF for your application development, you future-proof your software with a technology that Microsoft continues to support and enhance. This ensures your application remains relevant and adaptable to upcoming technological advancements.\n\nWPF's ability to create visually stunning interfaces significantly enhances the user experience. This not only impresses your customers but also fosters positive brand perception.\n\nSome of the key reasons include:",
      benefits: [
        "Enhances user experience",
        "Cross-platform compatibility",
        "DataBinding and MVVM Architecture",
        "Integration with .NET framework",
        "Modernization and future-proofing",
        "Optimized performance",
        "Scalability features",
        "Strong community support"
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


