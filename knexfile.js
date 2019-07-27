// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/data/users.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './api/data/migrations',
    },
    seeds: {
      directory: './api/data/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './api/data/testusers.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './api/data/migrations',
    },
    seeds: {
      directory: './api/data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
