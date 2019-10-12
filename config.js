// for connecting with database
var dbConfig = {
    client: 'mysql',
    connection:{
        host     : 'localhost',
        user     : 'root',
        password : 'navgurukul',
        database : 'turing',
        charset  : 'utf8'
    }
};

var knex = require('knex')(dbConfig);
var Bookshelf = require('bookshelf')(knex);
Bookshelf.plugin('registry')
const _ = require('lodash');
const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gConfig = finalConfig;
console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
module.exports = Bookshelf;