import * as path from 'path';
import knex from 'knex';
import { config } from 'src/config';
import { toCamelCase, toSnakeCase } from 'src/utils/queryFormatter.util';

const dbConfig = {
  client: 'pg',
  connection: config.dbUrl,
  recursiveStringcase: true,
  pool: {
    min: 0,
    max: 10,
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'migrations'),
    tableName: 'knex_migrations',
  },
};

const database = knex({
  ...dbConfig,
  postProcessResponse: (result) => toCamelCase(result),
  wrapIdentifier: (value, origImpl) => origImpl(toSnakeCase(value)),
});

export { database };
