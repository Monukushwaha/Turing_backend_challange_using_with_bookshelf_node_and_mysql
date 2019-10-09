// User model
var Bookshelf=require('../config.js')

// console.log("hey", Bookshelf);
// Model for department
var Department = Bookshelf.Model.extend({
    tableName: 'department',
});

module.exports = Bookshelf.model('Department', Department);


// Model for category

var Category = Bookshelf.Model.extend({
    tableName:'category',

});
module.exports = Bookshelf.model('Category',Category);

// Model for attribute

var Attribute = Bookshelf.Model.extend({
    tableName:'attribute',

});
module.exports = Bookshelf.model('Attribute',Attribute);
