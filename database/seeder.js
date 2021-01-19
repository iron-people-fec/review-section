const Sequelize = require('sequelize');
const db = require('./index.js');
const Review = require('../database/models.js').Review
const Photo = require('../database/models.js').Photo

const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');
const faker = require('faker');

Review.destroy({ truncate: true, cascade: false });

var username = function () {
  return uniqueNamesGenerator({
  dictionaries: [adjectives, animals], // colors can be omitted here as not used
  separator: '_',
  length: 2
 });
}

const body = function () {
  return faker.lorem.paragraphs()
}

const percentage = function (trend) {
  generally = {
    low: [20, 40, 40, 60],
    mid: [40, 60, 60, 60, 80, 80, 80, 80, 80, 100],
    high : [80, 100]
  }
  let length = generally[trend].length
  return generally[trend][Math.floor(Math.random() * length)];
}

const helpCnt = function () {
  var stars = [0, 0, 0, 0, 0, 1, 2];
  return stars[Math.floor(Math.random() * 7)]
}

const review = function (i, trend) {
  let quality = percentage(trend);
  let value = percentage(trend);
  let overall = (quality + value) / 2
  recommend = overall > 70 ? true : false;
  return {
    title: faker.lorem.sentence().slice(0, -1),
    body: body().slice(0, 254),
    helpful_count: helpCnt(),
    username: username(),
    product_id: i,
    overall_rating: overall,
    value_rating: value,
    quality_rating: quality,
    would_recommend: recommend,
    verified_purchaser: Math.floor(Math.random() * 3) > 1 ? true : false
  }
}

const getTrend = function () {
  let trends = ['low', 'low', 'mid', 'mid', 'mid', 'high'];
  return trend = trends[Math.floor(Math.random() * 6)];
}

var photo = function (i) {
  return {
    url: faker.image.cats(),
    reviewId: i
  }
}

reviewCnt = 0;

while (reviewCnt < 100) {
  for (let i = 0; i <= 11; i++) {
    var max = Math.floor(Math.random() * 10) + 2
    let trend = getTrend()
    for (let j = 0; j < max; j++) {
      var currentReview = review(i, trend)
      Review.create(currentReview)
      reviewCnt++;
    }
  }
}

for (let i = 0; i < reviewCnt; i++) {
  num = helpCnt()
    for (let j = 0; j < num; j++) {
      Photo.create(photo(i))
  }
}