const express = require("express");

require('dotenv').config()



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/api/home/', (req, res) => {
  res.send( 'Hello World!' );
});


let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});

module.exports = app;