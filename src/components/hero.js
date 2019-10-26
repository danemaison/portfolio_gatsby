import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';
import {PrimaryButton} from '../components/ui/buttons';
import TextRotator from '../components/ui/selfdescription';

const Container = styled.div`
  font-weight: 300;
  display:flex;
  text-align:center;
  flex-direction:column;
  width:75%;
  margin:auto;
  justify-content:center;
  align-items:center;
  height:calc(90vh - 100px);
  margin-bottom:15vh;
`

const Logo = styled.div`
position:relative;
  width:400px;
  height:400px;
  border:1px solid transparent;
  border-radius:100%;
  background-color:#089ECA;
`
const Header = styled.div`

margin: 35px 0;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size:3rem;
  width:100%;
  line-height:55px;
  /* border:1px solid black; */
`

const Name = styled.span`
  font-weight:700;
  color: #127EB1;
`

const SubHeader = styled.div`
  font-size: 2rem;
  margin-bottom: 35px;
`

const Button = styled(PrimaryButton)`
  font-size:.8rem;
  width:200px;
  padding:5px;
  letter-spacing:2.5px;
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dm.png" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 1080) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  return(
    <Container>
      <Header>
        Hey, I'm&nbsp;<Name>Dane Maison</Name>! 👋🏻
      </Header>
      <SubHeader>
        I'm a <TextRotator/>
      </SubHeader>
      <Button>Learn More</Button>
    </Container>
  );
}


export default Hero;
