import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"
import NavItem from "./navitem"

const Menu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 5;
  top: 50px;
  transform: ${({ open }) => (open ? "translate(0)" : "translate(-100%)")};
  width: 100%;
  height: calc(100vh - 50px);
  height: calc(var(--vh, 1vh) * 100 - 50px);
  background-color: white;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.5s;
`

const AnimatedMenu = animated(Menu)
const sections = ["About Me", "Projects", "Contact"]

const MobileMenu = ({ open, toggleMenu }) => {
  return (
    <AnimatedMenu open={open} onClick={() => toggleMenu()}>
      {sections.map(section => (
        <NavItem
          toggleMenu={toggleMenu}
          mobile
          key={section}
          section={section}
        />
      ))}
    </AnimatedMenu>
  )
}

export default MobileMenu
