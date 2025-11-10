import {useContext} from "react"
import { Createbox } from "./Counter"

function MainBox2(){
    const {count}=useContext(Createbox)
     return(
        <div> 
            Mainbox has a {count}
        </div>
     )
}

export default MainBox2