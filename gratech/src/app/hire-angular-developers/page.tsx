import HireDetails from "@/components/hire/hire-details";

export const metadata = {
  title: "Hire Angular Developers - Gratech IT Services",
  description: "Hire experienced Angular developers for your web application projects. Professional Angular development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire Angular Developers"
      subtitle="Expert Angular Development Services"
      description="Hire skilled Angular developers who excel in building modern, responsive web applications. Our developers are experts in Angular framework, TypeScript, and modern web development practices."
      benefits={[
        "Expert knowledge of Angular framework",
        "TypeScript and JavaScript expertise",
        "Component-based architecture design",
        "State management with RxJS and NgRx",
        "Responsive design and mobile-first approach",
        "Testing with Jasmine and Karma"
      ]}
      services={[
        "Custom Angular Application Development",
        "Single Page Application (SPA) Development",
        "Component Library Development",
        "API Integration and Services",
        "Performance Optimization",
        "Application Maintenance and Support"
      ]}
      ctaTitle="Ready to hire skilled Angular developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect Angular developers for your team."
      ctaButtonText="Hire Angular Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 