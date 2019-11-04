import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from 'styled-components';
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Main = styled.main`
  /* color:#575757; */
  margin-top: 50px;
  font-family: 'Montserrat', sans-serif;
`

const Layout = ({ children }) => {
  return (
    <>
      <NavBar/>
      <Main>{children}</Main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
