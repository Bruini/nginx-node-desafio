const express = require('express');
const mysql = require('mysql2');
const faker = require('@faker-js/faker');

const app = express();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
  createTable();
});

function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Table created or already exists');
  });
}

app.get('/', (req, res) => {
  const name = faker.fakerPT_BR.person.firstName();
  const sql = `INSERT INTO people (name) VALUES ("${name}")`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Inserted:', result);

    db.query('SELECT * FROM people', (err, rows) => {
      if (err) {
        throw err;
      }
      let names = '';
      rows.forEach((row) => {
        names += `${row.name}<br>`;
      });
      res.send(`<h1>Full Cycle Rocks!</h1><br>${names}`);
    });
  });
});

app.get("/health", (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});