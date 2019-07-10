

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'db'
    },
    useNullAsDefault: true,
  
  migrations: {
    directory: './data/migrations'
  },
  
  seeds: {
    directory: './data/seeds'
  }
},
production: {
  client: 'pg',
  connection: {
    database: 'db'
  },
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  }
}

};
