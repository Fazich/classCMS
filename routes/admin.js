var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/login');
});
router.get('/index', function(req, res, next) {
    res.render('admin/index');
});
router.get('/classInfo', function(req, res, next) {
    res.render('admin/classInfo');
});
router.get('/questionInfo', function(req, res, next) {
    res.render('admin/questionInfo');
});
router.get('/classWall', function(req, res, next) {
    res.render('admin/classWall');
});

module.exports = router;
