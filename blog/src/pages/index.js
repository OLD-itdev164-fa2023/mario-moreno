import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import { Box, Card } from "rebass"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0;
  min-width: 0px;
  display: grid;
  row-gap: 30px;
  align-self: center;
  justify-self: center;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
`

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />

    <Grid>
      {data.allContentfulBlogPost.edges.map(edge => (
        <Card
          key={edge.node.id}
          width={256}
          p={3}
          sx={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "grey",
            justifySelf: "center",
          }}
        >
          <Link to={edge.node.slug}>{edge.node.title}</Link>
          <div>
            <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              alt={edge.node.title}
            />
          </div>
          <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
        </Card>
      ))}
    </Grid>
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
