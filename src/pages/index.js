import React from "react"
import SEO from "../components/seo"
import { AboutMe, Hero, ResumeContainer, Layout } from "../components"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutMe />
    <ResumeContainer />
  </Layout>
)

export default IndexPage
