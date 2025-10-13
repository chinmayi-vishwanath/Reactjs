import React from 'react'

function Click() {
    function handleClick(){
        alert("clicked");
    }



  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Click