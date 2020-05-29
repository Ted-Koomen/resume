import React from "react"
import { graphql } from "gatsby"
import { Layout, BlogCard, BlogBanner } from "../../components/"



export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges 

  return (
    <Layout>
    <BlogBanner />
    <div className="container blog-card-container">
      {
       posts.map(post => {
         const {date, path } = post.node.frontmatter
         return (
           <>
            <i className="fa fa-js-square" style={{fontSize: "24px"}} />
           <BlogCard
            title="Test"
            headerIcon="fa fa-js-square"
            body="A tutorial covering the basics of starting your own Gatsby blog."
            subText={date}
            path={path}

          />
          </>
         )
       })
      }
    </div>
  </Layout>
  )
}

export const AllEngineeringBlogsQuery = graphql`
  query AllEngineeringPosts {
   allMarkdownRemark(filter: {frontmatter: {posttype: {eq: "engineering"}}}) {
    edges {
      node {
        frontmatter {
          date(formatString: "MMMM DD YYYY")
          title
          tags
          author
          path
          posttype
        }
      }
    }
  }
  }
`