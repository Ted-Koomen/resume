import React from "react"
import { Element } from "react-scroll"
import Resume from "./resume"
import "./resume.scss"

const ResumeContainer = () => (
  <Element id="resume" name="resume">
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
  </Element>
)

export default ResumeContainer
