import { useState } from 'react'
import './App.css'
import CondtionalRendring from './Component/ConditionalRen'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <CondtionalRendring />
     </div>
  )
}

export default App
