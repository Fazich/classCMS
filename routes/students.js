var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students/login');
});
router.get('/students/index', function(req, res, next) {
    res.render('students/index');
});
router.get('/students/classInfo', function(req, res, next) {
    res.render('students/classInfo');
});
router.get('/students/questionInfo', function(req, res, next) {
    res.render('students/questionInfo');
});
router.get('/students/classWall', function(req, res, next) {
    res.render('students/classWall');
});

module.exports = router;
