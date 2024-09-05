import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import AddTodo from './addTodo';
import { useParams } from 'react-router-dom';

export default function Home() {


  const [info, setInfo] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [todoId, setTodoId] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  

  useEffect(() => {
    axios.get('http://localhost:5000/todo').then((res) => {
      setInfo(res.data);
    }).catch((error) => {
      console.log(error, 'Oops crashed');
    });
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todo');
      const usersData = response.data;
      setTodos(TodosData);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);



  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/todo/${id}`)
      .then((res) => {
        console.log(res.data, 'Todo deleted successfully!');
        setInfo(info.filter((todo) => todo._id !== id));
      })
      .catch((error) => {
        console.log(error, 'Error deleting todo');
      });
  };


  const handleEdit = (todo) => {
    setIsEditing(true);
    setTodoId(todo._id);
    setEmail(todo.email);
    setPassword(todo.password);
  };


  const handleUpdate = () => {
    const updatedTodo = { email, password };
    axios.put(`http://localhost:5000/todo/${todoId}`, updatedTodo)
      .then((res) => {
        console.log(res.data, 'Todo updated successfully!');
        setInfo(info.map((todo) => todo._id === todoId ? res.data : todo));
        setIsEditing(false);
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error, 'Error updating todo');
      });
  };


  const handleCancel = () => {
    setIsEditing(false);
    setEmail('');
    setPassword('');
  };
console.log("This is the object" ,info)
  return (

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


<div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    }}>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        info.map((todo, index) => (
          <div key={index} style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px",
            margin: "4%",
            width: "40%",
            borderRadius: "5px",
            boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
            backgroundImage: "url('https://coolbackgrounds.io/images/backgrounds/white/white-unsplash-9d0375d2.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>

            <h2 style={{ color: "black" }}>To Do {todo.id}</h2>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>Name: {todo.name}</p>
            <p style={{ fontWeight: "bold" }}>Age: {todo.age}</p>
            <hr style={{ width: "100%", marginBottom: "15px" }} />

            <>
           
            {editUserId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editEmail}
                                    onChange={(e) => setEditEmail(e.target.value)}
                                />
                                <input
                                    type="number"
                                    value={editPassword}
                                    onChange={(e) => setEditPassword(e.target.value)}
                                />
                                <button onClick={() => updateTodo(todo.id)} style={{marginBottom: "10px"}}>Update</button>
                                <button onClick={() => setEditTodoId(null)}>Cancel</button>
                            </>
                        ) : (
                            <>
      
        <button key={`${todo.id}-${editUserId}`} onClick={() => handleEditClick(todo)} style={{ marginBottom: "10px" }}>Edit</button>
      
      <button key={`${todo.id}-${editUserId}`} onClick={() => deleteUser(todo.id)}>Delete</button>
    </>
                        )}
          
                            </>

        </div>

          

        ))
      )}
    </div>
</div>
        </div>
    
        
        </>
   
  );
}














