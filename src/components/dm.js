import React from "react"
import styled from "styled-components"
import Dm from "../images/dm.svg"

const Container = styled.div`
  position: fixed;
  right: -25%;
  top: 45%;
  opacity: 0.05;
  transform: translate(0, -50%);
  @media ${({ theme }) => theme.mediaQueries.small} {
    right: 0;
  }
`
const SVG = styled(Dm)`
  width: 160vw;
  height: 100%;
  @media ${({ theme }) => theme.mediaQueries.small} {
    width: 800px;
    height: 1200px;
  }
`
const DM = () => {
  return (
    <Container>
      <SVG />
    </Container>
  )
}

export default DM
