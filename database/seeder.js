const Sequelize = require('sequelize');
const db = require('./index.js');
const Review = require('../database/models.js').Review
const Photo = require('../database/models.js').Photo
const titles = require('./fake_data/titles.js');

const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');
const faker = require('faker');

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

const getOverall = function (quality, value) {
  total = ((quality + value) / 2) / 10
  if (total % 2 !== 0) {
    total++
  }
  return total * 10;
}

const recommend = function (overall) {
  var chance = Math.floor(Math.random() * 4);
  if (chance > 2) {
    return overall > 70 ? true : false;
  }
  return null;
}

const review = function (i, trend) {
  let quality = percentage(trend);
  let value = percentage(trend);
  let overall = getOverall(quality, value);
  return {
    title: titles(),
    body: faker.commerce.productDescription().slice(0, 254),
    helpful_count: helpCnt(),
    username: faker.name.firstName(),
    product_id: i,
    overall_rating: overall,
    value_rating: value,
    quality_rating: quality,
    would_recommend: recommend(overall),
    verified_purchaser: Math.floor(Math.random() * 3) > 1 ? true : false
  }
}

const getTrend = function () {
  let trends = ['low', 'low', 'mid', 'mid', 'mid', 'high'];
  return trends[Math.floor(Math.random() * 6)];
}

var photo = function (i) {
  return {
    url: faker.image.imageUrl(225, 180, 'animals', true, true),
    reviewId: i
  }
}

reviewCnt = 0;

for (let i = 0; i <= 5; i++) {
  var max = Math.floor(Math.random() * 50) + 10
  let trend = getTrend()
  for (let j = 0; j < max; j++) {
    var currentReview = review(i, trend)
    Review.create(currentReview)
    reviewCnt++;
  }
}

for (let i = 0; i < reviewCnt; i++) {
  num = helpCnt()
    for (let j = 0; j < num; j++) {
      Photo.create(photo(i))
  }
}
