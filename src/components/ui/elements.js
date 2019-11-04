import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.div`
  display:flex;
  justify-content: center;
  position: relative;
  color:#212934;
  margin:12px 0;
  font-size:23px;
  font-weight:700;
  text-transform: uppercase;
  &::after{
    content: "";
    z-index: -1;
    bottom:0;
    position: absolute;
    width:180px;
    left:50%;

    transform: translate(-50%);
    background-color:	#a8eec1;
    height:35%;
  }
`

export {
  SectionTitle
}
