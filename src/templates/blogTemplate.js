import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import "./blogTemplate.css";

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`;

export default function Template({ data }){
  const {
    markdownRemark: {
      frontmatter: {
        title,
        author,
        date
      }
    }
  } = data;

  return (
    <Layout>
      <Link to="/">Back to blogs</Link>
      <h1>{title}</h1>
      <p>Posted by {author} on {date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
};

