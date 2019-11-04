import React from 'react';
import styled from 'styled-components';
import NavItem from './navitem';

const Container = styled.div`
 @media ${({ theme }) => theme.mediaQueries.small}{
    display:none;
  }
`

const sections = ['About Me', 'Projects', 'Contact'];

const DesktopMenu = ()=>{
  return(
    <Container >
      {sections.map(section=>(
        <NavItem key={section} section={section} />
      ))}
    </Container >
  )
}

export default DesktopMenu;
