var express = require('express');
customer= require('../models/models')
router = express.Router()
dbconfig=require('../config.js')


// Task 5.1
router.route('/customers')
// fetch all customers
.get(function (req, res) {
customer
.fetchAll()
.then(function (Customer) {
  res.json({error: false, data: Customer.toJSON()});
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
})
// post the details of customer
.post(function (req, res) {
    customer.forge({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .save()
    .then(function (Customer) {
      res.json({error: false, data:{id: Customer.get('id')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    }); 
  })

//   Task 5.2

router.route('/customers/:id')
.get(function (req, res) {
customer.where({customer_id: req.params.id}).fetchAll()
.then(function (Customer) {
    if (!Customer) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: Customer.toJSON()});
      }
})
.catch(function (err) {
  res.status(500).json({error: true, data: {message: err.message}});
});
});



module.exports = router;