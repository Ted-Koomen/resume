/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import process from "process";
import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import "./layout.scss";

const Layout = ({ children, path, navWhite }) => {
  return (
    <>
      <div
        className="wrapper"
        style={{ margin: "auto", marginBottom: "-50px" }}
      >
        <Header white={navWhite ? true : false} path={path} />
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
