var express = require('express');
var router = express.Router();

var students = []


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('students/login');
});

router.post('/', function (req, res,callback) {
    console.log(req.body)
    res.send({
        success:true,
        text:'登录成功'
    })
})

router.get('/students/index', function (req, res, next) {
    res.render('students/index');
});
router.get('/students/classInfo', function (req, res, next) {
    res.render('students/classInfo');
});
router.get('/students/questionInfo', function (req, res, next) {
    res.render('students/questionInfo');
});
router.get('/students/classWall', function (req, res, next) {
    res.render('students/classWall');
});

module.exports = router;
