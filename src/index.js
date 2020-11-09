import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux' 
import thunk from 'redux-thunk';
import { appstate } from './Redux/reducers/appstate';
import {peopleRead} from  './Redux/actions/peopleaction'
const store = createStore(appstate,applyMiddleware(thunk))
store.dispatch(peopleRead())
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
