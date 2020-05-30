import React from "react"
import { graphql, Link } from "gatsby"
import { Layout, BlogBanner } from "../components"
import SEO from "../components/seo";
import "./engineeringPost.scss"

export default ({ data }) => {
  const {
    author,
    date,
    title,
    posttype,
    description,
    image,
  } = data.markdownRemark.frontmatter
  const post = data.markdownRemark
  console.log(image)
  return (
    <Layout>
      <SEO title={title} description={description} image={image}/>
      <BlogBanner id="post-banner-description" bannerText={description} />
      <div id="blog" className="container">
        <div className="blog-content-container">
          <div id="blog-link">
            <Link to={`/blog/${posttype}`}>{posttype}</Link>
          </div>
          <h1 className="blog-title">{title}</h1>
          <div id="blog-content" className="container">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    </Layout>
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
        tags
        posttype
        description
        image {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      html
    }
  }
`
