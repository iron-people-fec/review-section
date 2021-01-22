import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 0.5em;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const PercentageBar = styled.span`
  margin-right: 15px;
  margin-left: 25px;
`


function Bar({stars, rating}) {

  return (
    <Container>
      {stars} stars
      <PercentageBar>
      <svg width="200px" height="9">
        <rect x="0" y="0" width="200" height="8" fill="#F7F7F7" stroke="none" rx="4"></rect>
        <rect x="0" y="0" width={2 * rating} height="8" fill="green" stroke="none" rx="4"></rect>
      </svg>
     </PercentageBar>
       {rating}%
    </Container>

  )
}

export default Bar;