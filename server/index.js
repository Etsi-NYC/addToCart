var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var axios = require('axios');
var { findListing, findShop } = require('../db/index.js');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listings', function (req, res) {
  console.log('XXXXXXXXreq.params.id', req.query.id);
  findListing(req.query.id, (err, listingData) => {
    if (err) {
      console.log('could not get id from DB');
      res.sendStatus(500);
    } else {
      // console.log('this is data for a listing request   :', listingData[0].user_id)
      findShop(listingData[0].user_id, (err, shopData) => {
        if (err) {
          console.log('err getting shop', err);
          // do something
        } else {
          // console.log('shopData:', shopData);
          let results = [...listingData, ...shopData];
          // console.log('results:', results);
          res.send(results)
        }
      })
    }
  })
});
//user
app.get('/listing/*', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'))
})




// // Untitled
// app.get('/reviews', (req, res) => {
//   console.log(req.query.id);
//   if (!req.query.id && !req.query.name) res.status(400).send('Must include either item ID or item name in query')
//   if (!req.query.id) {
//     models.itemNameToId(req.query.name)
//       .then((id) => {
//         return models.fetchReviewsById(id)
//       })
//       .then((reviews) => res.send(reviews));
//   } else {
//     models.fetchReviewsById(req.query.id)
//       .then((reviews) => res.send(reviews));
//   }
// })





app.listen(5000, function () {
  console.log('listening on port 5000!');
});
