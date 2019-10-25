import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";

const Nav = styled.nav`
  font-family: 'Montserrat', sans-serif;
  display:flex;
  justify-content: space-between;
  align-items:center;
  position: fixed;
  top:0;
  left:0;
  background-color:white;
  color:black;
  height:50px;
  width:100%;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.1);
`;

const Brand = styled.div`
  margin-left:50px;
`

const Button = styled.a`
  font-size:.6rem;
  font-weight:700;
  text-transform:uppercase;
  margin-right:35px;
  border:none;
  background-color:transparent;
  transition:.5s;

  &:hover {
    cursor:pointer;
    color:blue;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Brand>
      Dane Maison
    </Brand>
    <div>
      <Button>Skills</Button>
      <Button>Portfolio</Button>
      <Button>About Me</Button>
      <Button>Contact</Button>
    </div>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
