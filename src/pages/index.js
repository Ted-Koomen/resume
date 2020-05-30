import React from "react"
import { AboutMe, Hero, ResumeContainer, Layout, Spacer } from "../components"
import SEO  from '../components/seo'

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Ted Koomen's Personal Blog" />

    <Hero />
    <AboutMe />
    <Spacer backgroundColor="#2196F3" spacerText="Look at this text"/>
    <ResumeContainer />
  </Layout>
)

export default IndexPage
