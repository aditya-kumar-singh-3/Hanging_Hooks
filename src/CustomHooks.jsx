import React, { useEffect, useState } from 'react'

const CustomHooks = () => {
      
     const [data,setData] = useState(null);

     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then((answer)=>{setData(answer)
            return answer})
            .then((data)=>{console.log(data)});
  
     },[]);
  return (
    <div>
      {data && data.map((item)=>{
        return <p key={item.id}>{item.id}</p>
      })}
    </div>
  )
}

export default CustomHooks
