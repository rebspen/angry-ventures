/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

const Main = styled.main`
  margin: 0 auto;
`
const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            branding
            navigation_links {
              label
              nav_link {
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
`

const NavLink = styled.div`
  margin: auto 0;
  a {
    color: navy;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: orange;
    }
  }
`

const Header = styled.header`
  display: flex;
  background: white;
  height: 120px;
  padding: 0 7em;
  box-sizing: border-box;
`

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  margin-bottom: 1em;

  img{
  width: 3em;
  margin:0 1em;
  margin-bottom: -1em;
}
`
const Branding = styled.div`
img{
  width: 2em;
  margin-top: 2.3em;
}
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StaticQuery
          query={`${navigationQuery}`}
          render={data => {
            console.log(data)
            return (
              <>
              <Branding>
                <img src={data.prismic.allNavigations.edges[0].node.branding.url} alt=""/>
              </Branding>
                <NavLinks>
                  {data.prismic.allNavigations.edges[0].node.navigation_links.map(
                    link => {
                      return (
                        <NavLink key={link.nav_link.url}>
                          <a href={link.nav_link.url}>
                            {link.label}
                            <img src="/Images/right-arrow.png" alt=""/>
                          </a>
                        </NavLink>
                      )
                    }
                  )}
                </NavLinks>
              </>
            )
          }}
        />
      </Header>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
