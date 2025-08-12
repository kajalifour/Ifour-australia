import HireDetails from "@/components/hire/hire-details";

export const metadata = {
  title: "Hire Node.js Developers - Gratech IT Services",
  description: "Hire experienced Node.js developers for your backend development projects. Professional Node.js development services.",
};

const page = () => {
  return (
    <HireDetails 
      title="Hire Node.js Developers"
      subtitle="Expert Node.js Development Services"
      description="Hire skilled Node.js developers who specialize in building scalable, high-performance backend applications. Our developers excel in server-side JavaScript, Express.js, and modern backend architectures."
      benefits={[
        "Expert knowledge of Node.js runtime",
        "Express.js and server framework expertise",
        "RESTful API and GraphQL development",
        "Database integration and ORM usage",
        "Microservices architecture design",
        "Performance optimization and scaling"
      ]}
      services={[
        "Custom Node.js Application Development",
        "RESTful API Development",
        "GraphQL API Development",
        "Microservices Architecture",
        "Database Design and Integration",
        "Application Deployment and DevOps"
      ]}
      ctaTitle="Ready to hire skilled Node.js developers?"
      ctaDescription="Get in touch with us today to discuss your project requirements and find the perfect Node.js developers for your team."
      ctaButtonText="Hire Node.js Developers"
      ctaButtonLink="/contact"
    />
  )
}

export default page 