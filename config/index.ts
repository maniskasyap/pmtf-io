import { env } from 'process';

export default {
  db: {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PWD,
    database: env.DB_NAME,
    // port: 3306,
  },
};
