import React from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/Image"
import Layout from "../components/layout"
import Seo from "../components/seo"

function Contact({ data }) {
  const { name, company, address } = data.site.siteMetadata.contact

  return (
    <Layout>
      <Seo title="Home" />
      <h1>Contact Us</h1>
      <p>Please send all creative inquiries to: </p>
      <div>{company}</div>
      <div>{`C/O ${name}`}</div>
      <div>{address}</div>
      <Image />
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`
