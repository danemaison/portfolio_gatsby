import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"
import NavBar from "../components/nav/navbar"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import { theme } from "./styling/theme"

const Main = styled.main`
  margin-top: 50px;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBar />
        <Main>{children}</Main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
