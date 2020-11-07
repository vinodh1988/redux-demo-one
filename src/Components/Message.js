import React from 'react'

//message is a property to hold a message
//changeMessage is a property to hold reference of a function
const Message = ({message,changeMessage}) =>{
    return(
        <div className="jumbotron">
           {message}
           <button className="btn btn-dark" onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default Message;