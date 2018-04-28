import 'firebase/firestore'
import { app } from './firebase'

const database = app.firestore()

export default { database }
