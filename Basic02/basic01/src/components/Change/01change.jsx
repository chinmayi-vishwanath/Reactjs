import { useState } from "react"


function Change(){
    const [name,setName]=useState("")

    function handleChange(event){
        setName(event.target.value)
        
         
    }
        return(
            <div>
                <input 
                  type="text"
                  placeholder="Enter"
                  onChange={handleChange}/>
                <div>{name}</div>
            </div>

        )
 }

 export default Change