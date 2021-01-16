const mysql = require('mysql2');
const Sequelize = require('sequelize');

module.exports = new Sequelize('bullseye_reviews', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
