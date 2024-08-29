import React, { useReducer } from 'react';

const Reducer = () => {
    const initial = {
        name:"",
        age:"",
        number:"",
    }

    const reducers = (state,action) =>{
           switch(action.type){
            case "name":
                return {...state,name:action.payload}

                case "age":
                    return {...state,age:action.payload}

                case "number":
                    return {...state,number:action.payload}
           }
           
    }

    const handleClick = () =>{
        console.log(state);
    }

    const [state,dispatch] = useReducer(reducers,initial)
  return (
    <div>
      <form>
        <input onChange={(e)=>dispatch({type:"name",payload:e.target.value})} placeholder='name'></input>
        <input onChange={(e)=>dispatch({type:"age",payload:e.target.value})} placeholder='age'></input>
        <input onChange={(e)=>dispatch({type:"number",payload:e.target.value})} placeholder='number'></input>
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Reducer;
