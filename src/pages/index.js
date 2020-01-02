import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Body from "../components/body"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_suburbs.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      text="Welcome to the Gatsby Tailwind Netlify CMS Starter"
      image={<HeroImg />}
      cta={{ to: "/facilities", text: "Go places!" }}
    />
    <Body>
      <h1 className="font-display text-2xl mt-16 mb-8">Page Title</h1>
      <p className="text-secondary text-base font-body">
        Holt Village Hall is situated in the heart of the village, offering two
        bookable floors and a large car park providing a facility which is
        second to none in the surrounding area.
      </p>
    </Body>
  </Layout>
)

export default IndexPage
