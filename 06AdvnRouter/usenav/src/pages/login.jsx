import react from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Login(){
    const[name,setName]=useState('')
    const navigate=useNavigate()

    const handleclick=()=>{
            navigate("/handlein")
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text"  placeholder="username" onChange={(e)=>{setName(e.target.value)}} />
            <button type="submit" onClick={handleclick}>Submit</button> { /*handle page*/}
        </div>
    )
}

export default Login