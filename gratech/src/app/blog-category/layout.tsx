import FooterOne from "@/layouts/footers/FooterOne"
import HeaderOne from "@/layouts/headers/HeaderOne"

export default function BlogCategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HeaderOne />
      <main>
        {children}
      </main>
      <FooterOne />
    </>
  )
}
