var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Message = require('../models/Message');
var User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/chat', function(req, res, next) {
  Message.find({}, (error, results) => {
    console.log("Found",results);
      res.render('chat', { messages: results, username: "bryce" });
  });
});

router.post('/messages', function(req, res, next) {
  let newMessage = new Message();
  newMessage.username = req.body.username;
  newMessage.content = req.body.text;
  newMessage.save();
  res.sendStatus(200);
});

router.get('/messages', function(req, res, next) {
  Message.find({}, (error, results) => {
    res.send(results);
  });
});

module.exports = router;
