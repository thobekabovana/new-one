import { useState } from 'react'
import { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LogIn } from './components/LogIn';
import {Create} from './components/create';
import Landing from './components/landing';
import Layout from './components/Layout';
import Todo from './components/home'



function App() {

  
  


 

  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} >
    <Route  index element={<Landing />} />
  <Route path="/log-in" element={<LogIn />} />
  <Route path="/create" element={<Create />} />
  <Route path="/home" element={<Todo />} />
  </Route>
</Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
