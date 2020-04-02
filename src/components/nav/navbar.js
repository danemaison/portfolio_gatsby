import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Brand from "./brand"
import Hamburger from "./hamburger"
import MobileMenu from "./mobilemenu"
import DesktopMenu from "./desktopmenu"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: white;
  color: black;
  height: 50px;
  width: 100%;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1);
`

const NavBar = props => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    console.log("hello")
    setOpen(!open)
    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "scroll"
    } else {
      document.body.style.overflowY = "hidden"
    }
  }
  return (
    <>
      <Nav>
        <Brand />
        <DesktopMenu />
      </Nav>
      <Hamburger open={open} toggleMenu={toggleMenu} />
      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
