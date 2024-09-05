import { useState } from "react";
import { useEffect } from "react";
// import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

export function Thobeka() {

  const [localData , setLocalData] = useState("")

  useEffect(()=> {
    axios.get(" http://localhost:5000/").then((res)=>{
       setLocalData( res.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

    const navigate = useNavigate(); 
    const [searchQuery, setSearchQuery] = useState('');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editedTodo, setEditedTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    event.preventDefault();
    searchItems(searchTerm);
   
  };

  
    
    const handleAddTodo = () => {
        setTodos((prevTodos) => [...prevTodos, { id: Date.now(), name: newTodo }]);
        setNewTodo('');
        alert('Added Successfully')
      };
      const handleEditTodo = (todo) => {
        setEditedTodo(todo);
      };
      const handleUpdateTodo = (updatedTodo) => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
        );
        setEditedTodo(null);
      };
      const handleDeleteTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
      };
   
      const filteredTodos = todos.filter((todo) =>
        todo.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
   
    return(
        <>
        <div>
        
            
            <div style={{ backgroundImage : "url('https://drevio.b-cdn.net/wp-content/uploads/2019/12/DiY-Printable-Wedding-Invitation-Template-731x1024.jpg')",
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                           alignItems: "center",
                           borderRadius: "10px",
                           boxShadow: '0 4px 8px rgba(0, 0, 0, 5)',
                           backgroundPosition: "center",
                           height: "80vh",
                           width: "50%",
                           marginTop: "6%",
                           marginLeft: "25%",
                           overflowY: "auto", 

            }}>


            <h1  style={{display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%"}}>What to do?</h1>


<div style={{ overflow: 'hidden'}}>

<input
            type="search"
            // value={searchQuery}
            value={searchTerm}
            // onChange={handleSearch}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search..."
            style={{
              width: "20%",
              padding: "10px",
              fontSize: "18px",
              marginLeft: "70%", 
              textAlign: "center",
              height: "20px",
              marginBottom: "5%",
              
            }}
          />  <button type="submit" onClick={handleSearch}> Search </button>

          <input type="text" 
        //   value={newTodo}
                 placeholder="tell me what you want to do"  
                 style={{width: "25%", 
                         textAlign: "center", 
                         height: "30px", 
                        marginLeft: "3%", 
                         marginTop: "1%"}}>
                </input>
                <label htmlFor="priority" style={{fontSize: "25px",marginLeft: "3%" }}>Priority:</label>
                <select id="priority" name="priority">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
         

            <button  onClick={handleAddTodo}  
                         style={{height:"34px", 
                         width: "7%", 
                         backgroundColor: "violet",
                         marginLeft: "3%",
                         height: "2.5%"
                         }}>Add</button>
            
           
            </div>

          
              
              

              <ul style={{fontSize:"35px"}}>
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                {editedTodo && editedTodo.id === todo.id ? (
                  <input
                    type="text"
                    value={editedTodo.name}
                    onChange={(event) => setEditedTodo({ ...editedTodo, name: event.target.value })}
                    style={{
                      width: "50%",
                      padding: "10px",
                      fontSize: "18px",
                      marginLeft: "10%",
                      color: "black"
                    }}
                  />
                ) : (
                  <span>{todo.name}</span>
                )}
                <button
                  onClick={() => handleEditTodo(todo)}
                  style={{
                    backgroundColor: "#FFC107",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  style={{
                    backgroundColor: "#FF3737",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                > Delete</button>
              </li>
            ))}
          </ul>
          </div>

        </div>
    
        
        </>
    )
}