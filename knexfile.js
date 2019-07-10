

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.sqlite3'
    },
    // client: 'mysql',
    // connection: {
    //   host: 'localhost',
    //   database: 'howto',
    //   user: 'filler',
    //   password: 'filler'
    // },
    useNullAsDefault: true,
  
  migrations: {
    directory: './data/migrations'
  },
  
  seeds: {
    directory: './data/seeds'
  }
},
production: {
  client: 'sqlite3',
  connection: {
    filename: './data/db.sqlite3'
  },
  // client: 'mysql',
  // connection: {
  //   host: 'localhost',
  //   database: 'howto',
  //   user: 'filler',
  //   password: 'filler'
  // },
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
}

};
