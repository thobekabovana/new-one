import { useState } from "react";
import { useContext } from 'react';
import { AppContext } from "./AppContext";

export function Home() {
    const [sentance, setSentance] = useState("");
    const { todos, setTodos } = useContext(AppContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: Date.now(), // Generate a unique ID
            description: event.target.description.value,
            priority: event.target.priority.value,
        };
        setTodos([...todos, newTask]);
        event.target.reset(); // Clear the form
    };

   
      


    return(
        <>
        <div style={{ background: "linear-gradient(to bottom, pink, purple)", 
                      marginTop: "0%",
                      height: "100vh", 
                      width: "100vw", 
                      position: "absolute", 
                      top: 0, 
                      left: 0, }}>
        
            
            
            <h1  style={{display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%"}}>What to do?</h1>

            <input type="text" placeholder="tell me what you want to do"   value={sentance}  onChange={(e) => setSentance(e.target.value)}
            style={{marginLeft: "5%", width: "40%", textAlign: "center", height: "30px", marginTop: "5%"}}>
                </input>   
                
                <div>
                <label htmlFor="priority">Priority:</label>
                <select id="priority" name="priority">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

                <button onClick={handleSubmit} style={{height:"34px", width: "5%", backgroundColor: "purple"}}>Add</button>
        </div>
        </>
    )
}