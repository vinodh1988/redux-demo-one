import {combineReducers} from 'redux'
import {firstreducer, secondreducer} from './myreducers'
   
export const appstate = combineReducers({
       first: firstreducer,
       second: secondreducer
   })