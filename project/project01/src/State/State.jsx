import { useState } from "react"


function State(){
    const[count,setCount]=useState(0)
    
    function handleClick(){
        setCount(count+1)
    }

    
}

export default State