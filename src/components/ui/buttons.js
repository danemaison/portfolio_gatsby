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

  &:hover{
    cursor: pointer;
  }
`
const SecondaryButton = styled(PrimaryButton)`
  color:black;
  background-color: white;
  border: 1px solid black;
`


export {
  PrimaryButton,
  SecondaryButton,
}
