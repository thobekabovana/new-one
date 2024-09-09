import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Todo() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '', priority: 'medium' });
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/todo')
      .then(response => {
        setTodo(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  const handleAddTask = () => {
    axios.post('http://localhost:5000/todo', newTodo)
      .then(response => {
        setTodo([...todo, response.data]);
        setNewTodo({ title: '', description: '', priority: 'medium' });
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleUpdateTask = (task) => {
    axios.put(`http://localhost:3001/tasks/${task.id}`, task)
      .then(response => {
        setTasks(tasks.map(t => t.id === task.id ? task : t));
        setEditingTask(null);
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleDeleteTask = (taskId) => {
    axios.delete(`http://localhost:3001/tasks/${taskId}`)
      .then(response => {
        setTasks(tasks.filter(t => t.id !== taskId));
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handlePriorityChange = (event) => {
    setNewTodo({ ...newTodo, priority: event.target.value });
  };
  const handleEditTaskChange = (event, field) => {
    setEditingTask({ ...editingTodo, [field]: event.target.value });
  };
  return (
    <div className='todo'>
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
              marginTop: "5%"}}>Todo</h1>

      <form style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px",
            margin: "7.5%",
            width: "80%",
            height: "30%",
            borderRadius: "5px",
            boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
            backgroundImage: "url('https://img.freepik.com/premium-photo/purple-lightning-storm-city-with-city-background_265515-8248.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>


        <label>
          {/* Title: */}
          <input type="text" style={{width: "120%"}}
          value={newTodo.title} 
          onChange={(event) => setNewTodo({ ...newTodo, title: event.target.value })} 
          placeholder='Add Title'/>
        </label>
        <br />

        <label>
          {/* Description: */}
          <input type="text"  style={{width: "120%"}}
           value={newTodo.description} 
           onChange={(event) => setNewTodo({ ...newTodo, description: event.target.value })} 
           placeholder='Add Description' />
        </label>
        <br />

        <label>
          {/* Priority: */}  
          <select value={newTodo.priority} onChange={handlePriorityChange} >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />

        <button className='add-btn' type="submit" onClick={handleAddTask}>Add Task</button>

      </form>



<div >

<h1  style={{display: "flex",
              color: "black",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%"}}>Your Todo list</h1>

      <ul style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between 6%",
    }}>
        {Array.isArray(todo) ? (
  todo.map((todo) => (
    todo.map((todo) => (
      <div  key={todo.id} style={{
       display: "flex",
       flexDirection: "column",
       padding: "15px",
       margin: "7.5%",
       width: "30%",
       height: "30%",
       borderRadius: "5px",
       boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
       backgroundImage: "url('https://th.bing.com/th/id/OIP.MWiDrezuFV2kTU22ZEucsQHaEo?rs=1&pid=ImgDetMain')",
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
       // display: "inline-block"
     }}>
  
     <li>
       <h2>{todo.title}</h2>
       <p>{todo.description}</p>
       <p>Priority: {todo.priority}</p>
  
       <button className='edit-btn' onClick={() => setEditingTask(todo)} >Edit</button>
       <button className='delete-btn' onClick={() => handleDeleteTask(todo.id)}>Delete</button>
       {editingTodo === todo && (
  
         <form>
           <label>
             Title:
             <input type="text" value={editingTodo.title} onChange={(event) => handleEditTaskChange(event, 'title')} />
           </label>
           <br />
           <label>
  
             Description:
             <input type="text" value={editingTodo.description} onChange={(event) => handleEditTaskChange(event, 'description')} />
           </label>
           <br />
           <label>
  
             Priority:
             <select value={editingTodo.priority} onChange={(event) => handleEditTaskChange(event, 'priority')}>
               <option value="easy">Easy</option>
               <option value="medium">Medium</option>
               <option value="hard">Hard</option>
             </select>
           </label>
           <br />
  
           <button type="submit" onClick={() => handleUpdateTasks(editingTodo)} >Update</button>
           
         </form>
       )}
     </li>
     </div>
   ))
  ))
) : (
  <p>No todo items found.</p>
)}
       
      </ul>
      </div>
      </div>
    </div>
  );
}
export default Todo;






