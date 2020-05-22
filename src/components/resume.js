import React from 'react';
import ResumeComponent from "./resumeComponent"
import './resume.scss';
import { DiRuby, DiReact } from "react-icons/di"
import { FaPhoenixFramework, FaNode } from "react-icons/fa"



const Resume = () => {
  const resumeData = [
    {
      company: "Sema4 Genomics",
      role: "Software Engineer | May 2019 - Current",
      contributions: [
        "Lead team of engineer in developing COVID-19 test ordering capabilities",
        "Lead team of engineers in upgrading platform to a React based ecosystem.",
        "Lead team of engineers in breaking up Rails monolith into Elixir /Phoenix and Node microservices.",
        "Spearheaded initiative for company wide style guide and best practices for React applications",
        "Participated in company sponsored Tech Talks on Elixir / Phoenix microservices."
      ],
      technologies: [
        DiRuby,
        DiReact, 
        FaPhoenixFramework,
        FaNode
      ]
    },
    {
      company: "1-800 Flowers",
      role: "Lead Software Engineer | April 2018 - March 2019",
      contributions: [
        "Conducted code reviews to ensure all code falls within implemented style guides and efficiency.",
        "Responsible for the redesign of the entire checkout process and its modernization to React.", 
        "Redesigning the checkout process was necessary to streamline the process, thus capturing more sales, as well as easing deployments of new versions of the process.",
        "Conducted technical interviews for new hires.",
        "Wrote style guide and Git procedures / JavaScript and React conventions to use company wide.",
        "Designed and built Node micro-services for all key components of the user experience, including shopping cart management and payment processing."
      ],
      technologies: [
        DiReact,
        FaNode
      ]
    },
    {
      company: "Catch NYC",
      role: "Software Engineer | Dec. 2017 - Apr. 2018",
      contributions: [
        "4 month contract position.",
        "Designed and built an internationalized website to help users all over the world utilize bike sharing through www.ofo.com",
        "Scaled postgreSQL database and helped to extend API.",
        "Build CMS for seamless content updates which allows the content management team to easily update marketing, press releases, and website content without having to deploy any changes to front end code.",
        "Style and assure mobile responsiveness with SCSS.",
        "Write and implement AWS Lambda functions for re-routing based on user's request country of origin for the correct user experience based on their country of origin."
      ],
      technologies: [
        DiRuby,
        DiReact
      ]
    }
]

  return (
    <div id="resume">
      {resumeData.map(data => <ResumeComponent {...data} />)}
    </div>
  )
}

export default Resume;