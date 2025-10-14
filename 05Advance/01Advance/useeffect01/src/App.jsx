import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    console.log("chinmayi")  //it sending the msg to the browser console
  })

  return (
    <>
    <button onClick={()=>{setCount(count+1)}}>click={count}</button>
      
    </>
  )
}

export default App
