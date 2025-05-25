import Database from 'better-sqlite3';
export function initializeDatabase() {
  const db = new Database('watchmaker-database.db', { verbose: console.log });
  // PRAGMAS
  db.pragma('journal_mode = WAL')
  db.pragma('synchronous = NORMAL')
  db.pragma('journal_size_limit = 67108864')
  db.pragma('mmap_size = 134217728')
  db.pragma('cache_size = 10000')
  db.pragma('busy_timeout = 5000')
  db.pragma('foreign_keys = ON')
  // SCHEMA
  const postsTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      post_title TEXT,
      post_body TEXT,

      date TEXT,
  )`)
  const imagesTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS post_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      post_id INTEGER,
      image_url TEXT,
      image_order INTEGER,
      FOREIGN KEY (post_id) REFERENCES posts(id)
  )`)
}
initializeDatabase()