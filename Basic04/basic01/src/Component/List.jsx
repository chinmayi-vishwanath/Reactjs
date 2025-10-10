
import React from 'react'

function List() {
    const names=["Virat" , "Dhoni","Rahul"]

  return (
    <div>
        <div>List:</div>
        <div>
            {names.map(
                (name)=>




                    
                 <li>{name}</li>
            )}
        </div>



    </div>
  )

}

export default List