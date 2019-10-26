import React from 'react';
import styled from 'styled-components';


const PrimaryButton = styled.button`
  font-size: .6rem;
  width: 100px;
  border-radius: 50px;
  background-color: #127EB1;
  border: 1px solid #127EB1;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  transition:.2s;
  box-shadow:none;
  outline:none;

  &:hover{
    box-shadow:2px 7.5px 8px rgba(0, 0, 0, .5);
    transform: translateY(-3px);
    cursor: pointer;
  }
  &:active{
    box-shadow:0px 3px 5px rgba(0, 0, 0, .5);
    transform: translateY(-1px);
  }
`
const SecondaryButton = styled(PrimaryButton)`
  color:#6e6e6e;
  background-color: white;
  border: 1px solid #999;
`


export {
  PrimaryButton,
  SecondaryButton,
}
