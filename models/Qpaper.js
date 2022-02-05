var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  image: {
    type: String,
    required: true
  },
  cardTitle: {
    type: String,
    required: true
  },
  cardSubTitle: {
    type: String,
    required: true
  },
  cardText: {
    type: String,
    required: true
  },
  bookLink: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Q', schema);
