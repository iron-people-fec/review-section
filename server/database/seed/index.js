// const Sequelize = require("sequelize");
// const db = require("../index.js");
const { Review } = require("../models.js");
const {
  percentage,
  helpCount,
  getOverall,
  getBody,
  getTrend,
  recommend,
  titles,
  faker,
  images,
} = require("./generators");

console.log(percentage(getTrend()));

const review = function (id, trend) {
  let quality = percentage(trend);
  let value = percentage(trend);
  let overall = getOverall(quality, value);
  return {
    title: titles(),
    body: getBody(),
    helpful_count: helpCount(),
    username: faker.name.firstName(),
    product_id: id,
    overall_rating: overall,
    value_rating: value,
    quality_rating: quality,
    would_recommend: recommend(overall),
    verified_purchaser: Math.floor(Math.random() * 3) > 1 ? true : false,
    photos: images(),
  };
};

const seed = () => {
  reviewCnt = 0;
  for (let i = 0; i <= 5; i++) {
    var maximum = Math.floor(Math.random() * 30) + 10;
    let trend = getTrend();
    for (let j = 0; j < maximum; j++) {
      var currentReview = review(i, trend);
      Review.create(currentReview);
      // reviews.push(currentReview);
      reviewCnt++;
    }
  }
};

// console.log(reviews);

module.exports = { seed };
