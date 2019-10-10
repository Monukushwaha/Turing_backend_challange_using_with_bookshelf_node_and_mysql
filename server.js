var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
    dbconfig = require('./config.js');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', require('./controllers/departments'));
app.use('/', require('./controllers/categories'));
app.use('/', require('./controllers/attributes'));
app.use('/', require('./controllers/customers'));
app.use('/', require('./controllers/products'));



app.get('/', (req, res) => {
    res.json(global.gConfig);
  });

process.env.NODE_ENV = 'development';
app.listen(global.gConfig.node_port, () => {
    console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
  });






