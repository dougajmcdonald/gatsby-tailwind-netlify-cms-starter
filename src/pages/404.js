import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Button from "../components/button"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_feelingblue.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Hero
      text="We seem to have mislaid the page you were looking for"
      image={<HeroImg width="300px" height="300px" />}
    />
    <Body>
      <h1>Page not found</h1>
      <p>We're sorry but the page you've tried to visit wasn't found.</p>
      <p>Please check the address in your browser if you've typed it.</p>
      <Button to="/">Go Home</Button>
    </Body>
  </Layout>
)

export default NotFoundPage
