import React from "react";
import HeroImage from './heroImage';

const Hero = () => (
  <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container" style={{ marginBottom: "10px" }}>
              <HeroImage />
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
)

export default Hero