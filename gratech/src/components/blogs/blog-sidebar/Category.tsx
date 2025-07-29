import Link from "next/link"

const Category = () => {
   return (
      <div className="item sub-bg mb-30">
         <h5 className="title">Category</h5>
         <ul className="category">
            <li><Link href="#">Database Security</Link> <span>(02)</span></li>
            <li><Link href="#">IT Consultancy</Link> <span>(05)</span></li>
            <li><Link href="#">App Development</Link> <span>(07)</span></li>
            <li><Link href="#">UI/UX Design</Link> <span>(18)</span></li>
            <li><Link href="#">Cyber Security</Link> <span>(08)</span></li>
         </ul>
      </div>
   )
}

export default Category
