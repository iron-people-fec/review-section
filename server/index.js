const express = require("express");
const app = express();
const path = require("path");
const port = 8004;
const db = require("./database");
const Review = require("./database/models.js").Review;
const Photo = require("./database/models.js").Photo;
const cors = require("cors");
const compression = require("compression");
const seed = require("./database/seed");

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/bundle", express.static("public/dist/bundle.js"));

app.get("/products/:product_id/reviews", (req, res) => {
  Review.findAll({
    where: {
      product_id: req.params.product_id,
    },
  }).then((data) => res.send(data));
});

app.get("/products/:review_id/images", (req, res) => {
  Photo.findAll({
    where: {
      reviewId: req.params.review_id,
    },
  }).then((data) => res.send(data));
});

app.patch("/products/:id/helpful", (req, res) => {
  Review.update(
    { helpful_count: db.literal("helpful_count + 1") },
    { where: { id: req.params.id } }
  ).then(() => {
    Review.findByPk(req.params.id).then((data) => res.send(data));
  });
});

app.patch("/products/:id/not_helpful", (req, res) => {
  Review.update(
    { helpful_count: db.literal("helpful_count - 1") },
    { where: { id: req.params.id } }
  ).then(() => {
    Review.findByPk(req.params.id).then((data) => res.send(data));
  });
});

app.listen(port, async () => {
  await db.sync({ force: true });
  console.log("connected to db");
  seed();
  console.log(`Now listening on port ${port}`);
});
