import { useState } from "react"

function Submit(){
    const [name,setName]=useState()

    function handleSubmit(event){
        event.preventDefault()
        alert("submited")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={name}  // what ever is storing in name,show tha in input box
                placeholder="Enter Your Name"
                onChange={(e)=>setName(e.target.value)}
                />
                <button type="submit">Submited</button>
            </form>
        </div>

    )
}
export default Submit