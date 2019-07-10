const knex = require('knex');
const knexConfig = require('../knexfile');
// require('dotenv').config();

module.exports = knex(knexConfig.production);