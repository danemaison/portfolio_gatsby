import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import ScrollDown from './ui/heroscrolldown';
import {Link} from 'react-scroll';
import TextRotator from './ui/selfdescription';

const Container = styled.div`
  font-weight: 300;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:calc(90vh - 100px);
`

const Header = styled(animated.div)`
  margin-top:-90px;
  position: relative;
  z-index: 3;
  font-size:2.3rem;
  line-height:55px;
  text-align:left;
  > div {
    margin-top:15px;
  }
`

const Name = styled.div`
  display:inline-block;
  font-weight:700;
  color: #127EB1;
`

const SubHeader = styled(animated.div)`
  position: relative;
  z-index: 3;
  font-size: 1.1rem;
  text-align:left;
`

const HeroButton = styled(Link)`
  position: relative;
  text-align:center;
  font-size: .4rem;
  font-weight: 700;
  letter-spacing:2.5px;
  text-transform: uppercase;
  padding: 10px;
  width: 200px;
  border-radius: 50px;

  background-color: ${props => props.primary ? "#127EB1" : "white"};
  border: 1px solid ${props => props.primary ? "#127EB1" : "#999"};
  color: ${props => props.primary ? "white" : "#6e6e6e"};


  transition:.2s;
  outline:none;
  z-index: 3;

  &:hover{
    box-shadow:2px 7.5px 8px rgba(0, 0, 0, .05);
    transform: translateY(-3px);
    cursor: pointer;
  }
  &:active{
    box-shadow:0px 3px 5px rgba(0, 0, 0, .05);
    transform: translateY(-1px);
  }
`


const AnimatedButton = animated(HeroButton);

const Hero = () => {
  const HeaderSpring = useSpring({
    config: config.wobbly,
    delay: 200,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { opacity: 0, transform: 'translateX(40px)' },
  });

  const SubHeaderSpring = useSpring({
    config: config.wobbly,
    delay: 500,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity:0, transform: 'translateY(40px)'},
  })

  const ButtonSpring = useSpring({
    opacity: 1,
    delay: 700,
    from: {opacity: 0}
  })

  return(
    <>
      <Container>
        <Header style={HeaderSpring}>
            Hey! <span role="img" aria-label="waving hand emoji">👋🏻</span><br/>I'm <Name>Dane Maison</Name>
          <SubHeader style={SubHeaderSpring}>
            I'm a <TextRotator />
          </SubHeader>
          <AnimatedButton primary="true" style={ButtonSpring} to='about-me' spy={true} smooth={true} offset={-50} >Learn More</AnimatedButton>
        </Header>
      </Container>
      <ScrollDown />
    </>
  );
}


export default Hero;
