import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from "../components/List"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <List width={[1, 2 / 3, 7 / 8]} p={2}>
      {data.allContentfulBlogPost.edges.map(edge => (
        <ListItem key={edge.node.id} p={3}>
          <Link to={edge.node.slug}>{edge.node.title}</Link>
          <div>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              alt={edge.node.title}
            />
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </ListItem>
      ))}
    </List>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              width: 600
            )
          }
        }
      }
    }
  }
`
