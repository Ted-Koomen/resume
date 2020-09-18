import React from "react";
import { graphql } from "gatsby";
// import { Layout, BlogBanner } from "../components"
import Layout from "../components/Layout/Layout";
import Hero from '../components/Hero/Hero';
import moment from 'moment';
import Img from 'gatsby-image';
import './engineeringPost.scss'
import "bootstrap/dist/css/bootstrap.min.css";


export default ({ data }) => {
  const { author, date, title, description, posttype, snippet, image } = data.markdownRemark.frontmatter
  const post = data.markdownRemark;
  return (
    <Layout navWhite>
      <Hero background="#FFF">
        <div className="container">
          <div style={{
            marginTop: "10%",
            marginBottom: "10%"
          }}>
              <div className={`post-type post-type-${posttype}`}>
                {posttype}
              </div>
              <p style={{fontWeight: "bold", fontSize: "32px"}}>{description}</p>     
              <div style={{maxWidth: "550px"}}>
                <p style={{fontSize: '16px', fontWeight: "300"}}>{snippet}</p>
              </div>
              <div className="post-date">{moment(date).format('MMMM DD, YYYY')}</div>
          </div>
        </div>
      </Hero>
      <Img fluid={image.childImageSharp.fluid} style={{maxHeight: "500px", marginBottom: "50px", minHeight: '500px'}} />
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query EngineeringPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
          description
          featured
          path
          posttype
          tags
          title
          date
          snippet
          image {
            childImageSharp {
              fluid(quality: 90) {
               ...GatsbyImageSharpFluid
              }
            }
          }
      }
      html
    }
  }
`
