import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const interval=setInterval(() => {
      console.log("score changing")      
    }, 1000);

    const out=setTimeout(()=>{
      clearInterval(interval)
      console.log("finished")
    },8000)
  },[])

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>click={count}</button>

    </div>
  )
}

export default App
