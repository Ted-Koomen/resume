import React from "react"
import { graphql } from "gatsby"
import { Layout, BlogCard, BlogBanner, FeaturedCard } from "../../components/"



export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges 

  return (
    <Layout>
    <BlogBanner id="post-banner-description" bannerText="Software Engineering" />
    <div className="container blog-card-container">
      {
       posts.map(post => {
         const {date, path, author, title, posttype, description } = post.node.frontmatter
         console.log("DESCRIPTION: ", description)
         return (
           <>

           <FeaturedCard
            title={title}
            headerIcon="fa fa-js-square"
            body={description}
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
          featured
          description
        }
      }
    }
  }
  }
`