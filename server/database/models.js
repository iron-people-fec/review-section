const { DataTypes, Model } = require("sequelize");
const sequel = require("./index.js");

module.exports = {
  Review: sequel.define("Review", {
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
