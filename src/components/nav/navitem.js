import React from 'react';
import styled from "styled-components";
import {Link} from 'react-scroll';
import {animated, useSpring} from 'react-spring';

const StyledLink = styled(Link)`
  font-size:.6rem;
  font-weight:700;
  text-transform:uppercase;
  margin-right:35px;
  border:none;
  background-color:transparent;
  transition:.3s;

  &:hover {
    cursor:pointer;
    color:${({ theme }) => theme.primary};
  }
`

const AnimatedLink = animated(StyledLink);


const NavItem = ({section}) =>{
  const location = section.toLowerCase().replace(' ', '-');
  const style = useSpring({opacity: 1, from: {opacity: 0}});
  return(
    <AnimatedLink style={style} to={location} spy={true} smooth={true} offset={-50}>{section}</AnimatedLink>
  )
}

export default NavItem;
