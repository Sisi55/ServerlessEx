import * as TypeORM from 'typeorm';
import entities from '../entities';

const database = async () => {
  try {
    await TypeORM.getConnection();
  } catch (err) {
    await TypeORM.createConnection({
      name: 'default',
      type: 'mysql',
      url: `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASS}@${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}/${process.env.MYSQL_DATABASE}`,
      database: process.env.MYSQL_DATABASE,
      entities,
      synchronize: Boolean(process.env.MYSQL_SYNC),
      logger: 'advanced-console',
      logging: 'all',
      // dropSchema: true,
      // cache: true
    });
  }
};

export default database;
