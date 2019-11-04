import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../components/ui/elements';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  margin:80px auto;
  height:30vh;
`
const Body = styled.div`
margin-top:30px;
text-align:center;
`
const Email = styled.div`
  font-weight:700;
`

const ButtonContainer = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  button {
    margin-right:1rem;
  }
  button:last-child{
    margin-right:0;
  }
`
const Button = styled.button`
  border: 2px solid #127EB1;
  border-radius:50%;
  width: 2.5rem;
  height:2.5rem;
  display:flex;
  align-items:center;
  background-color:transparent;
  justify-content:center;
  transition: .5s;
  &:hover{
    cursor:pointer;
    background-color:#127EB1;
    color:white;

  }
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
`

const Contact = () =>{

  return(
    <Container id="contact">
      <SectionTitle>Contact Me</SectionTitle>
        Want to talk? Send me an email at
        <Email>danemaison@gmail.com</Email>
        <ButtonContainer>
          <Button>
            <Icon icon={faLinkedinIn}/>
          </Button>
          <Button>
            <Icon icon={faGithub}/>
          </Button>
        <Button>
          <Icon icon={faFile} />
        </Button>
        </ButtonContainer>
    </Container>

  )
}

export default Contact;
