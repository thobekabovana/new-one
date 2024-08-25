// AppContext.js
import React, { createContext, useState } from 'react';



const AppContext = createContext();

function AppProvider({ children }) {
    const [todos, setTodos] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);

    // ... Other state variables and functions 

    return (
        <AppContext.Provider value={{ todos, setTodos, loggedInUser, setLoggedInUser, /* ... other state variables and functions */ }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppProvider }; 