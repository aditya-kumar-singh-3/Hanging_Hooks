import React, { useEffect, useRef, useState } from 'react'


export default function Ref() {

    let [input,setInput] = useState("");
    const prevValue = useRef("");

    useEffect(()=>{
        prevValue.current = input;
    },[input])
   
  return (
    <div>
      <h1>TESTING GIT</h1>
      <input  onChange={(e)=>setInput(e.target.value)}></input>
      <h2>Current value  : {input}</h2>
      {input &&<h2>Prev value : {prevValue.current}</h2>}
     
    </div>
  )
}


