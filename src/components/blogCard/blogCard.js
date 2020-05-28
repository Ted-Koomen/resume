import React, { Component } from "react"
import { Link } from "gatsby"
import "./blogCard.scss"

// class BlogCard extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       showButton: false,
//     }
//   }

//   render() {
//     const { showButton } = this.state
//     return (
//       <Link to="blog/engineering" style={{textDecoration: 'none'}}>
//       <div className="card blog-card">
//         <div className="card-body">
//           <i className="fa fa-code card-icon" />
//           <div className="card-title">Engineering</div>
//           <i className="fas fa-long-arrow-alt-right" style={{fontSize: "24px"}}/>
//             <p className="card-excerpt">

//         </div>
//       </div>
//       </Link>
//     )
//   }
// }

export default ({ headerIcon, title, body }) => (
  <div className="card blog-card">
    <Link to="blog/engineering" style={{ textDecoration: "none" }}>
      <div className="card-body">
        <i className={`${headerIcon} card-icon`} />
        <div className="card-title">{title}</div>
        <i
          className="fas fa-long-arrow-alt-right"
          style={{ fontSize: "24px" }}
        />
        <p className="card-excerpt">{body}</p>
      </div>
    </Link>
  </div>
)
