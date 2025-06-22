const knex = require('knex');
const config = require('../knexfile');

const connection = knex(config.development);

module.exports = connection;
// This code sets up a connection to a SQLite database using Knex.js.
// It imports the Knex library and the configuration from knexfile.js, then creates a connection