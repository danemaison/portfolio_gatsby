import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:80%;
  margin: auto;
`
const Header = styled.div`
  width:100%;
  margin-bottom:15px;
  text-align: center;
`

const Title = styled.div`
  display:flex;
  justify-content: center;
  position: relative;
  color:white;
  margin-bottom:5px;
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width:75%;
  margin:auto;
  margin-bottom:15px;
`

const Button = styled.button`
  font-size:.6rem;
  width:100px;
  border-radius: 50px;
  background-color:white;
  border:1px solid #575757;
  color:#575757;
  font-weight:700;
  text-transform:uppercase;
`

const Projects = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
`

const Project = styled.div`
  height:180px;
  width:250px;
  margin:15px;
  border:1px solid black;

`

const Portfolio = () =>{
  return(
    <Container>
      <Header>
        <Title>
          Projects
        </Title>
        Check out what I've been working on.
      </Header>
      <Buttons>
        <Button>All</Button>
        <Button>Frontend</Button>
        <Button>Full-Stack</Button>
        <Button>Other</Button>
      </Buttons>
      <Projects>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </Projects>
    </Container>
  )

}


export default Portfolio;
