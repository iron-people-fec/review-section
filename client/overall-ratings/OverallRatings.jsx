import React from 'react';
import styled from 'styled-components';
import Bar from './Bar.jsx';

const Container = styled.div`
  text-align: center;
`
const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 55%;
  margin: 0 auto;
`
const BarRatings = styled.div`
display: flex;
flex-direction: column;
font-size: 12px;
`

const StarRatings = styled.div`
font-size: 13px;
`
const LargeText = styled.span`
  font-weight: bold;
  font-size: 40px;
  margin: 5px;
  padding: 0;
  margin-bottom: 0;
`

const Ratings = styled.div `
  background: url("http://localhost:8004/images/stars_empty.svg");
  width: 102px;
  height: 20px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 102px 20px;

`
const Stars = styled.div`
  width: 20%;
  height: 20px;
  background-image: url("http://localhost:8004/images/stars_full.svg");
  background-repeat: no-repeat;
  background-size: 102px 20px;

`
const CircleRatings = styled.div`

`

function OverallRatings({ reviews }) {

  const rating = function () {
    var overallSum = reviews.reduce(function(sum, review){
      return sum + review.overall_rating;
    }, 0)

    var overallPercentage = `${(overallSum / (reviews.length * 100)) * 100}%`;
    var starsNumber = `${Math.round(((overallSum / (reviews.length * 100)) * 5) * 10) / 10}`;
    return { overallPercentage: overallPercentage, starsNumber: starsNumber}
  }

  const recommendation = function() {
    var number = reviews.filter(review => review.would_recommend === true);
    var percentage = Math.round(((number.length / reviews.length) * 100) * 10) / 10;
    return {number: number.length, percentage: percentage}
  }

  const starBars = function () {
    var hey = reviews.map(review => review.overall_rating)
    // console.log(hey)
    // for(review of reviews) {

    // }
  }()

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
            {rating().starsNumber}
            </LargeText>
             <br></br>
          <Ratings>
          <Stars style={{ width: rating().overallPercentage }}></Stars>
            </Ratings>
            <br></br>
            {reviews.length} star ratings
        </StarRatings>

        <CircleRatings>
          <img src="https://i.ibb.co/xmVTk3B/screen-shot-2021-01-22-at-2-52-09-PM.png" width="80px"></img>
          <br></br>
          <strong>{recommendation().percentage}% would recommend</strong>
          <br></br>
        {recommendation().number} recommendations
        </CircleRatings>
      </Stats>
      <img src="https://i.ibb.co/pPgyT3v/screen-shot-2021-01-20-at-12-43-09-AM.png" style={{ height: "110px"}}></img>
    </Container>
  )
}

export default OverallRatings;