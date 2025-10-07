// passing data to the event handler

import React from 'react'

function Passing() {
    function handleClick(nam){
        alert("hello" + " " +nam)
    }

  return (
    <div>
        <button onClick={()=>{handleClick("chinmayi")}}>clickhere</button>
        <span>  :passing data to event handler</span>
    </div>
  )
}

export default Passing