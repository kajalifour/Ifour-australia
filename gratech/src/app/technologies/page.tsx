import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BreadCrumb from "@/components/common/BreadCrumb"
import TechnologiesGrid from "@/components/technologies/TechnologiesGrid"

export const metadata = {
  title: "Technologies - Gratech IT Services",
  description: "Explore all technologies we work with across frontend, backend, cloud, and platforms.",
};

const page = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="Technologies" title="Technologies We Work With" />
        <TechnologiesGrid />
      </main>
      <FooterOne />
    </>
  )
}

export default page


