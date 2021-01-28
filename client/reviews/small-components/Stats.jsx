import React from 'react';
import styled from 'styled-components';
import Circle from '../../multiuse/Circle.jsx';

const Wrapper = styled.div`
  display:flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 1.5em;
  font-size: 13px;
`
const Container = styled.div`
  display:flex;
  margin-right: 2em;
`
const Bold = styled.span`
  display: inline-block;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`
const Text = styled.div`
  padding: 0 4em;
  padding-left: 1em;
  align-text: center;
`

function Stats({review}) {
  return (
    <Wrapper>
      <Circle value={review.quality_rating}></Circle>
        <Text>
            <Bold>Quality</Bold><br></br>out of 5
        </Text>
        <Circle value={review.value_rating}></Circle>
          <Text>
            <Bold>Value</Bold><br></br>out of 5
          </Text>
    </Wrapper>

  )

}

export default Stats;