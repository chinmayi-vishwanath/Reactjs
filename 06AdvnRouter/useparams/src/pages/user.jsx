import {useParams} from 'react-router-dom'

function User(){
    const params=useParams()
    return(
          <div>
            USERID:{params.id} 
          </div>
    )
}

export default User