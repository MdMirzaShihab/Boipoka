var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Boi = require('../models/ComputionBoi');
var EEEBoi = require('../models/ElectricalBoi');
var MEBoi = require('../models/MechanicalBoi');
var Q = require('../models/Qpaper');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  var Qpaper = Q.find(function(err, docs) {
    var QpaperChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      QpaperChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('library/index', {
      title: 'Boipoka',
      Qpaper: docs
    });
  });
});
/* GET Faculty pages. */

router.get('/user/SchoolOfComputing', function(req, res, next) {
  var ComputionBoi = Boi.find(function(err, docs) {
    var ComputionBoiChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      ComputionBoiChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('user/SchoolOfComputing', {
      title: 'Boipoka',
      ComputionBoi: docs
    });
  });
});

router.get('/user/SchoolOfElectrical', function(req, res, next) {
  var ElectricalBoi = EEEBoi.find(function(err, doocs) {
    var ElectricalBoiChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < doocs.length; i += chunkSize) {
      ElectricalBoiChunks.push(doocs.slice(i, i + chunkSize));
    }
    res.render('user/SchoolOfElectrical', {
      title: 'Boipoka',
      ElectricalBoi: doocs
    });
  });
});

router.get('/user/SchoolOfMechanical', function(req, res, next) {
  var MechanicalBoi = MEBoi.find(function(err, dooocs) {
    var MechanicalBoiChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < dooocs.length; i += chunkSize) {
      MechanicalBoiChunks.push(dooocs.slice(i, i + chunkSize));
    }
    res.render('user/SchoolOfMechanical', {
      title: 'Boipoka',
      MechanicalBoi: dooocs
    });
  });
});

router.get('/user/signup', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signup', {
   csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});
router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/FindBySchools', function(req, res, next) {
  res.render('user/FindBySchools');
});


router.get('/user/profile', function(req, res, next) {
  res.render('user/profile');
});

router.get('/user/signin', function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin', {
   csrfToken: req.csrfToken(),
    messages: messages,
    hasErrors: messages.length > 0
  });
});
router.post('/user/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));


router.get('/user/myshelf', function(req, res, next) {
  res.render('user/myshelf');
});

module.exports = router;
