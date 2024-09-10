// Create the table for todo 
const createTable = () => {
  const sql = `
      CREATE TABLE IF NOT EXISTS todo (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          priority TEXT CHECK(priority IN ('easy', 'medium', 'hard'))
      )
  `;
  db.prepare(sql).run();
};

createTable();

// Insert a new todo item
app.post('/todo', (req, res) => {
  const { title, description, priority } = req.body;
  const sql = `
      INSERT INTO todo (title, description, priority)
      VALUES (?, ?, ?)
  `;
  const info = db.prepare(sql).run(title, description, priority);
  res.status(201).json({ id: info.lastInsertRowid });
});

db.prepare("DROP TABLE IF EXISTS todo").run(); createTable();

// Get all todo items
app.get('/todo', (req, res) => {
  const sql = `
      SELECT * FROM todo
  `;
  const rows = db.prepare(sql).all();
  res.json(rows);
});

// Get a todo item by id
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

// Update a todo item by id
app.put('/todo/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, priority } = req.body;
  const sql = `
      UPDATE todo
      SET title = ?, description = ?, priority = ?
      WHERE id = ?
  `;
  const info = db.prepare(sql).run(title, description, priority, id);
  if (info.changes > 0) {
      res.json({ message: 'Todo updated successfully' });
  } else {
      res.status(404).json({ error: 'Todo not found' });
  }
});

// Delete a todo item by id
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