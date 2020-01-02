import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"

import SEO from "../components/seo"
import HeroImg from "../svg/undraw_contactus.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      text="We're on hand to answers your queries and listen to your feedback"
      image={<HeroImg />}
    />
    <Body>
      <h1>Contact Us</h1>
      <p>All our Committee are volunteers and phones are not monitored 24/7.</p>
      <p>
        We will endeavour to get back to you within 48 hours though emails
        usually get answered sooner.
      </p>
      <h3>General enquiries</h3>
      <a href="mailto:grayivor@hotmail.com">grayivor@hotmail.com</a>
      <p className="mt-4">Holt Village Hall - Wiltshire,</p>
      <p>The Street,</p>
      <p>Holt,</p>
      <p>Wiltshire,</p>
      <p>BA14 6QH</p>
      <h2>Where to find us</h2>
    </Body>
  </Layout>
)

export default IndexPage
