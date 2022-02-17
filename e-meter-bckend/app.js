const express = require("express");
require('dotenv').config()
const mongoose= require("mongoose");

// mongoose
//   .connect(uri)
//   .then(() =>
//     console.log(`Connected to MongoDB successfully...`)
//   )
//   .catch(err => {
//     console.log("Failed to connect to MongoDB...", err);
//     process.exit();
//   });

var uri=`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.etiat.mongodb.net/TestDB?retryWrites=true&w=majority`;


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