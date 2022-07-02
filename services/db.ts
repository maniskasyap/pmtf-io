import mysql from 'mysql2/promise';
import config from '../config';

const query = async (sql: any, params: any) => {
  try {
    const connection = await mysql.createConnection(config.db);
    const [results] = await connection.execute(sql, params);
    // await connection.end();
    return results;
  } catch (error: any) {
    throw error;
  }
};

export { query };
