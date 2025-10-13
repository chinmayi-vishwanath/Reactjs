import { useState } from "react";

// import React from 'react'

function UseState() {
    const [count ,setCount]=useState(0)
  return (
    <div>
        <div>count={count}</div>
        <div onClick={()=>setCount(count+1)}>increment</div>
    </div>
  )
}

export default UseState