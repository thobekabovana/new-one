import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Navig } from './navigation';
import { Footer } from './footer';

export default function Layout() {
  return (
    <>
    <Navig/>
    {/* <Outlet/> */}
      <Footer/>
    
    </>
  )
}
