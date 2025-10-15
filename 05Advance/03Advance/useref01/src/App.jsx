import { useRef } from 'react'
import './App.css'

function App() {
  const Box=useRef(null)  //creating the ref box


  

  return (
     <div>
      <input type="text" ref={Box} />
      <button onClick={()=>{alert(Box.current.focus)}} >click</button>


     </div>
  )
}

export default App
