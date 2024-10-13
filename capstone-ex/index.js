//LukeLane
const express = require('express');
const postgres = require('postgres');

const path = require('path');
const app = express();
const port = 3000;

const sql = postgres('postgres://username:password@localhost:5432/mydb');



app.get('/db-time', async (req, res) => {
  try{ 
    const result = await sql;
    res.json({ time: result[0].now });
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).json({ error: 'Database failed'})
  }
});

app.get('/', (req, res) => {
  // res.send('Welcome to Lamp Chess!');
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/register-player', (req, res) => {
  const { firstName, lastName } = req.body;
  if (firstName && lastName) {
    const message = `${firstName} ${lastName} is now registered!`;
    res.json({ message });
  } else {
    res.status(400).json({ message: 'Both first name and last name are required' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
