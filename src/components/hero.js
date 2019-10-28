import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import { useSpring, animated, config } from 'react-spring';
import {ButtonPrimary} from '../components/ui/buttons';
import TextRotator from '../components/ui/selfdescription';

const Container = styled.div`
  font-weight: 300;
  display:flex;
  text-align:center;
  flex-direction:column;
  margin:auto;
  justify-content:center;
  align-items:center;
  height:calc(90vh - 100px);
  margin-bottom:15vh;
`

const Header = styled(animated.div)`
  position: relative;
  z-index: 3;
  margin: 35px auto;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:3rem;
  line-height:55px;
`

const Name = styled.span`
  font-weight:700;
  color: #127EB1;
`

const SubHeader = styled(animated.div)`
  position: relative;
  z-index: 3;
  font-size: 2rem;
  margin-bottom: 35px;
`

const Button = styled(ButtonPrimary)`
  position: relative;
  z-index: 3;
  font-size:.8rem;
  width:200px;
  padding:5px;
  letter-spacing:2.5px;
`

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
    <Container>
      <Header style={HeaderSpring}>
        Hey, I'm&nbsp;<Name>Dane Maison</Name>! 👋🏻
      </Header>
      <SubHeader style={SubHeaderSpring}>
        I'm a <TextRotator/>
      </SubHeader>
      <Button style={ButtonSpring}>Learn More</Button>
    </Container>
  );
}


export default Hero;
