import CaseStudyArea from "@/components/pages/case-study/CaseStudyArea";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Case Study - iFour Technolab",
  description: "Explore our case studies and project showcases",
};

const CaseStudyPage = () => {
  return (
    <Wrapper>
      <CaseStudyArea />
    </Wrapper>
  );
};

export default CaseStudyPage;
