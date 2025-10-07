import React from 'react'

function Child(props) {  //props contains the all data send by the parent, //data is in form of object
  return (
    <div>i am {props.name} </div>  // accesing the data
  )
}

export default Child