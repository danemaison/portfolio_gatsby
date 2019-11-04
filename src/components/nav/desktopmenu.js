import React from "react"
import styled from "styled-components"
import NavItem from "./navitem"

const Container = styled.div`
  display: none;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    display: flex;
  }
`

const sections = ["About Me", "Projects", "Contact"]

const DesktopMenu = () => {
  return (
    <Container>
      {sections.map(section => (
        <NavItem key={section} section={section} />
      ))}
    </Container>
  )
}

export default DesktopMenu
