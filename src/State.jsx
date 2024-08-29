import React, { useState } from 'react'

export default function State() {
    let[count, setCount] = useState(0);

    let clicked = () =>{
        setCount((count)=>count+1);
    }
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={clicked}>Click!</button>
    </div>
  )
}
