import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux' 
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';
import { appstate } from './Redux/reducers/appstate';
import { rootSaga } from './Redux/saga/root';
//import {peopleRead} from  './Redux/actions/peopleaction'

//const store = createStore(appstate,applyMiddleware(thunk))
//store.dispatch(peopleRead())

const sagaMiddleware = createSagaMiddleware();
let store=createStore(appstate,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

store.dispatch({type:"PEOPLE_FLOW"});
ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))
