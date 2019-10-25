import React from 'react';
import styled from 'styled-components';

export default function PortfolioItem({data}){
  const {markdownRemark} = data;
  console.log(markdownRemark);
  return(
    <div>
      Hi
    </div>
  )
}
