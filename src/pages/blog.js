import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import Post from './post';

export const AllBlogsQuery = graphql`
 query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    { 
      data.allMarkdownRemark.edges.map(post => {
      console.log(data)

        const { title, author, date, description, path } = post.node.frontmatter;
        console.log(post.node.frontMatter)
        return (
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })
    }
  </Layout>
);

export default Blog;
