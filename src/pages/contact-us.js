import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"

import SEO from "../components/seo"
import HeroImg from "../svg/undraw_contactus.svg"
import Map from "../images/google-maps.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero
      text="We're on hand to answers your queries and listen to your feedback"
      image={<HeroImg />}
    />
    <Body>
      <h1>Contact Us</h1>
      <p>
        We would love to hear from you, whether it's making a booking or
        providing some valuable feedback we can use to improve.
      </p>
      <p>
        We will endeavour to get back to you within 48 hours though emails
        usually get answered sooner.
      </p>
      <h3>General enquiries</h3>
      <a className="mt-4 inline-block" href="mailto:email@host.com">
        email@host.com
      </a>
      <p className="mt-4 mb-0">An address,</p>
      <p className="mt-0 mb-0">The Street,</p>
      <p className="mt-0 mb-0">Town,</p>
      <p className="mt-0 mb-0">County,</p>
      <p className="mt-0 mb-0">POST COD</p>
      <h2>Where to find us</h2>
      <img src={Map} />
    </Body>
  </Layout>
)

export default IndexPage
