const Sequelize = require("sequelize");
const db = require("./index.js");
const { Review, Photo } = require("../database/models.js");
const titles = require("./fake_data/titles.js");
const images = require("./fake_data/images.js");

module.exports = () => {
  const {
    uniqueNamesGenerator,
    adjectives,
    // colors,
    animals,
    // names,
  } = require("unique-names-generator");
  const faker = require("faker");

  // var username = function () {
  //   return uniqueNamesGenerator({
  //     dictionaries: [adjectives, animals], // colors can be omitted here as not used
  //     separator: "_",
  //     length: 2,
  //   });
  // };

  // const body = function () {
  //   return faker.lorem.paragraphs()
  // }

  const percentage = function (trend) {
    generally = {
      low: [20, 20, 40, 40, 40, 40, 60, 80, 100],
      mid: [20, 40, 60, 60, 60, 80, 80, 80, 80, 80, 100, 100],
      high: [40, 60, 80, 80, 100, 100],
    };
    let length = generally[trend].length;
    return generally[trend][Math.floor(Math.random() * length)];
  };

  const helpCnt = function () {
    var stars = [0, 0, 0, 1, 2];
    return stars[Math.floor(Math.random() * 5)];
  };

  const getOverall = function (quality, value) {
    total = (quality + value) / 2 / 10;
    if (total % 2 !== 0) {
      total++;
    }
    return total * 10;
  };

  const recommend = function (overall) {
    var chance = Math.floor(Math.random() * 5);
    if (chance > 2) {
      return overall > 70 ? true : false;
    }
    return null;
  };

  const getBody = function () {
    let x = Math.floor(Math.random() * 5) + 1;
    var body = "";
    for (i = 0; i < x; i++) {
      body += faker.commerce.productDescription() + " ";
    }
    return body;
  };

  const review = function (id, trend) {
    let quality = percentage(trend);
    let value = percentage(trend);
    let overall = getOverall(quality, value);
    let photos = photo(trend)
    return {
      title: titles(),
      body: getBody(),
      helpful_count: helpCnt(),
      username: faker.name.firstName(),
      product_id: id,
      overall_rating: overall,
      value_rating: value,
      quality_rating: quality,
      would_recommend: recommend(overall),
      verified_purchaser: Math.floor(Math.random() * 3) > 1 ? true : false,
      photos:
    };
  };

  const getTrend = function () {
    let trends = ["low", "mid", "mid", "mid", "high", "high"];
    return trends[Math.floor(Math.random() * 6)];
  };

  var photo = function () {
    Math.floor(Math.random() * 4)

    // return {
    //   url: images(),
    //   reviewId: i,
    // };
  };

  reviewCnt = 0;

  for (let i = 0; i <= 5; i++) {
    var maximum = Math.floor(Math.random() * 30) + 10;
    let trend = getTrend();
    for (let j = 0; j < maximum; j++) {
      var currentReview = review(i, trend);
      Review.create(currentReview);
      reviewCnt++;
    }
  }

  // for (let i = 0; i < reviewCnt; i++) {
  //   num = helpCnt();
  //   for (let j = 0; j < num; j++) {
  //     Photo.create(photo(i));
  //   }
  // }
};
