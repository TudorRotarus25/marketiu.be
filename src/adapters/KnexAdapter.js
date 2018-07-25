import knex from 'knex';
import databaseCredentials from '../../config/databaseCredentials.json';

let knexAdapter = null;

class KnexAdapter {
  constructor() {
    if (knexAdapter === null) {
      knexAdapter = this;
      knexAdapter.connection = knex({
        client: 'mysql',
        connection: {
          host : databaseCredentials.host,
          user : databaseCredentials.user,
          password : databaseCredentials.password,
          database : databaseCredentials.database,
        }
      });
    }

    return knexAdapter;
  }

  getConnection() {
    return this.connection;
  }
}

export default KnexAdapter;
