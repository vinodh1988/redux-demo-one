import React from 'react'

//message is a property to hold a message
//changeMessage is a property to hold reference of a function
const Message = ({info,changeMessage}) =>{
    return(
        <div className="jumbotron">
           {info}
           <button className="btn btn-dark" onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default Message;