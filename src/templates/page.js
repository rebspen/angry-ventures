import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"

export const query = graphql`
  query PageQuery($id: String) {
    prismic {
      allPages(id: $id) {
        edges {
          node {
            page_title
            content
            _meta {
              id
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  const pageTitle = props.data.prismic.allPages.edges[0].node.page_title
  const content = props.data.prismic.allPages.edges[0].node.content
  return (
    <div>
      <Layout>
        <RichText render={pageTitle} />
        <RichText render={content} />
      </Layout>
    </div>
  )
}

export default Page
