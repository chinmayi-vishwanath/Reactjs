import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const call=useCallback(()=>{
     setCount(count+1)
  })

  return (
    <>
      
      <div onClick={call}>click</div>
      <div>{count}</div>
      
    </>
  )
}

export default App
