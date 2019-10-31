import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../components/ui/elements';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  margin:80px auto;
`

const Contact = () =>{

  return(
    <Container id="contact">
      <SectionTitle>Contact Me</SectionTitle>
    </Container>
  )
}

export default Contact;
