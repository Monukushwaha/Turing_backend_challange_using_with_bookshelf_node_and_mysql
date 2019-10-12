//  model for all tables 
var Bookshelf=require('../config.js')


// Model for department
var Department = Bookshelf.Model.extend({
    tableName: 'department',
});

module.exports = Bookshelf.model('Department', Department);


