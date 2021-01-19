import React from 'react';
import WouldRecommend from './WouldRecommend.jsx';
import WouldNotRecommend from './WouldNotRecommend.jsx';
import Verified from './Verified.jsx';
import moment from 'moment';

function Review({ review }) {
  return <li className="review">
    <div className="main">
    <h3>{review.title}</h3>
    ⭑⭑⭑⭑⭑
    <span className="recommend">{review.would_recommend ? <WouldRecommend /> : <WouldNotRecommend />}</span><br></br>
    <p className="post-details">{review.username} - {moment(review.createdAt).fromNow()}
    {review.verified_purchaser ? <Verified /> : ''}</p>
    {review.body}
    </div>
    <div className="side">
      <p>Did you find this review helpful?</p><br></br>
      <div className="helpful-form">
        <div className="helpful-buttons"><button>Helpful</button> <button>Not helpful</button></div>
        <div className="report-link">Report review</div>
      </div>

    </div>
  </li>
}

export default Review;