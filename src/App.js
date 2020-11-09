import React from 'react';

import { MessageHOC } from './Redux/hocs/MessageHOC';
import { PeopleHOC } from './Redux/hocs/peopleHOC';


const App=() =>{
    return(
        <div>
        <h1>World is bigger!!!!</h1>
        <MessageHOC></MessageHOC>
        <PeopleHOC></PeopleHOC>
        </div>
    );
}

export default App;