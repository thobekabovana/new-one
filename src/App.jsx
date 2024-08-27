// import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './components/home';
import { LogIn } from './components/LogIn';
import {Create} from './components/create';
import Landing from './components/landing';
import Layout from './components/Layout';
// import {Navig} from './components/navigation';
// import { Footer } from './components/footer';


function App() {
 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} >
    <Route  index element={<Landing />} />
  <Route path="/log-in" element={<LogIn />} />
  <Route path="/create" element={<Create />} />
  <Route path="/home" element={<Home />} />
  </Route>
</Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
