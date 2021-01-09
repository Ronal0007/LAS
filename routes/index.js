const express = require('express');
const router = express.Router();
const sequelize = require("../app");
const db = require("../models");
const bcrypt = require('bcrypt'),
      bodyParser = require('body-parser'),
      flash = require('connect-flash'),
      csurf = require('csurf'),
      messages = require('express-messages'),
      session = require('express-session');
const cookieParser = require("cookie-parser");
const Sequelize = require('sequelize');

const paginate = require("express-paginate");

// keep this before all routes that will use pagination
router.use(paginate.middleware(10, 10));

(sequelize == db.sequelize), ( Sequelize == db.Sequelize);
var sessionStore = new session.MemoryStore();

router.use(cookieParser("secret"));
router.use(
  session({
    cookie: {
      maxAge: 60000,
    },
    store: sessionStore,
    saveUninitialized: false,
    resave: true,
    secret: "secret",
  })
);

// express-messages middleware
router.use(flash());
router.use((req, res, next) => {
  res.locals.errors = req.flash("danger");
  res.locals.successes = req.flash("success");
  next();
});

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// setup route middlewares
var csrfProtection = csurf({
  cookie: true,
});


const userFile = require('./users');
router.use(userFile);

/* GET home page. */
router.get('/dashboard', function(req, res, next){
  res.render('index' , {title: "CCD | HOME"})
})

router.get('/project', function(req, res, next) {
  res.render('project', { title: "CCD | PROJECT" });
});

router.get('/project/add', function(req, res, next){
  res.render('project_add', {title: "CCD | ADD PROJECT"})
})

router.get('/project/edit', function(req, res, next){
  res.render('project_edit', {title: "CCD | EDIT PROJECT"})
})

router.get('/location', function(req, res, next){
  res.render('location', {title: "CCD | LOCATION"})
})

router.get('/location/add', function(req, res, next){
  res.render('location_add', {title: "CCD | LOACTION ADD"})
})

router.get('/location/edit', function(req, res, next){
  res.render('location_edit' , {title: "CCD | EDIT LOCATION"})
})

router.get('/block', function(req, res, next){
  res.render('block', {title: "CCD | BLOCK"})
})

router.get('/block/add' , function(req, res, next){
  res.render('block_add', {title: "CCD | ADD BLOCK"})
})

router.get('/block/edit', function(req, res, next){
  res.render('block_edit', {title: "CCD | EDIT BLOCK" })
})

router.get('/plot', function(req, res, next ){
  res.render('plot', {title: "CCD | PLOT"})
})

router.get('/plot/add', function(req, res, next){
  res.render('plot_add', {title: "CCD | ADD PLOT"})
})

router.get('/plot/edit', function(req, res, next){
  res.render('plot_edit', {title: "CCD | EDIT PLOT"})
})

router.get('/allocation', function(req, res, next){
  res.render('allocation', {title: "CCD | ALLOCATION"})
})

router.get('/allocation/add', function(req, res, next){
  res.render('new_allocation', {title: "CCD | NEW ALLOCATION"})
})

module.exports = router;
