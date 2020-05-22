// Nav.js
import React from "react"
import { Link } from "gatsby"
import NavElement from "./NavElement"
import "./nav.scss"

const navButtons = [
  {
    url: "http://www.linkedin.com/theodoruskoomen",
    title: "linkedin",
  },
  {
    url: "http://www.github.com/Ted-Koomen",
    title: "github",
  },
  {
    url: "http://www.github.com/tedkoomen",
    title: "twitter",
  },
]
const renderSocials = () => navButtons.map(nav => <NavElement {...nav} />)

const Nav = () => (
  <nav id="nav" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header page-scroll">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <a className="navbar-brand" href="#page-top">
          Ted Koomen
        </a>
        {renderSocials()}
      </div>

      <div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a  className="nav-element" href="#contact">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav
