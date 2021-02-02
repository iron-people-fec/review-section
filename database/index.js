const mysql = require('mysql2');
const Sequelize = require('sequelize');

// Shinbobo88!
module.exports = new Sequelize('bullseye_reviews', 'root', 'Shinbobo88!', {
  host: 'localhost',
  dialect: 'mysql'
});
