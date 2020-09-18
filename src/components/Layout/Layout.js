/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import "./layout.scss";

const Layout = ({ children, path, navWhite }) => {
  return (
    <>
      <Helmet>
        <head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-168019975-1"
          ></script>
          <script>
            {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-168019975-1');
  `}
          </script>
        </head>
      </Helmet>
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
