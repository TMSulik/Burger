var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get('/', function(req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  console.log("Router post", req.body);
  burger.insertOne(['burger_name'], [req.body.burger_name
  ], function(data) {    
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

// router.delete('/burgers/:id', function (req, res) {
router.get('/burgers', function (req, res) {
  console.log('Router delete req: ', req.body);
  burger.removeAll(function(data) {
    console.log('Router delete data: ', data);
    res.redirect('/');
    // res.send('Got a DELETE request at /user');
  });
});

module.exports = router;