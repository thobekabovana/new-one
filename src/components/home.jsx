import { useState } from "react";
// import { useContext } from 'react';


export function Home() {
    
    
  
      


    return(
        <>
        <div style={{ background: "linear-gradient(to bottom, pink, purple)",
                      
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "0%",
                      height: "100vh", 
                      borderRadius: "10px",
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      textAlign: "center",
                      justifyItems: "center" }}>
        
            
            <div style={{ backgroundImage : "url('https://image.freepik.com/free-vector/back-school-notepad-cute-cartoon-illustration_107355-724.jpg?w=900')",
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                           alignItems: "center",
                           borderRadius: "10px",
                           boxShadow: '0 4px 8px rgba(0, 0, 0, 5)',
                           textAlign: "center",
                           justifyItems: "center",
                           backgroundPosition: "center",
                           height: "80vh",
                           width: "50%",
                           marginTop: "6%"
            }}>


            <h1  style={{display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%"}}>What to do?</h1>

            <input type="text" placeholder="tell me what you want to do"  
            style={{width: "30%", textAlign: "center", height: "30px", alignItems: "center", justifyItems: "center"}}>
                </input>   <button  style={{height:"34px", width: "5%", backgroundColor: "purple"}}>Add</button>
                
                {/* <div>
                <label htmlFor="priority">Priority:</label>
                <select id="priority" name="priority">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div> */}
              </div>
              </div>
              {/* onClick={handleSubmit} */}
        
        </>
    )
}