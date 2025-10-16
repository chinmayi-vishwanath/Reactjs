import { useEffect, useReducer} from 'react'
import './App.css'

function App() {

      const initialState={count:0}

      function Reducer(state,action){
        switch(action.type){
           case  "Increment":
           return {count:state.count+1}
           case "Decrement":
           return {count:state.count-1}
           case "Reset":
           return {count:0}
           default:
            return state;
            
        }

         
      }
      useEffect(()=>{
        console.log(initialState)
      })

  const [state,dispatch]= useReducer(Reducer,initialState)
  return (
    <div>
      <div>{state.count}</div>
      <div onClick={()=>dispatch({type:"Increment"})}>+</div>
      <div onClick={()=>dispatch({type:"Decrement"})}>-</div>
      <div onClick={()=>dispatch({type:"Reset"})}>Reset</div>
    </div>
  )
}

export default App
