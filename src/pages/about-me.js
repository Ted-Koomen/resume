import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import { BLACK_BACKGROUND } from "../constants";
import aboutMeImage from "../images/professional.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const AboutMePage = ({ data, path }) => (
  <Layout path={path}>
    <Hero height="1400px" style={{paddingTop: '10%' }} background={BLACK_BACKGROUND}>
      <div
        className="row responsive-margins"
        style={{
          paddingTop: "70px",
          justifyContent: "center"
        }}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ marginTop: '5px', maxHeight: "500px", maxWidth: "400px", marginBottom: "10%" }}
          className="col-md"
        />
        <div style={{ maxWidth: "500px"}} className="col-md">
          <div className="col-md-12">
          <p
            style={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: "300",
              opacity: ".9",
            }}
          >
            I have over 3 years of experience as a software engineer, and have
            worked at both small startups and large organizations. While I'm a
            proficient full-stack developer, my expertise is in building
            scalable backend services (API services, stream processing, and
            async mechanisms).
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#fff",
              fontWeight: "300",
              opacity: ".9",
            }}
          >
            I love building things. While hard engineering problems are often
            intrinsically fun to tackle, I'm most attracted to solving real
            customer problems with a business justification. Previously I worked
            in the Finance and Insurance industry, and I try to incorporate my
            background in these industries to give users well-rounded, immersive
            experiences. I am eager to join teams that are building meaningful
            products and value a collaborative culture with an emphasis on
            continuous learning.
          </p>

          <h1
          style={{
            fontSize: '24px',
            fontWeight: "bold",
            color: "#fff",
            marginTop: '10%'
          }}
          >Highlights</h1>
          <div style={{marginTop: '5%'}}>
          <p
          style={{
            fontSize: "16px",
            color: "#fff",
            fontWeight: "300",
            opacity: ".9",
          }}>
            Engineered ordering capabilities for COVID-19 test for the State of
            Connecticut at a rate of ten thousand tests per day.
            
          </p>
          <p
          style={{
            fontSize: "16px",
            color: "#fff",
            fontWeight: "300",
            opacity: ".9",
          }}>
            Decreased page load time of largest genetic testing provider by 87.5%
          </p>
          <p
          style={{
            fontSize: "16px",
            color: "#fff",
            fontWeight: "300",
            opacity: ".9",
          }}>
            Lead team of engineers in revamping front end framework of a multi-billion dollar company
          </p>
          </div>
          </div>
        </div>
      </div>
    </Hero>
  </Layout>
);

export const data = graphql`
  query AboutMeImageQuery {
    file(relativePath: { eq: "professional.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutMePage;
