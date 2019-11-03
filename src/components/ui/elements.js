import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.div`
  display:flex;
  justify-content: center;
  position: relative;
  color:white;
  margin:12px 0;
  font-size:23px;
  font-weight:700;
  text-transform: uppercase;
  &::after{
    content: "";
    z-index: -1;
    position: absolute;
    width:180px;
    left:50%;
    transform: translate(-50%) rotateZ(-2deg);
    background-color:#127EB1;
    height:100%;

  }
`

export {
  SectionTitle
}
