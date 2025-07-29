import NotFound from "@/components/pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "404 Gratech - IT Service React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  )
}

export default page