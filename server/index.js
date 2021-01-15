const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const db = require('../database')
const Review = require('../database/models.js').Review
const Photo = require('../database/models.js').Photo

// try {
//   db.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render()
})

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
  })
})
