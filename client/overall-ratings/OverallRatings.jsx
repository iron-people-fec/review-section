import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

const Container = styled.div`
  text-align: center;
`
const Stats = styled.div`
  display: flex;
  justify-content: center;
`
const Bars = styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
`

function OverallRatings() {

  return (
    <Container>
      <h2>Guest Ratings & Reviews</h2>
      <Stats>
        <Bars>
          <Bar stars={5} rating={50} />
          <Bar stars={4} rating={50} />
          <Bar stars={3} rating={2} />
          <Bar stars={2} rating={50} />
          <Bar stars={1} rating={50} />
        </Bars>

      </Stats>
    </Container>
  )
}

export default OverallRatings;