import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition, config } from 'react-spring';



const descriptions = [
  {id: 0, text: 'full-stack developer'},
  { id: 1, text: 'JavaScript enthusiast' },
  { id: 2, text: 'creative problem solver'},
]

const TextWrapper = styled.div`
  font-weight: 600;
  font-style:italic;
  color:black;
  display:inline-block;
  position: relative;
  & span{
    text-align:left;
    width:100%;
  }
`;

const Hidden = styled.span`
  visibility:hidden;
`

const TextRotator = () =>{
  const [index, setIndex] = useState(0);
  const transition = useTransition(descriptions[index], item=>item.id, {
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
  });

  useEffect(
    ()=>{
      setInterval(
        () => setIndex(current => (current + 1) % descriptions.length),
        3000
        )
    },
    []
  );
  return(
    <TextWrapper>
      <Hidden>creative problem solver</Hidden>
      {transition.map(({ item, props, key }) => {
        return(
        <animated.span key={key} style={props}>
          {item.text}
        </animated.span>
      )}
      )}
    </TextWrapper>
  )

}


export default TextRotator;
