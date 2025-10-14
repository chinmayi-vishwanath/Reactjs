import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
     console.log("hii")
  },[])  // can run only once

  return (
    <div>
     <button onClick={()=>{setCount(count+1)}}>Button</button>
    </div>
  )
}

export default App
