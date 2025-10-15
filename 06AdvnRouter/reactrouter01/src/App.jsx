import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css'
import Home from  "./components/home.jsx"
import About from "./components/about.jsx"

function App() {

  return (
    
      <BrowserRouter>
          <nav className="flex  gap-2">
            <Link to="/">Home</Link> 
            <Link to='About'>About</Link>
          </nav>

              <Routes> {/*helps to match the currnet url with  the route*/}
                <Route path="/" element={<Home/>}/>  {/*tell react router to show the component for specific url*/}
                <Route path ="About" element={<About/>}/>
              </Routes>

      </BrowserRouter>

  )
}

export default App
