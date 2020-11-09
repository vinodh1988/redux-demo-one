import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import People from '../../Components/people';

import { messageAction } from '../actions/messageaction';

const mapStatetoProps =(state)=>{
    console.log({info: state.first.message})
    return {people: state.peopledata.people}
}

const mapActiontoProps =(dispatch)=>{
  return bindActionCreators({addPeople:messageAction},dispatch);
}

export const PeopleHOC =connect(mapStatetoProps,mapActiontoProps)(People);