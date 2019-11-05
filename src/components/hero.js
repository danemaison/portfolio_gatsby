import React from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import ScrollDown from "./ui/heroscrolldown"
import { Link } from "react-scroll"
import TextRotator from "./ui/selfdescription"

const Container = styled.div`
  font-weight: 300;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  min-height: calc(85vh - 100px);
  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 130%;
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    font-size: 150%;
    min-height: calc(100vh - 100px);
    text-align: left;
    align-items: flex-start;
    margin-left: 5%;
  }
`

const Header = styled(animated.div)`
  margin-top: -90px;
  position: relative;
  z-index: 3;
  font-size: 2.3em;
  line-height: 55px;

  > div {
    margin-top: 15px;
  }
`

const Name = styled.div`
  display: inline-block;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`

const SubHeader = styled(animated.div)`
  position: relative;
  z-index: 3;
  font-size: 1.1rem;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    font-size: 1.5rem;
  }
`

const HeroButton = styled(Link)`
  position: relative;
  text-align: center;
  font-size: 0.4rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 10px;
  width: 200px;
  border-radius: 50px;

  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : "white"};
  border: 1px solid
    ${({ theme, primary }) => (primary ? theme.primary : "#999")};
  color: ${({ theme, primary }) => (primary ? "white" : theme.grey)};

  transition: 0.2s;
  outline: none;
  z-index: 3;

  &:hover {
    box-shadow: 2px 7.5px 8px rgba(0, 0, 0, 0.05);
    transform: translateY(-3px);
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
  }
`

const AnimatedButton = animated(HeroButton)

const Hero = () => {
  const HeaderSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: "translateX(0px)",
    from: { opacity: 0, transform: "translateX(40px)" },
  })

  const SubHeaderSpring = useSpring({
    config: config.wobbly,
    delay: 500,
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(40px)" },
  })

  const ButtonSpring = useSpring({
    opacity: 1,
    delay: 700,
    from: { opacity: 0 },
  })

  return (
    <>
      <Container>
        <Header style={HeaderSpring}>
          Hey!{" "}
          <span role="img" aria-label="waving hand emoji">
            👋🏻
          </span>
          <br />
          I'm <Name>Dane Maison</Name>
          <SubHeader style={SubHeaderSpring}>
            I'm a <TextRotator />
          </SubHeader>
          <AnimatedButton
            primary="true"
            style={ButtonSpring}
            to="about-me"
            spy={true}
            smooth={true}
            offset={-50}
          >
            Learn More
          </AnimatedButton>
        </Header>
      </Container>
      <ScrollDown />
    </>
  )
}

export default Hero
