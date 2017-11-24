const functions = require('firebase-functions');
const admin = require('firebase-admin');

const firebaseApp = admin.initializeApp(functions.config().firebase);

module.exports = firebaseApp