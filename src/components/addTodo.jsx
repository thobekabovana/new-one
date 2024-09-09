<ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <p>Priority: {todo.priority}</p>
            <button className='edit-btn' onClick={() => setEditingTask(todo)}>Edit</button>
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

                <button type="submit" onClick={() => handleUpdateTasks(editingTodo)}>Update Task</button>
                
              </form>
            )}
          </li>
        ))}
      </ul>