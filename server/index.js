const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render()
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
})