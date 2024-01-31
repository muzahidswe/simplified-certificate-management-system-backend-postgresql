// this is for PostgreSQL connection
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'certificate_db',
      port: 5432, // Default PostgreSQL port
    },
    pool: {
      min: 2,
      max: 10,
    },
    // migrations: {
    //   tableName: 'knex_migrations',
    //   directory: './migrations',
    // },
    // seeds: {
    //   directory: './seeds',
    // },
  },
};