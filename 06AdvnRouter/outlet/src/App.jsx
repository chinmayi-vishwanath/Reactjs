import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import About from './pages/PublicPages/About/About'
import Chat from './pages/PublicPages/Chat/Chat'
import Community from './pages/PublicPages/Community/Community'
import Layout from './pages/PublicPages/Layout/Layout.jsx'


function App() {

  return (
  <div>
    <Router>
        <Routes>
          {/* parent Route */}
           <Route path="/" element={<Layout />} >
                {/* Child Route */}
                <Route path="/about" element={<About />}/>
                <Route path="/chat" element={<Chat />}/>
                <Route path="/community" element={<Community />}/>
            </Route>
        </Routes>
    </Router>

  
  </div>
  )
}

export default App
