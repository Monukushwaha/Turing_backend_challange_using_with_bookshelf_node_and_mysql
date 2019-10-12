//  model for all tables 
var Bookshelf=require('../config.js')



// Model for attribute

var Attribute = Bookshelf.Model.extend({
    tableName:'attribute',

});
module.exports = Bookshelf.model('Attribute',Attribute);

