import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const AddTodo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
}, []); // Run only once on component mount

const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:5000/todo');
        setUsers(response.data);
    } catch (error) {
        console.error('Error fetching todo:', error);
    }
};

const fetchUser = async (id) => {
    try {
        const response = await axios.get(`http://localhost:5000/todo/${id}`);
        setUser(response.data);
    } catch (error) {
        console.error('Error fetching todo:', error);
        setUser(null);
    }
};

const handleAdd = async () => {
    try {
        await axios.post('http://localhost:5000/todo', { name, age, email });
        setName('');
        setAge('');
        setEmail(''); // assuming you have an setEmail function
        fetchUsers();
    } catch (error) {same
        (`error handling code remains the` )
    }
};
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      margin: "4%",
      width: "40%",
      borderRadius: "5px",
      boxShadow: "0 5px 10px rgba(2, 2, 2, 2.1)",
      backgroundImage: "url('https://thumbs.dreamstime.com/b/collection-various-blank-white-book-white-background-clipping-path-30442934.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;