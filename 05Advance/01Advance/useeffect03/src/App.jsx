import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("console.log",count);
  },[count])

  return (
    <>
    <button onClick={()=>setCount(count+1)}>click={count}</button>
  
    </>
  )
}

export default App
