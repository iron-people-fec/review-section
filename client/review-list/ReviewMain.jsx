import React from 'react';
import WouldRecommend from './WouldRecommend.jsx';
import WouldNotRecommend from './WouldNotRecommend.jsx';
import Verified from './Verified.jsx';
import PercentageCircle from './PercentageCircle.jsx';
import styled from 'styled-components';
import moment from 'moment';

const ReviewMain = ({review, images}) => {
  return (
    <Main>
      <Title>{review.title}</Title>
      <Container>
        <Ratings>
          <Stars style={{ width: `${review.value_rating}%` }}></Stars>
        </Ratings>
        <Recommendation>
          {review.would_recommend ? <WouldRecommend /> : <WouldNotRecommend />}
        </Recommendation>
      </Container>
      <PostDetails>
        {review.username} - {moment(review.createdAt).fromNow()}
        {review.verified_purchaser ? <Verified /> : ''}
      </PostDetails>
      {review.body}
      <Gallery>
        {images.map((image, i) => (<img src={image.url} style={{ width: "100px", "padding-right": "1em" }} />))}
      </Gallery>
    </Main>
  );
}


const Ratings = styled.div `
  background: url("/images/stars_empty.svg");
  width: 87px;
  height: 16px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 87px 16px;

`
const Stars = styled.div`
  width: 0%;
  height: 16px;
  background-image: url("/images/stars_full.svg");
  background-repeat: no-repeat;
  background-size: 87px 16px;

`

const Main = styled.div`
  width: 64%;
`

const Title = styled.h3`
  font-size: 19px;
  margin-top: 0;
`

const PostDetails = styled.p`
  font-size: 12px;
  color: #666666;
  font-size: 12px;
`

const Recommendation = styled.span`
  display: inline-block;
  border-left: gray solid 1px;
  padding: 0 10px;
  margin: 0 10px;
`

const Container = styled.span`
  display: flex;
  align-items: center;
`

const Gallery = styled.div`
  margin-top: 1em;
`

export default ReviewMain;