import React from "react"

const NavElement = ({ url, title }) => (
  <a href={url} className="btn-social btn-outline">
    <i className={`fa fa-fw fa-${title}`}></i>
  </a>
)

export default NavElement;
