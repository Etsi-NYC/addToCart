var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var axios = require('axios');
var { findListing, findShop } = require('../db/index.js');
var path = require('path');
var router = express.Router();

var app = express();

// app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
//internal call
app.get('/listings', function (req, res) {
  findListing(req.query.id, (err, listingData) => {
    if (err) {
      console.log('could not get id from DB');
      res.sendStatus(500);
    } else {
      findShop(listingData[0].user_id, (err, shopData) => {
        if (err) {
          console.log('err getting shop', err);
        } else {
          let results = [...listingData, ...shopData];
          res.send(results)
        }
      })
    }
  })
});

//user
app.get('/listing/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
})

app.listen(5000, function () {
  console.log('listening on port 5000!');
});
