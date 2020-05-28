// Nav.js
import React from "react"
import { Link } from "gatsby"
import Scroll, { Element }from 'react-scroll';
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
  <Element id="top" name="top">
  <nav id="nav" className="navbar navbar-default navbar-fixed-top fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header page-scroll" style={{ display: "flex" }}>
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <Scroll.Link
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-element scroll-link navbar-brand"
            style={{ fontSize: "2.2em" }}
            >
            <Link 
              to="/"
            >
            Ted Koomen
            </Link>
          </Scroll.Link>
        <div className="social-container">{renderSocials()}</div>
      </div>
      <ul id="nav-link-container" className="nav navbar-nav navbar-right">
          {/* <Scroll.Link
            to="resume"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
            className="nav-element scroll-link"
            >
            Resume
          </Scroll.Link> */}

        <li className="nav-link-element">
        <Link className="nav-element" to="/blog">
          Blog
        </Link>
          
        </li>
      </ul>
    </div>
  </nav>
  </Element>
)

export default Nav
