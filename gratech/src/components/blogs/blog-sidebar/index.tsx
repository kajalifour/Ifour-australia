import Category from "./Category"
import RecentPost from "./RecentPost"
import Tag from "./Tag"

const BlogSidebar = () => {
   return (
      <div className="blog-single__right-item">
         <div className="item sub-bg mb-30">
            <h5 className="title">Search</h5>
            <div className="serach-bar">
               <input type="text" placeholder="Search here" />
               <button><i className="fa-regular fa-magnifying-glass"></i></button>
            </div>
         </div>
         <Category />
         <RecentPost />
         <Tag />
      </div>
   )
}

export default BlogSidebar
