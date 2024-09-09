{todo.map((todo) => (
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
 ))}