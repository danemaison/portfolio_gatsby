import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../components/ui/elements';
import { useStaticQuery, graphql } from 'gatsby';
import rehypeReact from 'rehype-react';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width:75%;
  margin:80px auto;
  justify-content: center;
  align-items: center;
`

const Body = styled.div`
  text-align: center;
`
const Title = styled(SectionTitle)`
  position:relative;
  z-index: 3;
`
const StackHeader = styled.div`
  width:30%;
  text-align:center;
  font-size:1.2rem;
  margin:auto;
  margin-top:50px;
  margin-bottom:10px;
  color:#127EB1;
  font-weight:700;
`
const StackBody = styled.div`
  text-align: center;
  font-weight:700;
`
const renderCustom = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const About = ()=>{
  const { about } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          frontmatter {
            stack
          }
          htmlAst
        }
      }
    }
  `);
  const { stack } = about.childMarkdownRemark.frontmatter
  const { htmlAst } = about.childMarkdownRemark;

  return(
    <Container>
      <Title>
        About Me
      </Title>
      <Body>
        {renderCustom(htmlAst)}
      </Body>
      <StackHeader>
        Some tools I've used:
      </StackHeader>
      <StackBody>
        {stack}
      </StackBody>
    </Container>
  )

}


export default About;
