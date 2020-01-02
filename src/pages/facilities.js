import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"

const FacilitiesPage = () => (
  <Layout>
    <SEO title="Facilities" />
    <Hero
      text="We provide affordable facilities to suit a wide range of uses"
      image={<HeroImg />}
    />
    <Body>
      <h1>Facilities</h1>
      <p>Welcome to the facilities page</p>
    </Body>
  </Layout>
)

export default FacilitiesPage
