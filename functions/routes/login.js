var express = require('express');
var router = express.Router();
const functions = require('firebase-functions');
const firebase = require('../app/firebase-app');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login/form', { user: null })
})

router.post('/', function(req, res, next) {
    var username = req.body.inputEmail;
    res.send('<h1>Hello</h1> '+username);
})

module.exports = router;