var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {title: "CCD | LOGIN"})
});

router.get('/user', function(req, res, next){
  res.render('user', {title: "CCD | USERS"})
})

router.get('/user/add', function(req, res, next){
  res.render('user_add', {title: "CCD | ADD USER"})
})

router.get('/user/edit', function(req, res, next){
  res.render('user_edit', {title: "CCD | EDIT USER"})
})

router.get('/user/change-password', function(req, res, next){
  res.render('user_password', {title: "CCD | USERS"})
})

module.exports = router;
