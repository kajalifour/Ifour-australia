interface ProjectDataType {
   id: number;
   page: string;
   image: string;
   title: string;
   desc: string;
}

const project_data: ProjectDataType[] = [
   {
      id: 1,
      page: "home_1",
      image: "/assets/images/project/project-image-01.webp",
      title: "AI Healthcare Monitoring System",
      desc: "AI system that automates manual diagnostics and removes unpredictability from the healthcare"
   },
   {
      id: 2,
      page: "home_1",
      image: "/assets/images/project/project-image-02.webp",
      title: "Life Cycle Assessment Software",
      desc: "An integrated system that analyses project aspects and automates operations to save time"
   },
   {
      id: 3,
      page: "home_1",
      image: "/assets/images/project/project-image-03.webp",
      title: "Transportation Management System",
      desc: "AI system that automates manual diagnostics and removes unpredictability from the healthcare"
   },
];

export default project_data; 