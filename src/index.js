import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux' 
import { appstate } from './Redux/reducers/appstate';

const store = createStore(appstate)
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
