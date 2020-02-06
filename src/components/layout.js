import React from "react"
import PropTypes from "prop-types"
import "./styling/layout.css"
import styled from "styled-components"
import NavBar from "../components/nav/navbar"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import { theme } from "./styling/theme"
import DM from "./dm"
import { useWindowSize } from "../utils/windowsize"

const Main = styled.main`
  margin-top: 50px;
`

const Layout = ({ children }) => {
  useWindowSize()
  return (
    <ThemeProvider theme={theme}>
      <>
        <NavBar />
        <DM />
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
