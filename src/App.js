import React from 'react';
import Message from './Components/Message';
import { MessageHOC } from './Redux/hocs/MessageHOC';


const App=() =>{
    return(
        <div>
        <h1>World is bigger!!!!</h1>
        <MessageHOC></MessageHOC>
        </div>
    );
}

export default App;