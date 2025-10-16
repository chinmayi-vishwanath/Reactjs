import { useState ,useMemo} from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(5)

  const mem=useMemo(()=>{
    return num*2
  },[num])


  return (
    
    <div>
      <div>{num}</div>
       <button onClick={()=>setNum(num+2)}>click</button>
       <div>{mem}</div>
    </div>
  )
}

export default App
