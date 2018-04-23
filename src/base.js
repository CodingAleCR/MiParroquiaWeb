import Rebase from 're-base'
import fireapp from './fireapp'

const base = Rebase.createClass(fireapp.firestore())

export default base