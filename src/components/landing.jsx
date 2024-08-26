import React from 'react'
import picture from '../assets/how-to-password-protect-a-pdf-in-adobe-acrobat-reader-and-shield-your-sensitive-data.webp'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Landing() {

    const login=useNavigate();
    const create=useNavigate();
    // const todo=useNavigate();

  return (
    <> 
    <div style={{padding: "10%", 
                 backgroundColor: "black", 
                 height: "100vh"}}>

       <nav style={{marginRight: "10px",
                   
                    padding: "10px 20px"
,                    border: "none",
                    borderRadius: "20px",
                    width: "130px",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    padding: "20px",}}>

       <Link to="./Log-in" style={{marginRight: "20px", color: "white", fontSize: "20px"}}>Login</Link>
        <Link to="./create" style={{ color: "white", fontSize: "20px"}}>SignUp</Link>
      
        </nav>             

      <aside  style={{float: "left ", 
                      margin: "10px",
                      width: "40%",
                      marginLeft: "5%",
                      marginTop: "10%",
                      display: "flex",
                     flexWrap: "wrap"}}>

                                    
        <h1 style={{color: "white"}}>Remind Yourself Of What!</h1>
        <h2  style={{color: "#6a5acd"}}>You Need To Do For The Day</h2>
        <p style={{color: "white"}}>On my app you remind yourself on what you will be busy doing. Have time to start and end the project</p>
       
      </aside>
      <img src={picture} style={{ borderRadius: "50%",
                                    float: "right ", 
                                    margin: "10px",
                                    width: "40%",
                                    marginLeft: "auto",
                                    marginTopRight: "20%",
                                    marginTop: "5%"}}></img>
      <aside>
       
      </aside>
      </div>
    </>
  )
}
