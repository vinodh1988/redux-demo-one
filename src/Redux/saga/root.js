import { takeEvery, put,call} from 'redux-saga/effects';
import axios from 'axios';

export  function* rootSaga(){
    yield takeEvery("PEOPLE_FLOW",HandlePeople);
    yield takeEvery("PEOPLE_ADD",addPerson);

}

function getCaller(url,type,data={}){
    switch(type){
    case "GET":
        return axios.get(url);
    case "POST":
       return axios.post(url,data);
    }
}

function* HandlePeople(){
    
    let response=yield call(getCaller,"http://localhost:4500/people","GET");
    console.log(response);
    yield put({type:'PEOPLE_ACTION',data:response.data});
 }

 function* addPerson(action){
    let response=yield call(getCaller,"http://localhost:4500/people","POST",action.data);
    yield HandlePeople();
   // yield put({type:'PEOPLE_ACTION',data:response.data});
 }