
var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();


// Play a sound command
router.get('/play-sound', function(req, res) {
  res.render('play-sound');
});

// Collision Event
router.get('/collision-event', function(req, res) {
  res.render('collision-event');
});

// Collision Event with specific collisions
router.get('/collision-events', function(req, res) {
  res.render('collision-events');
});

module.exports = router;
