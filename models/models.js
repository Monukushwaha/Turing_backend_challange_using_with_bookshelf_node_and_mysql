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

// Model for customers

var Customer = Bookshelf.Model.extend({
    tableName:'customer',

});
module.exports = Bookshelf.model('Customer',Customer);


// Model for customers

var Product = Bookshelf.Model.extend({
    tableName:'product',
    categories: function() {
        return this.belongsToMany(Category);
    }

});
module.exports = Bookshelf.model('Product',Product);