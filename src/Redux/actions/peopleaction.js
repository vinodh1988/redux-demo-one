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