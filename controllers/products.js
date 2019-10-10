var express = require('express');
product= require('../models/models')
router = express.Router()
dbconfig=require('../config.js')


// Task 5.1
router.route('/products')
.get(function (req, res) {
product 
.fetchAll()
.then(function (Product) {
  res.json({error: false, data: Product.toJSON()});
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});


// Task 5.2
router.route('/products/:id')
// fetch all data using product_id
.get(function (req, res) {
product.where({product_id: req.params.id}).fetchAll()
.then(function (Product) {
    if (!Product) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: Product.toJSON()});
      }
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});

module.exports = router;
