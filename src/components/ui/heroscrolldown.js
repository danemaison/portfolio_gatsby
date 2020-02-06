import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated, config } from "react-spring"
import { Link } from "react-scroll"

const StyledIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.primary};
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: calc(50% - 1rem);
  width: 2rem;
  height: 2rem;
  transform: translate(-50%, 0);
  > a:hover {
    cursor: pointer;
  }
`

const AnimatedWrapper = animated(Wrapper)

const ScrollDown = () => {
  const scrollDownSpring = useSpring({
    config: config.wobbly,
    delay: 700,
    opacity: 1,
    transform: "translateY(0)",
    from: {
      opacity: 0,
      transform: "translateY(-25px)",
    },
  })
  return (
    <AnimatedWrapper style={scrollDownSpring}>
      <Link to="about-me" offset={-50} spy={true} smooth={true}>
        <StyledIcon icon={faChevronDown} />
      </Link>
    </AnimatedWrapper>
  )
}

export default ScrollDown
