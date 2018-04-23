import firebase from 'firebase'
import 'firebase/firestore'
const app = firebase.initializeApp({
    apiKey: "AIzaSyA-t_XT9wvbF0z6WVFMWay1FADv2l06dEs",
    authDomain: "mi-parroquia-crc.firebaseapp.com",
    databaseURL: "https://mi-parroquia-crc.firebaseio.com",
    projectId: "mi-parroquia-crc",
    storageBucket: "mi-parroquia-crc.appspot.com",
    messagingSenderId: "1006900125649"

});

export default app