import {combineReducers} from 'redux'
import {firstreducer, peoplereducer, secondreducer} from './myreducers'
   
export const appstate = combineReducers({
       first: firstreducer,
       second: secondreducer,
       peopledata: peoplereducer
   })