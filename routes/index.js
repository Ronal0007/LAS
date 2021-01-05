var express = require('express');
var router = express.Router();

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

module.exports = router;
