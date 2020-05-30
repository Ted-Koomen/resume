import React from "react"
import "./about.scss";

const AboutMe = () => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 style={{fontWeight: 400}}>About Me</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <p>
            I have over 3 years of experience as a software engineer, and have
            worked at both small startups and large organizations. While I'm a
            proficient full-stack developer, my expertise is in building
            scalable backend services (API services, stream processing, and
            async mechanisms).
          </p>
          <p>
            I love building things. While hard engineering problems are often
            intrinsically fun to tackle, I'm most attracted to solving real
            customer problems with a business justification. Previously I worked in the Finance and Insurance industry, and I try to incorporate my background in these industries to give users well-rounded, immersive experiences. 
          </p>
          <p>
            I am eager to join teams that are building meaningful products and value a collaborative culture with an emphasis on continuous learning.
          </p>
        </div>
        <div className="col-sm-6">
          <h4 style={{ marginTop: "0", paddingLeft: '70px' }}>Highlights</h4>
          <ul style={{paddingLeft: '100px'}}>
            <li>
              Engineered ordering capabilities for COVID-19 test for the State
              of Connecticut at a rate of ten thousand tests per day.
            </li>
            <li>
              Decreased page load time of largest genetic testing provider by 87.5%
            </li>
            <li>
              Lead team of engineers in revamping front end framework of a multi-billion dollar company
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default AboutMe
