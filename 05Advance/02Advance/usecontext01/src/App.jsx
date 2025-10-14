import { useState } from 'react'
import './App.css'
import Room from './components/Room1';
import { createContext } from 'react'

const Toybox=createContext();  // creating the  toybox


function App() {
   const Toybox=createContext();  // creating the  toybox
   const toy="panda"  //  toybox
  return (
    <div>

      {/* table where the toybox is kept */}
     <Toybox.Provider value={toy}>
      <Room />
     </Toybox.Provider>

    </div>
  )
}

export default App
