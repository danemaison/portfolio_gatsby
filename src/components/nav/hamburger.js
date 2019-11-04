import React from 'react';
import styled from 'styled-components';

const Burger = styled.button`
  margin-right:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  width:1.55rem;
  height:1.55rem;
  background:transparent;
  border:none;
  cursor:pointer;
  padding:0;
  z-index:10;
  &:focus{
    outline:none;
  }
  div {
    background-color:${({ theme }) => theme.primary};
    width:1.55rem;
    height:3px;
    transition: .3s;
    border-radius:5px;
    transform-origin: 1px;
  }

`

const Hamburger = ({open, setOpen})=> {
  return(
    <Burger open={open} onClick={()=>setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  )

}

export default Hamburger;
