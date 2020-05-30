import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet"
import { NavBar, Footer } from "../index";
import "./layout.scss";
import '../../fonts/fonts.css';


const Layout = ({ children }) => (
  <div className="layout">
    <Helmet>
    <script src="https://use.fontawesome.com/e3ddeb66f1.js"/>
    </Helmet>
    <NavBar />
    <main className="main">{ children }</main>
    {/* <Footer /> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
