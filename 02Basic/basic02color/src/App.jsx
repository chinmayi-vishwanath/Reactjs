import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  useEffect(()=>{
    const root=document.documentElement;
     if(color==="white"){
      root.classList.add("bg-white","text-black")
      root.classList.remove("bg-black","text-white")
     }
     else{
      root.classList.add("bg-black","text-white")
      root.classList.remove("bg-white","text-black")
     }
  },[color])

  function handleClick(){
     setColor((prev)=> (prev==="white"?"dark":"white"))
  }

  return (
    <>
      <div>
           <button onClick={handleClick} >click</button>
     </div>
    </>
  )
}

export default App
