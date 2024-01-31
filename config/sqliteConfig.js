// const { Pool } = require('pg'); // this is for PostgreSQL connection
const knex = require('knex');
const config = require('./knexfile');

// this is for PostgreSQL connection
const db = knex(config.development);  // this is for PostgreSQL connection
db.raw('SELECT 1')
  .then(() => {
    console.log('Connected to the PostgreSQL database');
  })
  .catch(error => {
    console.error('Error checking database connection:', error);
  })
  .finally(() => {
    // db.destroy();
});

module.exports = db;