
var express = require('express');
    department= require('../models/models')
    router = express.Router()
    dbconfig=require('../config.js')



// Task 1.1
router.route('/departments')
  // fetch all departments
  .get(function (req, res) {
    department
    .fetchAll()
    .then(function (collection) {
      res.json({error: false, data: collection.toJSON()});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })



  // Task 1.2
  router.route('/departments/:id')
  // fetch department by id
  .get(function (req, res) {
    department.where({department_id: req.params.id}).fetch()
    .then(function (department) {
      if (!department) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: department.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })
  module.exports = router;