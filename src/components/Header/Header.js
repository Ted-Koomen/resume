import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "gatsby";
import "./header.scss";

const Header = ({ path, white }) => {
  const links = {
    about: {
      path: "/about-me/",
      text: "About Me",
    },
    resume: {
      path: "/resume/",
      text: "Resume",
    },
  };

  const renderNavLinks = () =>
    Object.keys(links).map((key) => (
        <Link
          className={`link nav-link header-link`}
          to={links[key].path}
          key={links[key].path}
        >
          {links[key].text}
        </Link>
    ));

  return (
    <Navbar id="header" className={white ? "header-white" : "header"} expand="lg">
      <div className="text-left navbar-brand text-left" id="header-brand" href="#home">
        <Link className="link" to="/">
          Ted Koomen
        </Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-right">
        <Nav className="ml-auto">{renderNavLinks()}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
