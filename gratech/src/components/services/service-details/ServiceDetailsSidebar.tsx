import Link from "next/link";

const list_data: string[] = ["Database Security", "IT Consultancy", "App Development", "UI/UX Design", "Cyber Security",];
const opening_data: string[] = ["Mon - Sat: 10.00 AM - 4.00 PM", "Sun: 09.00 AM - 4.00 PM", "Friday: Closed", "Emergency: 24 hours",];

const ServiceDetailsSidebar = () => {
   return (
      <div className="service-single__right-item">
         <div className="item sub-bg mb-30">
            <h4 className="mb-20">All Services</h4>
            <ul className="category service-category">
               {list_data.map((list, i) => (
                  <li key={i}><Link href="#">{list}</Link> <i
                     className="fa-regular fa-arrow-right-long primary-color"></i></li>
               ))}
            </ul>
         </div>
         <div className="item sub-bg mb-30">
            <h4 className="mb-20">Opening Hours</h4>
            <ul className="category">
               {opening_data.map((open, i) => (
                  <li key={i} className="secondary-color justify-content-start gap-3">
                     <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                           fill="#3C72FC" />
                        <path
                           d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                           fill="#3C72FC" />
                     </svg>
                     {open}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default ServiceDetailsSidebar
