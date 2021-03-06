import React,{useState} from 'react';

//controlled component -- form is managed by react completely using react state

//uncontrolled component - we use createRef and form data is accessed on real DOM, react
//will not have complete control over form data

const People = ({people,addPeople}) =>{

    let code =people.map(x=><tr key={x.sno}>
        <td>{x.sno}</td>
        <td>{x.name}</td>
        <td>{x.city}</td>
    </tr>)

       const [sno, setSno] = useState("");
       const [name, setName] = useState("");
       const [city, setCity] = useState("");
    return(
        <div> 
        <form>
            <table id="tabform">
                <tbody>
                <tr>
                    <td>sno</td>
                    <td><input type="text" value={sno} 
                    onChange={(e)=>{setSno(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input type="text" value={name} 
                     onChange={(e)=>{setName(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>city</td>
                    <td><input type="text" value={city} 
                     onChange={(e)=>{setCity(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                <input type="button" value="store" 
                onClick={()=>{addPeople({sno:sno,name: name,city: city})}} />
                            
                    </td>
                </tr>
                </tbody>
            </table>
        </form>

        <table id="report"  className="table table-hover">
                { people.length==0?"": <thead>
                    <tr>
                     <th>Sno</th>
                     <th>name</th>
                     <th>city</th>
                     </tr>
                  </thead>}
                  <tbody>
                      {code}
                  </tbody>
        </table>
        </div>
    
    )
}

export default People;