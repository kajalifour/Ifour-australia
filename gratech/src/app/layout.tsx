import "../../public/assets/css/all.min.css";
import "../../public/assets/sass/style.scss";
import "../styles/reduced-padding.css";
import "../../public/assets/css/blog-details.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="title" content="Software Development Company Australia | iFour Technolab" />
        <meta name="description" content="iFour Technolab is a trusted Microsoft Solutions Partner and Custom Software Development Company in Australia. We offer innovative software solutions to global clients." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
