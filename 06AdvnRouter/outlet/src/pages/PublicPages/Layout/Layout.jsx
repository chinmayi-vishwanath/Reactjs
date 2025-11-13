import {Link,Outlet} from "react-router-dom"

function Layout(){
    return(
        <div>
            <div className="flex gap-3">
                <Link to='/chat'>Chat</Link>
                <Link to="/community">Community</Link>
                <Link to="/about">About</Link>
            </div>

            {/* Child Components*/}
            <Outlet />  {/*// child components are showned here */}
        </div>
    )
}

export default Layout