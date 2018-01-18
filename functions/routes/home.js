var express = require('express');
var router = express.Router();
const functions = require('firebase-functions');
const admin = require('../app/admin-app');
const firebase = require('../app/firebase-app');

const db = firebase.database();


function getHeadlines() {
    const ref = db.ref('announcements');
    return ref.once('value').then(snap => snap.val());
}

/* GET home page. */
router.get('/', function (req, res, next) {
    getHeadlines().then(headlines => {
        console.log(headlines)
        res.render('index', {
            user: firebase.auth().currentUser,
            headlines: null
        });
    });
});

module.exports = router;