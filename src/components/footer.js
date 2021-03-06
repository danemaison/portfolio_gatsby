import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  padding: 50px 0;
`

const Header = styled.div`
  font-size: 1.5rem;
`
const Subheader = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  letter-spacing: 5px;
`

const Footer = () => {
  return (
    <Container>
      <Header>Dane Maison</Header>
      <Subheader>Software Engineer</Subheader>
    </Container>
  )
}

export default Footer
