import { promisify } from 'node:util';
import { Database } from 'sqlite3';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export class Blog {
  private dbRun: (query: string, ...args: unknown[]) => Promise<unknown>;
  private dbAll: (query: string) => Promise<BlogPost[]>;

  // Database instance is injected into the Blog class.
  constructor(private db: Database) {
    this.dbRun = promisify(this.db.run.bind(db));
    this.dbAll = promisify(this.db.all.bind(db));
  }

  initialize(): Promise<unknown> {
    const initQuery = `CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    return this.dbRun(initQuery);
  }

  createPost(
    id: string,
    title: string,
    content: string,
    createdAt: Date
  ): Promise<unknown> {
    return this.dbRun(
      'INSERT INTO posts VALUES (?, ?, ?, ?)',
      id,
      title,
      content,
      createdAt
    );
  }

  getAllPosts(): Promise<BlogPost[]> {
    return this.dbAll('SELECT * FROM posts ORDER BY created_at DESC');
  }
}
