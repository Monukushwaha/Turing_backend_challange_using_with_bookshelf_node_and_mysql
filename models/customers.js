//  model for all tables 
var Bookshelf=require('../config.js')


// Model for customers

var Customer = Bookshelf.Model.extend({
    tableName:'customer',

});
module.exports = Bookshelf.model('Customer',Customer);

