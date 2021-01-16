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

const percentage = function () {
  return Math.floor(Math.random() * 11) * 5 + 50
}

const helpCnt = function () {
  var stars = [0, 0, 0, 0, 0, 1, 2];
  return stars[Math.floor(Math.random() * 7)]
}

review = function (i) {
  return {
    title: faker.lorem.sentence().slice(0, -1),
    body: body().slice(0, 254),
    helpful_count: helpCnt(),
    username: username(),
    product_id: i,
    overall_rating: percentage(),
    value_rating: percentage(),
    quality_rating: percentage()
  }
}

var photo = function (i) {
  return {
    url: faker.image.cats(),
    reviewId: i
  }
}

reviewCnt = 0;

while (reviewCnt < 100) {
  for (let i = 0; i <= 10; i++) {
    var max = Math.floor(Math.random() * 10) + 2
    for (let j = 0; j < max; j++) {
      var currentReview = review(i)
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