import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Resume from "../components/resume"
import "./index.scss"

const IndexPage = () => (
  <Layout>
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container" style={{ marginBottom: "10px" }}>
              <Image />
            </div>
            <div className="intro-text">
              <span className="name">Ted Koomen</span>
              <hr />
              <span className="skills">
                Senior Software Engineer | New York, New York
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>About Me</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>
              I have over 6 years of experience as a software engineer, and have
              worked at both small startups and large organizations. While I'm a
              proficient full-stack developer, my expertise is in building
              scalable backend services (API services, stream processing, and
              async mechanisms).
            </p>
            <p>
              I love building things. While hard engineering problems are often
              intrinsically fun to tackle, I'm most attracted to solving real
              customer problems with a business justification. I'm looking for a
              senior individual contributor role where I can take on on
              collaborative team leadership responsibilites, and gain experience
              with architecture and project management.
            </p>
          </div>
          <div className="col-sm-6">
            <h3 style={{ marginTop: "0" }}>Highlights</h3>
            <ul>
              <li>
                Engineered ordering capabilities for COVID-19 test for the State
                of Connecticut at a rate of ten thousand tests per day
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section className="tout" id="interests">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Resume</h2>
            <hr />
          </div>
        </div>
        <Resume />
      </div>
    </section>
  </Layout>
)

export default IndexPage
