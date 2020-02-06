import styled from "styled-components"

const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  font-style: italic;
  color: #212934;
  margin: 12px 0;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 4px;
    bottom: -0.3rem;
    left: 50%;
    transform: translate(-50%);
    background-color: #249ad1;
  }
`

export { SectionTitle }
