import User from "./pages/user.jsx"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Link to="/user">home</Link>
      <Routes>
            <Route path="/user/:id"  element={<User />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
