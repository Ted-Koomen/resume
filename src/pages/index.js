import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero/Hero";
import SEO from "../components/seo";
import Layout from "../components/Layout/Layout";
import CardContainer from "../components/CardContainer/CardContainer"
import { BLACK_BACKGROUND } from "../constants/index";

import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Hero height="450px" background={BLACK_BACKGROUND}>
        <div
          style={{ paddingLeft: "7%", paddingRight: "7%", paddingTop: "70px" }}
        >
          <h1 style={{ color: "#FFF", fontSize: "40px", fontWeight: "500" }}>
            Senior Software Engineer
          </h1>
          <h1 style={{ color: "#FFF", fontSize: "40px", fontWeight: "500" }}>
            New York, New York
          </h1>

          <CardContainer containerTitle="Latest Posts" data={posts}/>
        </div>
      </Hero>
    </Layout>
  );
};

export const allPostsQuery = graphql`
  query AllFeaturedPosts {
    allMarkdownRemark(filter: {frontmatter: {featured: {eq: true}}}, sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        frontmatter {
          author
          description
          featured
          path
          posttype
          tags
          title
          date
          image {
            relativePath
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  }
`;

export default IndexPage;
