const mongoose = require('mongoose');

mongoose.connect('mongodb://test:test123@ds141613.mlab.com:41613/etsi_demo', { useNewUrlParser: true });

const db = mongoose.connection;

mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
})

let shopSchema = mongoose.Schema({
  shop_id: Number, //same as user ID in Listing schema
  shop_name: String, //store name
  login_name: String, //owner name
  num_favorers: Number, //to display
  gift_card: Boolean //if true display message Store accepts Etsi gift cards
});

let listingSchema = mongoose.Schema({
  listing_id: Number, //listing id - refers to item id 
  user_id: Number, //user id - same as shop_id in Shop schema
  title: String, //listing title
  price: Number, //listing base price
  quantity: Number, //listing available quantity
  who_made: String, //should be either 'i_did" if handmade show'Handmade item' or empty if manufactured by a company 
  materials: String, //string of used materials, need to split by space and iterate to display as a list of materials
  num_favorers: Number, //how many people liked the item - triggers badge bestseller
  style: String, //string of themes/styles
  has_variations: Boolean,//if true - take values through "variations" to display in the drop dowm
  variations: {
    'color': String,
    'style': String,
    'delta': Number
  },
  gift: Boolean //it true show message 'Gift wrapping and message available'
});

var Store = mongoose.model('Store', shopSchema);
var Listing = mongoose.model('Listing', listingSchema);

let findListing = (id, cb) => {
  // console.log('this is the id we searching for in DB   ', id);
  Listing.find({ listing_id: id }, (err, data) => {
    if (err) {
      console.log('could not get listing details from DB', err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

let findShop = (id, cb) => {
  Store.find({ shop_id: id }, (err, data) => {
    if (err) {
      console.log('could not get store details from DB', err);
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

module.exports = { findListing, findShop };