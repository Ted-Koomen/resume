import React from "react"
import { graphql } from "gatsby"
// import { Layout, BlogBanner } from "../components"

export default ({ data }) => {
  const { author, date, title } = data.markdownRemark.frontmatter
  const post = data.markdownRemark;

  return (
    <div>
      
    </div>
  // <Layout>
  //     <BlogBanner />
  //     <div className="container">
  //       <h1>{author}</h1>
  //       <h2>{title}</h2>
  //       <h3>{date}</h3>
  //       <div dangerouslySetInnerHTML={{__html: post.html}} />
  //     </div>
  //   </Layout>
  )
}

export const postQuery = graphql`
  query EngineeringPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`
