import react from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Handlein from './pages/handlein.jsx';
import Handleout from './pages/handleout.jsx';
import Login from './pages/login.jsx'; 


function App(){
    return(
        <div>
          <BrowserRouter>
             <Link to='/login'>Home</Link>
            <Routes>
                {/* <Route path="/" element={</>} /> */}
                <Route path="/login" element={<Login/>}/>
                <Route path="/handlein" element={<Handlein />} />
                <Route path="/handleout" lement={< Handleout/>} />
            </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App