import React from "react"
import { createContext } from "react"
import { useState,useContext} from "react"
import MainBox1 from "./MainBox1"
import MainBox2 from "./MainBox2"
import { useMemo } from "react"


export const Createbox=createContext()
function Counter(){
    const[count,setCount]=useState(0)
    // const box={count}

    function handleClick(){
        setCount(count+1)
    }

     const memo=useMemo(()=>{
       return  count*2
     },[count])



    return(
        <div>
         {/* <Createbox.Provider value={{count,setCount}}> */}
            <h1>Counter</h1>
            <div onClick={handleClick}>count={count}</div>
            

            <Createbox.Provider value={{count,setCount}}>
                <MainBox1 />
                <MainBox2 />
            </Createbox.Provider>
            <div>double:{memo}</div>

        </div>
    )
}

export default Counter