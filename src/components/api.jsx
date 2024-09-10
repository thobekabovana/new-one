<div>
  <h1
    style={{
      display: "flex",
      color: "black",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5%",
    }}
  >
    Your Todo list
  </h1>

  <ul
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      padding: "6%",
    }}
  >
    {Array.isArray(todo) ? (
      todo.map((todoItem) => (
        <li key={todoItem.id} style={{ margin: "7.5%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "15px",
              width: "30%",
              height: "30%",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
              backgroundImage: "url('https://th.bing.com/th/id/OIP.MWiDrezuFV2kTU22ZEucsQHaEo?rs=1&pid=ImgDetMain')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2>{todoItem.title}</h2>
            <p>{todoItem.description}</p>
            <p>Priority: {todoItem.priority}</p>

            <button onClick={() => setEditingTask(todoItem)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todoItem.id)}>Delete</button>

            {editingTodo === todoItem && (
              <form>
                <label>
                  Title:
                  <input
                    type="text"
                    value={editingTodo.title}
                    onChange={(event) => handleEditTaskChange(event, 'title')}
                  />
                </label>
                <br />
                <label>
                  Description:
                  <input
                    type="text"
                    value={editingTodo.description}
                    onChange={(event) => handleEditTaskChange(event, 'description')}
                  />
                </label>
                <br />
                <label>
                  Priority:
                  <select
                    value={editingTodo.priority}
                    onChange={(event) => handleEditTaskChange(event, 'priority')}
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </label>
                <br />

                <button type="submit" onClick={() => handleUpdateTodo(editingTodo)}>
                  Update
                </button>
              </form>
            )}
          </div>
        </li>
      ))
    ) : (
      <p>No todo items found.</p>
    )}
  </ul>
</div>