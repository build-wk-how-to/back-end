

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './data/users.db3',
      port: 5433,
      user:     '',
      password: 'password'
    },
    useNullAsDefault: true,
  
  migrations: {
    directory: './data/migrations'
  },
  
  seeds: {
    directory: './data/seeds'
  }
},
};
