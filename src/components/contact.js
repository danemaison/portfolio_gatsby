import React from "react"
import styled from "styled-components"
import { SectionTitle } from "../components/ui/elements"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 150px auto;
  margin-bottom: 80px;
  height: 30vh;
`

const Email = styled.div`
  font-weight: 700;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.5rem;
  font-weight: 300;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    margin-right: 1.5rem;
  }
  div:last-child {
    margin-right: 0;
  }
`
const Anchor = styled.a`
  border: 2px solid ${({ theme }) => theme.primary};
  color: black;
  border-radius: 50%;
  margin-bottom: 5px;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  background-color: transparent;
  justify-content: center;
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`
const Icon = styled(FontAwesomeIcon)`
  font-size: 1rem;
`

const Contact = () => {
  return (
    <Container id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      Want to talk? Send me an email at
      <Email>danemaison@gmail.com</Email>
      <ButtonContainer>
        <LinkWrapper>
          <Anchor
            rel="noreferrer"
            target="_blank"
            aria-label="Github"
            href="https://github.com/danemaison"
          >
            <Icon icon={faGithub} />
          </Anchor>
          Github
        </LinkWrapper>
        <LinkWrapper>
          <Anchor
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/dane-maison/"
          >
            <Icon icon={faLinkedinIn} />
          </Anchor>
          LinkedIn
        </LinkWrapper>
        <LinkWrapper>
          <Anchor
            rel="noreferrer"
            target="_blank"
            aria-label="Resume"
            href="https://www.dropbox.com/s/9nkrxavtnvocx3o/Dane%20Maison%20-%20Resume.pdf?dl=0"
          >
            <Icon icon={faFile} />
          </Anchor>
          Resume
        </LinkWrapper>
      </ButtonContainer>
    </Container>
  )
}

export default Contact
