import React from "react"
import styled from "styled-components"
import { Button } from "../components/ui/buttons"
import Img from "gatsby-image"

const Container = styled.div`
  padding: 12px 10px;
  position: relative;
  display: flex;
  white-space: normal;
  flex-direction: column;
  margin-bottom: 15px;
  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 20px 25px;
  }
`
const SubHeader = styled.div`
  width: 100%;
  text-align: left;
  font-size: 0.75rem;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = styled.div`
  font-weight: 800;
  text-align: left;
  width: 100%;
`

const Image = styled(Img)`
  margin-bottom: 10px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.5);
`

const PortfolioButton = styled(Button)`
  width: 55px;
  height: 20px;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;

  &:first-child {
    margin-right: 5px;
  }
`
const Stack = styled.div`
  margin-top: 5px;
  font-weight: 700;
  font-size: 0.75rem;
`
const Anchor = styled.a`
  text-decoration: none;
`
const HeaderRow = styled(Row)`
  margin: 10px 0;
`
export default function PortfolioItem({ data }) {
  const { childMarkdownRemark } = data
  const { frontmatter } = childMarkdownRemark
  const { image, title, stack, description, source, live } = frontmatter

  return (
    <Container>
      <Image fluid={image.childImageSharp.fluid} />
      <HeaderRow>
        <Header>{title}</Header>
        <Row>
          <Anchor
            target="_blank"
            aria-label="Live"
            rel="noreferrer"
            href={live}
          >
            <PortfolioButton primary aria-label="Live link">
              Live
            </PortfolioButton>
          </Anchor>
          <Anchor
            rel="noreferrer"
            target="_blank"
            aria-label="Source"
            href={source}
          >
            <PortfolioButton aria-label="Source link">Source</PortfolioButton>
          </Anchor>
        </Row>
      </HeaderRow>
      <SubHeader>
        {description}
        <Stack>{stack}</Stack>
      </SubHeader>
    </Container>
  )
}
