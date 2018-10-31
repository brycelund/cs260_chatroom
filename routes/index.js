var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = require('../models/Message');
var Message = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'Express' });
});

router.post('/messages', function(req, res, next) {
  let newMessage = new Message();
  message.username = req.body.username;
  message.content = req.body.content;
  message.save();
});

router.get('/messages', function(req, res, next) {
  User.find({}, (error, results) => {
    console.log(error,results);
  });
});

module.exports = router;
