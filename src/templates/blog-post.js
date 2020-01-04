import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Body from "../components/body"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Body>
        <h1 className="mb-0">{frontmatter.title}</h1>
        <span
          className="inline-block bg-tertiary mb-2xl"
          style={{ height: `5px`, width: `80px` }}
        ></span>
        <h4 className="font-display text-secondary mb-16 mt-4">
          {frontmatter.date}
        </h4>
        <div
          className="w-full md:w-2/3"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Body>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
