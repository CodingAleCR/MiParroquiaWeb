import firebase from 'firebase'
import 'firebase/firestore'

const prodConfig = {
  apiKey: 'AIzaSyA-t_XT9wvbF0z6WVFMWay1FADv2l06dEs',
  authDomain: 'mi-parroquia-crc.firebaseapp.com',
  databaseURL: 'https://mi-parroquia-crc.firebaseio.com',
  projectId: 'mi-parroquia-crc',
  storageBucket: 'mi-parroquia-crc.appspot.com',
  messagingSenderId: '1006900125649',
}

const devConfig = {
  apiKey: 'AIzaSyA-t_XT9wvbF0z6WVFMWay1FADv2l06dEs',
  authDomain: 'mi-parroquia-crc.firebaseapp.com',
  databaseURL: 'https://mi-parroquia-crc.firebaseio.com',
  projectId: 'mi-parroquia-crc',
  storageBucket: 'mi-parroquia-crc.appspot.com',
  messagingSenderId: '1006900125649',
}

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

// if (!firebase.apps.length) {
// }

const app = firebase.initializeApp(config)

const auth = app.auth()
const firestore = app.firestore()

export { app, auth, firestore }
