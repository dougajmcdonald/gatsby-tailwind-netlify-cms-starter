import React from "react"

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
      cta={{ to: "/contact-us", text: "How to find us" }}
    />
    <Body>
      <h1>Welcome</h1>
      <p>Welcome to the Gatsby Tailwind Netlify CMS starter.</p>
      <h2>The Goal</h2>
      <p>
        This starter brings together, Gatsby, TailwindCSS and NetlifyCMS to make
        it simple to create a site with static generation, flexible styling and
        dynamic posts driven by Markdown.
      </p>
      <h3>Tailwind</h3>
      <p>
        It provides a simple tailwind configuration which is responsive and easy
        to either extend, or throw away and start over.
      </p>
      <h3>Netlify CMS</h3>
      <p>
        We include a Netlify configuration which allows you to use Netlify CMS
        to generate posts with some straight-forward fields which are at their
        heart just Markdown files hosted on Github.
      </p>
      <h3>Extras</h3>
      <p>
        It provide an implementation of the stack above with some added extras.
      </p>
      <ul>
        <li>Netlify CMS configured for a simple blog / event list</li>
        <li>A simple mobile first theme</li>
        <li>SEO optimisation</li>
        <li>Self hosted Google fonts via typefaces</li>
        <li>SVG image imports</li>
        <li>Google analytics</li>
      </ul>
    </Body>
  </Layout>
)

export default IndexPage
