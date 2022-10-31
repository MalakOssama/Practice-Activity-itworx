var mongoose = require('mongoose');

var express = require('express');

var router = express.Router();

const connectionString = "mongodb+srv://malakossama:mongo123@cluster0.svsvzq5.mongodb.net/supermarket";

const connectionParams = {

  useNewUrlParser: true,

  useUnifiedTopology: true,

};

mongoose

  .connect(connectionString, connectionParams)

  .then(() => {

    console.log("connected succefully");

  })

  .catch((err) => {

    console.log(err, "error while connecting");

  });

module.exports = router;