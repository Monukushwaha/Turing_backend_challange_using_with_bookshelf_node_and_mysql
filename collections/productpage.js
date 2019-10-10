var Base = require('./base');
var Product = require('../models/models');


var Posts = Base.Collection.extend({
  model: Product
});


module.exports = Base.collection('Product', Product);