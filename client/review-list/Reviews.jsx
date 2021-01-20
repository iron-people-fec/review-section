import React from 'react';
import Review from './Review.jsx';

function Reviews({ reviews, addPhotos, photosAdded}) {
  return reviews.map((review, i) => <Review key={i} review={review} addPhotos={addPhotos} photosAdded={photosAdded}/>)
}

export default Reviews;