import React from 'react';
import styled from 'styled-components';
import {useSpring, animated, config} from 'react-spring';



const Menu = styled.nav`
  position:fixed;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  z-index:5;
  top:50px;
  left:${({open})=> open ? 0: '-100%'};
  width:100%;
  height:calc(100vh - 50px);
  background-color: white;
  opacity: ${({ open }) => open ? 1 : 0};
  transition:.5s;
`

const AnimatedMenu = animated(Menu);

const MobileMenu = ({open, setOpen}) => {
  return(
    <AnimatedMenu open={open} onClick={()=> setOpen(!open)}>
      <div>Item</div>
    </AnimatedMenu>
  )
}

export default MobileMenu;
