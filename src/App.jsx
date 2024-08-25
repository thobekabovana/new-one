// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './components/home';
import { LogIn } from './components/LogIn';
import {Create} from './components/create';
// import {Navigation} from './components/navigation';


function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<LogIn />} />
  <Route path="/create" element={<Create />} />
  <Route path="/home" element={<Home />} />
</Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
