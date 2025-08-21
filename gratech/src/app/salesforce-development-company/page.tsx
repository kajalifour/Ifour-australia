import BreadCrumb from "@/components/common/BreadCrumb"
import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import TechnologyDetailsArea from "@/components/technologies/TechnologyDetailsArea"

export const metadata = {
  title: "Salesforce Development Company - Gratech IT Services",
  description: "Salesforce development, customization, and integration services to extend your CRM capabilities.",
};

const page = () => {
  const techData = {
    title: "Connect with iFour to Obtain Exceptional Results",
    subtitle: "Expert Salesforce Development Services",
    description: "In the rapidly evolving business landscape of Australia, staying ahead of the competition is vital for sustained success. Salesforce technology has emerged as a game-changer, revolutionizing the way businesses manage customer relationships and streamline their operations.\n\nSalesforce enables businesses to understand their customers better and build lasting relationships. With a centralized customer database, personalized interactions, and targeted marketing campaigns become seamless, leading to increased customer satisfaction and loyalty.\n\nIt offers a comprehensive suite of tools for automation, workflow management, and data analytics. By optimizing business processes, companies can improve productivity, minimize errors, and reduce operational costs.",
    benefits: [
      "Custom objects & workflows",
      "Apex & Lightning components",
      "Third‑party integrations",
      "Automation & reporting",
      "Data migration",
      "Ongoing support",
    ],
    services: [
      "Salesforce Implementation",
      "Salesforce Customization",
      "Integration Services",
      "Salesforce Automation",
      "Migration to Salesforce",
      "Support and Maintenance",
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
    ctaTitle: "Enhance your Salesforce platform",
    ctaButtonText: "GET STARTED TODAY",
    ctaButtonLink: "/contact",
    ctaTwoTitle: "Ready to Elevate Your Business? Experience Salesforce with iFour!",
    ctaTwoButtonText: "Get started now",
    ctaTwoButtonLink: "/contact",
    serviceTwoServices: [
      "Custom Solutions",
      "Agile Methodology",
      "Secured Solutions",
      "Timely Delivery",
      "Cost-effectiveness",
      "Ongoing Tech Support",
    ],
    serviceTwoTitle: "Why Choose iFour for Salesforce?",
    serviceTwoSubtitle: "Tailored CRM solutions for growth",
    whyChooseUs: {
      title: "Why Choose Us as Your Salesforce Development Company?",
      paragraphs: [
        "At iFour, we are passionate about empowering Australian businesses with Salesforce technology. Whether you run a small startup or a large enterprise, we will help you scale your business to meet your needs. This platform also offers a high level of customization, allowing businesses to tailor the platform to their unique requirements.",
        "Partner with us now and we'll elevate your business to new heights of success. Contact us today to embark on your Salesforce journey!"
      ],
      ctaText: "",
      ctaLink: "",
      ctaSuffix: ""
    },
    hireAboutSection: {
      title: "Salesforce development services we offer:",
      description: "At iFour, we take pride in being a leading Salesforce development services provider in Australia. Our team of certified Salesforce experts is dedicated to helping your business leverage the full potential of this powerful platform.\n\nWe understand the importance of fulfilling your strategic goals and hence we are here to help you achieve that. Our qualified cloud solution experts will help you with the best, most reliable, and highly scalable salesforce development solutions that simplify your business.\n\nTake a look at our Salesforce services:",
      hiringOptions: {
        title: "Engagement Options",
        options: ["On an hourly basis", "As a part of the dedicated team"],
      },
      hiringProcess: {
        title: "Our collaboration process",
        steps: ["Discovery", "Solutioning", "Onboarding", "Build", "Rollout"],
      },
    },
    angularBenefits: {
      title: "Why should I choose Salesforce?",
      description: "Salesforce is a global leader in CRM and cloud-based solutions. Its track record of success and widespread adoption by businesses across industries testify to its effectiveness and reliability.\n\nIt offers robust reporting and analytics capabilities that provide valuable insights into sales performance, customer behavior, and market trends. These insights empower businesses to make data-driven decisions and strategize effectively.\n\nBesides, choosing the right technology partner is crucial for the success of your business. Here are the compelling reasons why Salesforce stands out as the preferred choice:",
      benefits: [
        "Enhanced customer engagement",
        "Automation and workflow management",
        "Flawless cloud-based accessibility",
        "Scalability and customization",
        "Innovation and feature updates",
        "Suits businesses of all sizes",
        "Adheres to stringent security measures",
        "Vast AppExchange ecosystem"
      ]
    },
  };

  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Salesforce Development Company" />
        <TechnologyDetailsArea data={techData} />
      </main>
      <FooterOne />
    </>
  );
};

export default page


