import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "Angular Development Company - Gratech IT Services",
  description: "Angular development company for web and mobile applications. Professional Angular engineering and consulting.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert Angular Development Services",
    description: "iFour specializes in developing secure web and mobile applications using Angular, catering to a wide range of established businesses, from startups to large enterprises. Whether you want to build small or large projects, we provide end-to-end development solutions to suit your needs.\n\nWe are not just a tech partner but a growth partner that leads you to the right path of success.",
    benefits: [
      "Expert knowledge of Angular framework",
      "TypeScript and JavaScript expertise",
      "Component-based architecture design",
      "State management with RxJS and NgRx",
      "Responsive design and mobile-first approach",
      "Testing with Jasmine and Karma",
    ],
    services: [
      "Angular Web Development",
      "Angular App Development",
      "Angular UI/UX Design",
      "Migration Services",
      "API Development & Integration",
      "Angular Support & Maintenance",
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
    ctaTitle: "Build with Angular – Get Started Today",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Let’s craft your Angular solution",
    ctaTwoButtonText: "Get in touch now",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Quick Onboarding",
      "Proven Track Record",
      "User-centric Approach",
      "Competitive Pricing",
      "Comprehensive Services",
      "Experienced Team",
    ],
    serviceTwoTitle: "Why Choose iFour for Angular?",
    serviceTwoSubtitle: "Trusted partner for robust Angular solutions",
    hireAboutSection: {
      title: "Angular Development Services We Provide",
      description: "iFour is a reputed Angular development company, bringing solutions that help you achieve your business goals. Work with our Angular experts to leverage the following services.",
      hiringOptions: {
        title: "Engagement Options",
        subtitle: "Choose a model that fits your needs",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our simple onboarding process",
        steps: [
          "Gather Project Requirements",
          "Profile Sharing",
          "Shortlisting",
          "Contract & Kickoff",
          "Project Initiation",
        ],
      },
    },
    whyChooseUs: {
      title: "Why Choose Us as Your Angular Development Company?",
      paragraphs: [
        "iFour Technolab has always placed a strong focus on helping clients realise their unique goals and triumph in their respective fields. With a team of exceptionally skilled professionals and decade-long domain experience, we stand ready to assist you in your endeavours. We prioritise client satisfaction and, thus, work closely with you to fully understand your requirements and not only meet expectations but surpass your expectations.",
        "With a track record of success, iFour Technolab is your ideal Angular development agency. Leveraging our perfect blend of technical expertise, commitment to quality, and client-focused approach, we're not only your partner in innovation; we're an ally dedicated to your success and ensuring optimal results."
      ],
      ctaText: "Hire Angular developers",
      ctaLink: "/hire-angular-developers",
      ctaSuffix: "from iFour to build powerful web and mobile apps catering to your unique business needs."
    },
    angularBenefits: {
      title: "Why Angular is Ideal for Web and Mobile App Development?",
      description: "Built and maintained by Google, Angular is a powerful and reliable JavaScript framework. Since its release, Angular has become a preferred go-to development framework for businesses and developers alike for web and mobile app development due to its numerous advantages.\n\nWith a host of rich features backing the framework and abilities that help enhance the user experience and build visually engaging UIs, Angular stands as the top choice for development even today. Angular is here to stay, thanks to its large and exuberant community, unwavering support from Google, and a plethora of unique functionalities that set it apart.\n\nLet us look at some quick reasons that justify why businesses should consider using Angular for web and mobile app development:",
      benefits: [
        "Powerful and Robust Framework",
        "Enhanced User Experience",
        "Cross-platform Compatibility",
        "Faster Development",
        "Code Reusability",
        "Modular Architecture",
        "Comprehensive Testing Capabilities",
        "Strong Community Support"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Angular Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


