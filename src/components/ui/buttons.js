import styled from "styled-components"

const Button = styled.button`
  padding: 0;
  font-size: 0.6rem;
  width: 100px;
  border-radius: 50px;
  background-color: ${({ primary, theme }) =>
    primary ? theme.primary : "white"};
  border: 1px solid
    ${({ primary, theme }) => (primary ? theme.primary : "#999")};
  color: ${({ primary, theme }) => (primary ? "white" : theme.grey)};
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.2s;
  box-shadow: none;
  outline: none;

  &:hover {
    box-shadow: 2px 7.5px 8px rgba(0, 0, 0, 0.05);
    transform: translateY(-3px);
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
  }
`

export { Button }
