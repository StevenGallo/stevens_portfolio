var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'index',
        envi: (process.env.NODE_ENV)
    });
});

module.exports = router;