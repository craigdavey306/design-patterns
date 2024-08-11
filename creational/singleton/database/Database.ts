interface DatabaseParams {
  url: string;
  username: string;
  password: string;
}

export class Database {
  private static dbInstance: Database;
  private url: string;
  private username: string;
  private password: string;

  private constructor(params: DatabaseParams) {
    this.url = params.url;
    this.password = params.password;
    this.username = params.username;
  }

  // traditional OOP method for ensuring a single instance
  public static get instance(): Database {
    if (!this.dbInstance) {
      this.dbInstance = new Database({
        url: 'localhost:5432',
        username: 'user',
        password: 'password',
      });
    }

    return this.dbInstance;
  }

  connect() {
    // connect to the database
  }

  close() {
    // close database connection
  }
}

// -----------

// example of creating a singleton in JavaScript
class DatabaseJS {
  private url: string;
  private username: string;
  private password: string;

  constructor(params: DatabaseParams) {
    this.url = params.url;
    this.password = params.password;
    this.username = params.username;
  }

  connect() {
    // connect to the database
  }

  close() {
    // close database connection
  }
}

// JavaScript singleton
export const db = new DatabaseJS({
  url: 'localhost:5432',
  username: 'user',
  password: 'password',
});
