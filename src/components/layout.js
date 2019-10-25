/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from 'styled-components';

const Main = styled.main`
  color:#575757;
  margin-top: 50px;
  font-family: 'Montserrat', sans-serif;
`

const Footer = styled.footer`
  width:100%;
  height:150px;
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  font-family: 'Montserrat', sans-serif;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
     allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          extension: { eq: "md" }
          relativeDirectory: { regex: "/portfolio/" }
        }
        sort: { fields: [dir], order: DESC }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                title
              }
              html
            }
          }
        }
      }
    }
  `)


  console.log(data);

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <div>Dane Maison</div>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
