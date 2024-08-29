import React, { useState, useMemo } from 'react'

export default function Memo() {
    let[count,setCount] = useState(0);
    let[todos,setTodos] = useState([]);

    const expensiveCalculation = (num) => {
        for(let i=0;i<100000000;i++){
            num = num + 1;
        }
        return num;
    }


    const calculation = useMemo(()=>expensiveCalculation(count),[count]);

    const increment = () =>{
        setCount((prev)=>prev+1);
    }

    const addTodo = () =>{
        setTodos((todo)=>[...todo,"New todo"]);
    }

    
  return (
    <div>
      <div>
        <h2>My todos</h2>
        {todos.map((todo,index)=>{
            return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>add todo</button>
      </div>

      <div>
        Count : {count}
        <button onClick={increment}>Increment</button>
       <h1>Expensive Calculation</h1>
       {calculation}
      </div>
    </div>
  )
}
