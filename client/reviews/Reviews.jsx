import React from 'react';
import Review from './Review.jsx';

function Reviews({ reviews, getImages, helpful, notHelpful }) {
  return reviews.map((review, i) => <Review key={i} id={i} review={review} getImages={getImages} helpful={helpful} notHelpful={notHelpful}/>)
}

export default Reviews;
