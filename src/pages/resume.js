import React from 'react';
import Layout from '../components/Layout/Layout'
import Hero from "../components/Hero/Hero";
import Seo from '../components/seo'
import { BLACK_BACKGROUND } from '../constants';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
    <Hero
      height="1400px"
      background={BLACK_BACKGROUND}
      style={{textAlign: 'center'}}>
        <h1 style={{paddingTop:"500px"}}>
          A cooler looking resume is comming soon. 
        </h1>
        <h1 style={{marginBottom: "50px"}}>Click below for a pdf version.</h1>
        <OutboundLink href='https://personalsite-koomen.imfast.io/ted_koomen_resume.pdf' rel="noreferrer" target="_blank">
          résumé
        </OutboundLink>
      </Hero>
  </Layout>
)

export default Resume
