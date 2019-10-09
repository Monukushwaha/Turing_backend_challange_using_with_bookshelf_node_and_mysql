
var express = require('express');
category= require('../models/models')
router = express.Router()
dbconfig=require('../config.js')

// Task 2.1
router.route('/categories')
// fetch all category 
.get(function (req, res) {
category 
.fetchAll()
.then(function (collection) {
  res.json({error: false, data: collection.toJSON()});
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
})



// Task 2.2
router.route('/categories/:id')
  
  .get(function (req, res) {
    category.where({category_id: req.params.id}).fetchAll()
    .then(function (category) {
      if (!category) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: category.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });


//   Task 2.3

router.route('/categories/inProduct/:category_name')
  // fetch all categories using category name
  
  .get(function (req, res) {
    category.where({name: req.params.category_name}).fetchAll()
    .then(function (categoryName) {
      if (!categoryName) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: categoryName.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });


// Task 2.4

router.route('/categories/inDepartment/:department_id')
// fetch all category by departmet id
  .get(function (req, res) {
    category.where({department_id: req.params.department_id}).fetchAll()
    .then(function (department_id) {
      if (!department_id) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: department_id.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });

module.exports = router;