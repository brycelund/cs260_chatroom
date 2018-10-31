var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var session = require('express-session');

var Message = require('../models/Message');
var User = require('../models/User');

router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))



router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next){
  console.log(req.body);
  req.session.username = req.body.username;
  res.redirect('/chat');
})

router.get('/chat', function(req, res, next) {
  if(!req.session.username){
    res.redirect("/");
  }else{
    Message.find({}, (error, results) => {
      console.log("Found",results);
        res.render('chat', { messages: results, username: req.session.username });
    });
  }
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

router.get('/logout', function(req, res, next) {
  req.session.username = null;
});

module.exports = router;
