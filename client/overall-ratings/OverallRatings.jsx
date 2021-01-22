import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

const Container = styled.div`
  text-align: center;
`
const Stats = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const BarRatings = styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
`

const StarRatings = styled.div`
`
const LargeText = styled.span`
  font-weight: bold;
  font-size: 40px;
  margin: 5px;
  padding: 0;
  margin-bottom: 0;
`

const Ratings = styled.div `
  background: url("/images/stars_empty.svg");
  width: 150px;
  height: 20px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 150px 20px;

`
const Stars = styled.div`
  width: 0%;
  height: 20px;
  background-image: url("/images/stars_full.svg");
  background-repeat: no-repeat;
  background-size: 150px 20px;

`
const CircleRatings = styled.div`

`

function OverallRatings() {

  return (
    <Container>
      <h2>Guest Ratings & Reviews</h2>
      <Stats>
        <BarRatings>
          <Bar stars={5} rating={50} />
          <Bar stars={4} rating={50} />
          <Bar stars={3} rating={2} />
          <Bar stars={2} rating={5} />
          <Bar stars={1} rating={100} />
        </BarRatings>

        <StarRatings>
          <LargeText>
            4.7
            </LargeText>
             <br></br>
          <Ratings>
          <Stars style={{ width: "90%" }}></Stars>
            </Ratings>
            <br></br>
            474 star ratings
        </StarRatings>
        <CircleRatings>
          <img src="https://i.ibb.co/xmVTk3B/screen-shot-2021-01-22-at-2-52-09-PM.png" width="80px"></img>
          <br></br>
          <strong>92% would recommend</strong>
          <br></br>
        260 recommendations
        </CircleRatings>
      </Stats>
      <img src="https://i.ibb.co/pPgyT3v/screen-shot-2021-01-20-at-12-43-09-AM.png" style={{ height: "110px"}}></img>
    </Container>
  )
}

export default OverallRatings;