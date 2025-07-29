import Link from "next/link"

const Tag = () => {
   return (
      <div className="item sub-bg">
         <h5 className="title">Tags</h5>
         <div className="tags">
            <Link href="#">business</Link>
            <Link href="#">marketing</Link>
            <Link href="#">solution</Link>
            <Link href="#">SMM</Link>
            <Link href="#">startup</Link>
            <Link href="#">strategy</Link>
            <Link href="#">SEO</Link>
            <Link href="#">services</Link>
            <Link href="#">top</Link>
         </div>
      </div>
   )
}

export default Tag
