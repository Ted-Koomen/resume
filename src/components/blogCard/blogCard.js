import React from "react"
import { Link } from "gatsby"
import "./blogCard.scss"

export default ({ headerIcon, title, body, path,subText, disabled }) => (
  <div className="card blog-card">
    <Link to={path} style={{ textDecoration: "none" }}>
      <div className="card-body">
        <i className={`${headerIcon} card-icon`} />
        <div className="card-title">{title}</div>
        <i
          className="fas fa-long-arrow-alt-right"
          style={{ fontSize: "24px" }}
        />
        <p className="card-excerpt">{body}</p>
        <p className="card-excerpt">{subText}</p>
      </div>
    </Link>
  </div>
)
