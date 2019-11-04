import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import {animated, useSpring, config } from 'react-spring';
import NavItem from './navitem';

const Nav = styled.nav`
  font-family: 'Montserrat', sans-serif;
  display:flex;
  justify-content: space-between;
  align-items:center;
  position: fixed;
  top:0;
  left:0;
  z-index: 9;
  background-color:white;
  color:black;
  height:50px;
  width:100%;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.1);
`;

const Brand = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  margin-left:20px;
`

const ButtonContainer = styled.div`
  @media(max-width: 700px){
    display:none;
  }
`
const SubBrand = styled.div`
  letter-spacing: 3px;
  font-size:.5rem;
  font-weight:700;
  text-transform:uppercase;
  color:	#249d57;
`

const Name = styled.div``;

const AnimatedName = animated(Name);
const AnimatedSubBrand = animated(SubBrand);

const sections = ['About Me', 'Projects', 'Contact'];

const NavBar = props => {
  const nameSpring = useSpring({
      config: config.wobbly,
      opacity: 1,
      transform:'translateX(0px)',
      from: {transform:'translateX(-10px)', opacity:0},
  })
  const subBrandSpring = useSpring({
    config: config.wobbly,
    opacity: 1,
    transform: 'translateX(0px)',
    from: { transform: 'translateX(10px)', opacity:0 },
  })
  return (
    <Nav>
      <Brand>
        <AnimatedName style={nameSpring}>Dane Maison</AnimatedName>
        <AnimatedSubBrand style={subBrandSpring}>Web Developer</AnimatedSubBrand>
      </Brand>
      <ButtonContainer>
        {sections.map(section=> <NavItem key={section} section={section} />)}
      </ButtonContainer>
    </Nav>
  )
}

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
