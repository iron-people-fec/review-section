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


function Bar({ stars, rating, filterByStars }) {

  //fixes my NaN warning
  rating = isNaN(rating) ? 0 : rating;

  return (
    <Container onClick={() => filterByStars(stars[1])}>
      {stars[0]} stars
      <PercentageBar>
      <svg width="200" height="9">
        <rect x="0" y="0" width="200" height="8" fill="#F7F7F7" stroke="none" rx="4"></rect>
        <rect x="0" y="0" width={String(rating)} height="8" fill="green" stroke="none" rx="4"></rect>
      </svg>
     </PercentageBar>
       {rating/2}%
    </Container>

  )
}

export default Bar;