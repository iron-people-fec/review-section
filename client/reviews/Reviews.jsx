import React from 'react';
import Review from './Review.jsx';

function Reviews({ reviews, getImages }) {
  return reviews.map((review, i) => <Review key={i} review={review} getImages={getImages}/>)
}

export default Reviews;
