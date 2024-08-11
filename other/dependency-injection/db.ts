import { Database } from 'sqlite3';

export function createDb(dbFile: string): Database {
  return new Database(dbFile);
}
