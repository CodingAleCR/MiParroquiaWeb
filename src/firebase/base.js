import Rebase from 're-base'
import 'firebase/firestore'
import { app } from './firebase';

const base = Rebase.createClass(app.firestore())

export default base