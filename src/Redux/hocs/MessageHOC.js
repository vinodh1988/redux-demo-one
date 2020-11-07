import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Message from '../../Components/Message';
import { messageAction } from '../actions/messageaction';

const mapStatetoProps =(state)=>{
    console.log({info: state.first.message})
    return {info: state.first.message}
}

const mapActiontoProps =(dispatch)=>{
  return bindActionCreators({changeMessage:messageAction},dispatch);
}

export const MessageHOC =connect(mapStatetoProps,mapActiontoProps)(Message);