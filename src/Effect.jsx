import React, { useEffect, useState } from 'react'

export default function Effect() {
    let [count,setCount] = useState(0);
    let [start,setStart] = useState(false);

    useEffect(()=>{
        let timer = 0;
        if(start){
         timer =  setInterval(()=>{
            setCount((count)=>count+1);
          },1000)
        }
        return ()=> clearInterval(timer);
    },[start])

  return (
    <div>
      <h1>Total seconds {count}</h1>
      <button onClick={()=>setStart(true)}>Start</button>
      <button onClick={()=>setStart(false)}>Stop</button>
     
    </div>
  )
}
