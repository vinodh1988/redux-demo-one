import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import People from '../../Components/people';


import { storePersonData } from '../actions/peopleaction';

const mapStatetoProps =(state)=>{
 
    return {people: state.peopledata.people}
}

const mapActiontoProps =(dispatch)=>{
  return bindActionCreators({addPeople:storePersonData},dispatch);
}

export const PeopleHOC =connect(mapStatetoProps,mapActiontoProps)(People);