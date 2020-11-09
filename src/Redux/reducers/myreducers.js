
// a reducer is a function which returns a javascript object
// a reducer is typically followed by an action, it gets the action which last executed as
//second parameter, the data which it sent earlier as first parameter
export const firstreducer  =(data={message:"First Funny message"},action) =>{
    console.log(action)
    switch(action.type){
        case "MESSAGE_ACTION":
               console.log(action.data)
               return {message: action.data }
        default:
               return data;
    }

}

export const secondreducer  =(data={message2:"Default message"},action) =>{
   
    switch(action.type){
        case "MESSAGE2_ACTION":
              
               return {message: action.data}
        default:
               return data;
    }

}

export const peoplereducer  =(data={people:[]},action) =>{
   
    switch(action.type){
        case "PEOPLE_ACTION":
              
               return {people: action.data}
        default:
               return data;
    }

}

