import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SliceZone from "../components/sliceZone"

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          body {
            ... on PRISMIC_HomepageBodyHero {
              type
              primary {
                background_image
                hero_content
                hero_title
                logo_image
              }
            }
            ... on PRISMIC_HomepageBodyAngry_brain {
              type
              primary {
                brain_one
                brain_two
                brain_title
              }
            }
            ... on PRISMIC_HomepageBodyCase {
              type
              fields {
                case_content
                case_image
                case_title
                case_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                case_link_label
              }
            }
            ... on PRISMIC_HomepageBodyTools {
              type
              primary {
                our_tools
                tools_content
                tools_title
              }
              fields {
                tool_link {
                  ... on PRISMIC__ExternalLink {
                    _linkType
                    url
                  }
                }
                tool_name
              }
            }
            ... on PRISMIC_HomepageBodyCase_2 {
              type
              fields {
                case_content
                case_image
                case_title
                case_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                case_link_label
              }
            }
            ... on PRISMIC_HomepageBodySequences {
              type
              fields {
                tool_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                tool_name
              }
              primary {
                our_sequences
                sequences_content
                sequences_title
              }
            }
            ... on PRISMIC_HomepageBodyContact_form {
              type
              primary {
                contact_footer
                contact_title
                contact_subtitle
                email_placeholder
                last_name_placeholder
                name_placeholder
              }
            }
            ... on PRISMIC_HomepageBodyFooter {
              type
              label
              primary {
                footer_title
              }
              fields {
                social_image
                social_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
            ... on PRISMIC_HomepageBodyFooter_ending {
              type
              fields {
                footer_content
                footer_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`

const IndexPage = (props) => {
  return (
  <Layout>
  <SliceZone body= {props.data.prismic.allHomepages.edges[0].node.body} />
  </Layout>
  )
}

export default IndexPage
