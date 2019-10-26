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
  z-index: 9;
  background-color:white;
  color:black;
  height:50px;
  width:100%;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.1);
`;

const Brand = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;
  margin-left:50px;
`

const Button = styled.a`
  font-size:.6rem;
  font-weight:700;
  text-transform:uppercase;
  margin-right:35px;
  border:none;
  background-color:transparent;
  transition:.3s;

  &:hover {
    cursor:pointer;
    color:#127EB1;
  }
`
const SubBrand = styled.div`
  letter-spacing: 3px;
  font-size:.5rem;
  font-weight:700;
  text-transform:uppercase;
  margin-left:3px;
  color:#127EB1;
`
const Name = styled.div`
  margin-top:3px;
  margin-bottom:-10px;
  /* font-weight: 700; */
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Brand>
      <Name>Dane Maison</Name>
      <SubBrand>Web Developer</SubBrand>
    </Brand>
    <div>
      <Button>About Me</Button>
      <Button>Projects</Button>
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
