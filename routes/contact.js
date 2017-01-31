var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', {
        title: 'contact',
        envi: (process.env.NODE_ENV)
    });
});

module.exports = router;