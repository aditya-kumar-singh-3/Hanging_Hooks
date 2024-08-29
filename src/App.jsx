import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State from './State'
import Effect from './Effect'
import Component1 from './Context/Component1'
import Ref from './Ref'
import CallBack from './CallBack'
import Memo from './Memo'
import CustomHooks from './CustomHooks'
import Reducer from './Reducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <State/> */}
      {/* <Effect/> */}
      {/* <Component1/> */}
      {/* <Ref/> */}
      {/* <CallBack/> */}
      {/* <Memo/> */}
    {/* <CustomHooks/> */}
    <Reducer/>
    </>
  )
}

export default App
