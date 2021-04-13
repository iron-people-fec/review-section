const { DataTypes, Model } = require("sequelize");
const db = require("./index.js");

module.exports = {
  Review: db.define("Review", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    helpful_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    overall_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    value_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quality_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quality_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    would_recommend: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    verified_purchaser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    photos: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }),
};

// Photo.belongsTo(Review, { as: "review" });
