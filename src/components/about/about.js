import React from "react"
import "./about.scss";

const AboutMe = () => (
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
)

export default AboutMe
