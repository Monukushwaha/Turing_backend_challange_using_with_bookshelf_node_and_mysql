// Routes for attribute table

var express = require('express');
attribute= require('../models/attributes')
router = express.Router()
dbconfig=require('../config.js')

// Task 3.1
router.route('/attributes')
.get(function (req, res) {
attribute 
.fetchAll()
.then(function (collection) {
  res.json({error: false, data: collection.toJSON()});
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});

// Task 3.2
router.route('/attributes/:id')
.get(function (req, res) {
attribute.where({attribute_id: req.params.id}).fetchAll()
.then(function (attribute) {
    if (!attribute) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: attribute.toJSON()});
      }
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});


// Task 3.3
router.route('/attributes/value/:id')
.get(function (req, res) {
attribute.where({attribute_id: req.params.id}).fetchAll()
.then(function (attribute) {
    if (!attribute) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: attribute.toJSON()});
      }
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});

// Task 3.4
router.route('/attributes/inProduct/:id')
.get(function (req, res) {
attribute.where({attribute_id: req.params.id}).fetchAll()
.then(function (attribute) {
    if (!attribute) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: attribute.toJSON()});
      }
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});
module.exports = router;
