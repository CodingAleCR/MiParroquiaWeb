var express = require('express');
var router = express.Router();
const functions = require('firebase-functions');
const admin = require('../app/admin-app');
const firebase = require('../app/firebase-app');

/* GET home page. */
router.get('/', function (req, res, next) {
    firebase.auth().onAuthStateChanged(function (user) {
        res.render('login/form', { user: user })
    });
})

router.post('/', function (req, res, next) {
    var username = req.body.inputEmail
    var password = req.body.inputPassword
    firebase.auth().signInWithEmailAndPassword(username, password)
        .then(function () {
            res.redirect('/')
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            res.send('<h1>Error</h1> ' + errorMessage);
        });
})

module.exports = router;