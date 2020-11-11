import Axios from 'axios';

const peopleAction =(data)=>{
    return {
        type: "PEOPLE_ACTION",
        data: data
    }
}

export const peopleRead = ()=>{
  return async (dispatch) => {
        try{
            let response =  await Axios.get("http://localhost:4500/people")
            dispatch(peopleAction(response.data))
        }
        catch{
            dispatch(peopleAction([]))
        }
    
}
}

/*
export const storePersonData = (data) => {

    return async (dispatch)=>{
        try{
       let  response = await Axios.post("http://localhost:4500/people",{...data,id:data.sno});
        dispatch(peopleRead());
        }
        catch(e){
         alert("Unable to save...!!!!")
        }
    }
}*/

export const storePersonData= (data)=>{
    return {
        type: "PEOPLE_ADD",
        data: {...data, id: data.sno}
    }
}