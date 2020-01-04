import React from "react"

import Layout from "../components/layout"
import Body from "../components/body"
import Hero from "../components/hero"
import SEO from "../components/seo"
import HeroImg from "../svg/undraw_mindfulness.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Hero
      text="Find out more about the starter and what it offers"
      image={<HeroImg />}
    />
    <Body>
      <h1>About</h1>
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

export default AboutPage
