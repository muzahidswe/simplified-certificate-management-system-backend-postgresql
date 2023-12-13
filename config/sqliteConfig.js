const sqlite3 = require('sqlite3').verbose();
const knex = require('knex');
const config = require('./knexfile');
const db = knex(config);

new sqlite3.Database(config.connection.filename, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database named `certificate_management`');
  }
});

module.exports = db;