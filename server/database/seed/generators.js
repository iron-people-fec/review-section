const titles = require("./fake_data/titles.js");
const images = require("./fake_data/images.js");
const faker = require("faker");

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

module.exports = {
  getTrend: function () {
    let trends = ["low", "mid", "mid", "mid", "high", "high"];
    return trends[getRandomNumber(6)];
  },
  percentage: function (trend) {
    generally = {
      low: [20, 20, 40, 40, 40, 40, 60, 80, 100],
      mid: [20, 40, 60, 60, 60, 80, 80, 80, 80, 80, 100, 100],
      high: [40, 60, 80, 80, 100, 100],
    };
    let length = generally[trend].length;
    return generally[trend][getRandomNumber(length)];
  },

  helpCount: function () {
    var stars = [0, 0, 0, 1, 2];
    return stars[getRandomNumber(5)];
  },

  getOverall: function (quality, value) {
    total = (quality + value) / 2 / 10;
    if (total % 2 !== 0) {
      total++;
    }
    return total * 10;
  },

  getBody: function () {
    let x = getRandomNumber(5) + 1;
    var body = "";
    for (i = 0; i < x; i++) {
      body += faker.commerce.productDescription() + " ";
    }
    return body;
  },

  recommend: function (overall) {
    var chance = getRandomNumber(5);
    if (chance > 2) {
      return overall > 70 ? true : false;
    }
    return null;
  },
  images: function () {
    pictureCount = getRandomNumber(7);
    if (pictureCount > 3) {
      return "";
    } else {
      let pictures = [];
      for (let i = 0; i < pictureCount; i++) {
        pictures.push(images());
      }
      return pictures.join(",");
    }
  },
  titles: titles,
  faker: faker,
};
