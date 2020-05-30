// Nav.js
import React from "react"
import { Link } from "gatsby"
import Scroll, { Element } from "react-scroll"
import NavElement from "./NavElement"
import "./nav.scss"

const navButtons = [
  {
    url: "https://www.linkedin.com/in/theodoruskoomen/",
    title: "linkedin",
    id: 1,
  },
  {
    url: "http://www.github.com/Ted-Koomen",
    title: "github",
    id: 2,
  },
  {
    url: "https://twitter.com/Ted_Koomen",
    title: "twitter",
    id: 3,
  },
]

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = { scrolled: false }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    const { pageYOffset } = window
    if (pageYOffset > 240) {
      this.setState({
        scrolled: true,
      })
    } else {
      this.setState({
        scrolled: false,
      })
    }
  }

  setDropshadow = () => {
    if (this.state && this.state.scrolled) {
      return "nav-shadow"
    } else {
      return ""
    }
  }

  renderSocials = () => navButtons.map(nav => <NavElement {...nav} />)

  render() {
    return (
      <Element id="top" name="top">
        <nav
          id="nav"
          className="navbar navbar-default navbar-fixed-top fixed-top"
          role="navigation"
        >
          <div className="container">
            <div
              className="navbar-header page-scroll"
              style={{ display: "flex" }}
            >
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
                Ted Koomen
              </Scroll.Link>
              <div className="social-container">{this.renderSocials()}</div>
            </div>
            <ul id="nav-link-container" className="nav navbar-nav navbar-right">
              <li className="nav-link-element">
                <Link className="nav-element" to="/">
                  Home
                </Link>
              </li>

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
  }
}

export default Nav
