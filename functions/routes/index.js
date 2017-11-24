var express = require('express');
var router = express.Router();

var users = require('./users');
var home = require('./home');
var login = require('./login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: null});
});

router.use('/home', home);
router.use('/users', users);
router.use('/login', login);
module.exports = router;
