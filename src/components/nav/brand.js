import React from "react"
import styled from "styled-components"
import { useSpring, config, animated } from "react-spring"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 20px;
`

const SubBrand = styled.div`
  letter-spacing: 3px;
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`

const Name = styled.div``

const AnimatedName = animated(Name)
const AnimatedSubBrand = animated(SubBrand)

const Brand = () => {
  const nameSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: "translateX(0px)",
    from: { transform: "translateX(-10px)", opacity: 0 },
  })
  const subBrandSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: "translateX(0px)",
    from: { transform: "translateX(10px)", opacity: 0 },
  })
  return (
    <Container>
      <AnimatedName style={nameSpring}>Dane Maison</AnimatedName>
      <AnimatedSubBrand style={subBrandSpring}>
        Software Engineer
      </AnimatedSubBrand>
    </Container>
  )
}

export default Brand
