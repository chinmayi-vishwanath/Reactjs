import React from "react"
import {useContext} from  "react"
// import Createbox from "../Context/Context.jsx"
import { Createbox } from "./Counter"



function MainBox1(){
    const {count}=useContext(Createbox)
    return(
        <div>MainBox1 has the {count}</div>
    )
}

export default MainBox1