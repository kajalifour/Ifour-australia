import HireDetails from "@/components/hire/hire-details";

export const metadata = {
  title: "Hire Vue.js Developers - Gratech IT Services",
  description: "Hire experienced Vue.js developers for your frontend development projects. Professional Vue.js development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire Vue.js Developers"
      subtitle="Expert Vue.js Development Services"
      description="Hire skilled Vue.js developers who excel in building progressive web applications. Our developers are experts in Vue.js framework, Vuex state management, and modern frontend development practices."
      benefits={[
        "Expert knowledge of Vue.js framework",
        "Vuex state management expertise",
        "Component-based architecture design",
        "Progressive Web App (PWA) development",
        "Responsive design and mobile optimization",
        "Testing with Vue Test Utils and Jest"
      ]}
      services={[
        "Custom Vue.js Application Development",
        "Single Page Application (SPA) Development",
        "Progressive Web App (PWA) Development",
        "Component Library Development",
        "API Integration and Services",
        "Performance Optimization and Testing"
      ]}
      ctaTitle="Ready to hire skilled Vue.js developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect Vue.js developers for your team."
      ctaButtonText="Hire Vue.js Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 