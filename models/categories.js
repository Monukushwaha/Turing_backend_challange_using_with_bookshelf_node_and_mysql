//  model for all tables 
var Bookshelf=require('../config.js')

// Model for category

var Category = Bookshelf.Model.extend({
    tableName:'category',

});
module.exports = Bookshelf.model('Category',Category);
