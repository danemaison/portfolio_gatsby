import React from 'react';
import styled from "styled-components";
import {Link} from 'react-scroll';
import {animated, useSpring} from 'react-spring';

const StyledLink = styled(Link)`
  font-size: ${({mobile}) => mobile ? '2rem' : '.6rem'};
  font-weight: 700;
  text-transform: uppercase;
  margin-right: ${({ mobile }) => mobile ? '0' : '35px'};
  border: none;
  background-color: transparent;
  transition: .3s;

  &:hover {
    cursor:pointer;
    color:${({ theme }) => theme.primary};
  }
`

const AnimatedLink = animated(StyledLink);


const NavItem = ({section, mobile, open, setOpen}) =>{
  const location = section.toLowerCase().replace(' ', '-');
  const style = useSpring({opacity: 1, from: {opacity: 0}});
  return(

    <AnimatedLink mobile={mobile} onClick={mobile ? ()=> setOpen(!open) : ()=>{}} style={style} to={location} spy={true} smooth={true} offset={-50}>{section}</AnimatedLink>
  )
}

export default NavItem;
