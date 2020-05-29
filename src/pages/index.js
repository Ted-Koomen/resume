import React from "react"
import { AboutMe, Hero, ResumeContainer, Layout, Spacer } from "../components"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutMe />
    <Spacer backgroundColor="#2196F3" spacerText="Look at this text"/>
    <ResumeContainer />
  </Layout>
)

export default IndexPage
