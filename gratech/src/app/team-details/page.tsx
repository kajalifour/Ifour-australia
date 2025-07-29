import TeamDetails from "@/components/pages/teams/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Team Details Gratech - IT Service React Next js Template",
};
const page = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  )
}

export default page