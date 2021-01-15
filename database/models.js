const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index.js')


var Review = db.define('Review', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  },
  helpful_count: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  overall_rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value_rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quality_rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})


var Photo = db.define('Photo', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Review.belongsTo(Photo, { as: 'review' });

module.exports = {
  Review: Review,
  Photo: Photo
}