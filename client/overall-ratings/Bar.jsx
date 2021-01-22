import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5em;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`


function Bar({stars, rating}) {

  return (
    <Container>
      {stars} stars
      <svg width="210px" height="9">
          <line x1="10" y1="5" x2="200" y2="5" stroke="#F7F7F7" strokeWidth="8" strokeLinecap="round"/>
          <line x1="10" y1="5" x2={2*rating} y2="5" stroke="green" strokeWidth="8" strokeLinecap="round"/>
      </svg>
       {rating}%
    </Container>

  )
}

export default Bar;