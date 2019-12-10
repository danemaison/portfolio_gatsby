import React from "react"
import styled from "styled-components"
import { SectionTitle } from "../components/ui/elements"
import { useStaticQuery, graphql } from "gatsby"
import rehypeReact from "rehype-react"
import Img from "gatsby-image"

const Image = styled(Img)`
  width: 300px;
  height: 300px;
  margin: 25px 0;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.5);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 5%;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    margin: 50px 15%;
  }
`

const Body = styled.div`
  text-align: center;
`
const Title = styled(SectionTitle)`
  position: relative;
  z-index: 3;
`
const StackHeader = styled(SectionTitle)`
  text-align: center;
  font-size: 1.2rem;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
  font-weight: 700;
`
const StackBody = styled.div`
  text-align: center;
  font-weight: 700;
`

const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  white-space: nowrap;
  z-index: 1;
  &::after {
    content: "";
    width: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    height: 35%;
    background-color: #c4ebff;
    z-index: -1;
  }
`
const renderCustom = new rehypeReact({
  createElement: React.createElement,
  components: {
    span: StyledSpan,
  },
}).Compiler

const About = () => {
  const { about } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.md" }) {
        childMarkdownRemark {
          frontmatter {
            stack
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 80) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          htmlAst
        }
      }
    }
  `)
  const { stack, image } = about.childMarkdownRemark.frontmatter
  const { htmlAst } = about.childMarkdownRemark

  return (
    <Container id="about-me">
      <Title>About Me</Title>
      <Image fluid={image.childImageSharp.fluid} />
      <Body>{renderCustom(htmlAst)}</Body>
      <StackHeader>Some tools I've used</StackHeader>
      <StackBody>{stack}</StackBody>
    </Container>
  )
}

export default About
