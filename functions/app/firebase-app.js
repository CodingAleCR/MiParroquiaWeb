const functions = require('firebase-functions');
const firebase = require('firebase');

const firebaseApp = firebase.initializeApp(functions.config().firebase);

module.exports = firebaseApp