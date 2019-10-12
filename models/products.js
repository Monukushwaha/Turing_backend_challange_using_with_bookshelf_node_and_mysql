//  model for all tables 
var Bookshelf=require('../config.js')

// Model for Product

var Product = Bookshelf.Model.extend({
    tableName:'product',
    categories: function() {
        return this.belongsToMany(Category);
    }

});
module.exports = Bookshelf.model('Product',Product);