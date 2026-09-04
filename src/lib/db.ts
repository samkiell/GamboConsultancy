import { neon } from '@neondatabase/serverless';

let isInitialized = false;

export function getSql() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error('DATABASE_URL environment variable is missing');
  }
  return neon(dbUrl);
}

export async function initDb() {
  if (isInitialized) return;

  const sql = getSql();

  try {
    // 1. Inquiries table
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        department VARCHAR(255) NOT NULL,
        service VARCHAR(255),
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Certificates table
    await sql`
      CREATE TABLE IF NOT EXISTS certificates (
        id VARCHAR(50) PRIMARY KEY,
        trainee_name VARCHAR(255) NOT NULL,
        department VARCHAR(255) NOT NULL,
        issue_date VARCHAR(50) NOT NULL,
        status VARCHAR(50) DEFAULT 'Active',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 3. Masterclass Registrations table
    await sql`
      CREATE TABLE IF NOT EXISTS masterclass_registrations (
        id VARCHAR(50) PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        occupation VARCHAR(255),
        organization VARCHAR(255),
        topic_interest VARCHAR(255),
        expectation TEXT,
        status VARCHAR(50) DEFAULT 'Confirmed',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    isInitialized = true;
  } catch (error) {
    console.error('Failed to initialize Neon database tables:', error);
    throw error;
  }
}
