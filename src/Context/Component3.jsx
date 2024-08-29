import React, { useContext } from 'react'
import {userContext} from './Component1'

export default function Component3() {

    const user = useContext(userContext);
  return (
    <div>
      <h1>Component 3</h1>
      <h2>Hello again {user}</h2>
    </div>
  )
}
