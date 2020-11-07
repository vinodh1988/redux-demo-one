
// a reducer is a function which returns a javascript object
// a reducer is typically followed by an action, it gets the action which last executed as
//second parameter, the data which it sent earlier as first parameter
const firstreducer  =(data={message:"Default message"},action) =>{

    switch(action.type){
        case "MESSAGE_ACTION":
               return {message: action.data}
        default:
               return data;
    }

}

const secondreducer  =(data={message2:"Default message"},action) =>{

    switch(action.type){
        case "MESSAGE2_ACTION":
               return {message: action.data}
        default:
               return data;
    }

}