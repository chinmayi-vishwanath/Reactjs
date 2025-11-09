import React from "react"

const Childmain=React.memo(function Child(props){
    return (
        <div>
          <div> name:{props.name}</div>
            
        </div>
    )
})

export default Childmain