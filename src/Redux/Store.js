import {createStore} from "redux"
import myReducer from './Reducer'

const myStore = createStore(myReducer)

export default myStore;