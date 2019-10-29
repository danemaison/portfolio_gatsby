import React from 'react';
import styled from 'styled-components';
import {animated} from 'react-spring';


const Button = styled(animated.button)`
  font-size: .6rem;
  width: 100px;
  border-radius: 50px;
  background-color: ${props => props.primary ? "#127EB1" : "white"};
  border: 1px solid ${props => props.primary ? "#127EB1" : "#999"};
  color: ${props => props.primary ? "white" : "#6e6e6e"};
  font-weight: 700;
  text-transform: uppercase;
  transition:.2s;
  box-shadow:none;
  outline:none;

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

export {
  Button
}
