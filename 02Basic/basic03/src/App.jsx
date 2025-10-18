import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState(" ");
  const [error,setError]= useState(" ");

  function handleSubmit(event){
    event.preventDefault() ;
    
     if(name ==""){
      setError("Name is required")
     }
        else {
        setError("")
        alert("form submitted"+ name)
        }

  }


  function handleChange(event){
    setName(event.target.value)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} placeholder='enter name' value={name}/>
          <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App
