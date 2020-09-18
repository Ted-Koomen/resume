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
    <Helmet>
    <script>
{`(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-168019975-1', 'auto');
ga('send', 'pageview');`}
</script>
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
