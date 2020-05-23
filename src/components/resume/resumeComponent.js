import React from "react"

const ResumeComponent = ({ company, role, contributions, technologies }) => {
  return (
    <div className="row">
      <div
        className="resume-component-container col-sm-6"
        style={{ marginTop: "50px" }}
      >
        <div className="company-role">
          <h4>{company}</h4>
          <p className="role">{role}</p>
        </div>
        <div className="contributions">
          <ul>
            {contributions.map(contribution => (
              <li>{contribution}</li>
            ))}
          </ul>
        </div>
      </div>

      <div 
        className="col-sm-6" style={{marginTop: '50px'}}>

        <div className="company-role">
          {technologies.map(Tech => <Tech style={{height: '100px', width: '100px'}} />)}
        </div>
      </div>
    </div>
  )
}

export default ResumeComponent
