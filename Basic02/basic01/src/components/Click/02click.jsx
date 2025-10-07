// using Event with State
import { useState } from "react"

function Event(){
    const [count,setCount] =useState(0)

    function handleClick(){
        setCount(count+1)
    }

    return(
        <div>
            <button onClick={handleClick}>click={count}</button>
        </div>

    )

}

export default Event