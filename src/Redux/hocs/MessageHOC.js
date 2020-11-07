import {connect} from 'redux';
import Message from '../../Components/Message';

const mapStatetoProps =(state)=>{
    return {info: state.first.message}
}

const mapActiontoProps =()=>{

}

export const MessageHOC =connect(mapStatetoProps,null)(Message);