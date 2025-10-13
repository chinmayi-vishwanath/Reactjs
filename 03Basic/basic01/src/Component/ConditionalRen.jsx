function CondtionalRendring(){
        const condition="true"

    return(
        <div>
            {condition?<h1>Welcome</h1>:<h1>Login</h1>}        
        </div>
    )
}

export default CondtionalRendring