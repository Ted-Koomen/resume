import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import './blogBanner.scss';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ id, src, bannerText }) => {
  useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "blog-banner.webp" }) {
        childImageSharp {
          fluid(maxHeight:  3200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
   <header style={{minHeight: '554px'}}>
      <div className="container">
        <div className="row" id={id}>
          <div className="col-lg-12">
            <div className="intro-text">
              <span className="name">{bannerText}</span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Image
