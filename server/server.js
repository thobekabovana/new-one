const express = require('express');
const cors = require('cors');
const db = require('better-sqlite3')('database.db');
const morgan = require('morgan');

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'))

// Create the table
const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            password INTEGER
        )
    `;
    db.prepare(sql).run();
};

createTable();

// Insert a new user
app.post('/todo', (req, res) => {
    const { email, password } = req.body;
    const sql = `
        INSERT INTO todo (email, password)
        VALUES (?, ?)
    `;
    const info = db.prepare(sql).run(email, password);
    res.status(201).json({ id: info.lastInsertRowid });
});

// Get all users
app.get('/todo', (req, res) => {
    const sql = `
        SELECT * FROM todo
    `;
    const rows = db.prepare(sql).all();
    res.json(rows);
});

// Get a user by id
app.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        SELECT * FROM todo
        WHERE id = ?
    `;
    const row = db.prepare(sql).get(id);
    if (row) {
        res.json(row);
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Update a user by id
app.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    const sql = `
        UPDATE todo
        SET email = ?, password = ?
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(email, password, id);
    if (info.changes > 0) {
        res.json({ message: 'Todo updated successfully' });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

// Delete a user by id
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const sql = `
        DELETE FROM todo
        WHERE id = ?
    `;
    const info = db.prepare(sql).run(id);
    if (info.changes > 0) {
        res.json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ error: 'Todo not found' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000')
})