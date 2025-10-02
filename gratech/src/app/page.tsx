import HomeOne from "@/components/homes/home-one";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Software Development Company Australia | iFour Technolab",
  keywords:
    "Custom Software Development Company Australia, Addin Software Developers, dot net developers, .net developers, dot net development company, development company, Software development company, IT outsourcing company, Software Outsourcing, IT outsourcing, offshore software development, Custom software developers, WPF Developement Company",
  description:
    "iFour Technolab is a trusted Microsoft Solutions Partner and Custom Software Development Company in Australia. We offer innovative software solutions to global clients.",
  openGraph: {
    title: "Software Development Company Australia | iFour Technolab",
    description:
      "iFour Technolab is a trusted Microsoft Solutions Partner and Custom Software Development Company in Australia. We offer innovative software solutions to global clients.",
    type: "website",
  },
};
const page = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default page;