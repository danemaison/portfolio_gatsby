import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from 'styled-components';

const Main = styled.main`
  /* color:#575757; */
  color:black;
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
  return (
    <>
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
