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


app.get('/products/:product_id/reviews', (req, res) => {
  Review.findAll({
    where: {
      product_id: req.params.product_id
    }
  }).then(data => res.send(data));
})

app.get('/products/:review_id/images', (req, res) => {
  Photo.findAll({
    where: {
      reviewId: req.params.review_id
    }
  }).then(data => res.send(data));
})

db.sync().then(() => {
  app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
  })
})
