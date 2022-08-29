import React from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/Image"
import Layout from "../components/layout"
import Seo from "../components/seo"

function About({ data }) {
  const { name, company } = data.site.siteMetadata.contact

  return (
    <Layout>
      <Seo title="Home" />
      <h1>About Us</h1>
      <p>{`${company} was started by ${name} in 2022.`}</p>
      <p>{`At ${company} we just create creative stuff`}</p>
      <Image />

      <Link to="/">Home</Link>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`
