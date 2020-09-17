import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import { BLACK_BACKGROUND } from "../constants";

const Blog = () => (
  <Layout>
    <Hero
      height="1400px"
      background={BLACK_BACKGROUND}
      style={{ textAlign: "center" }}
    >
      <h1 style={{ paddingTop: "500px" }}>Coming Soon</h1>
    </Hero>
  </Layout>
);

export default Blog;
