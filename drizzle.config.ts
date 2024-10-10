export default({
	schema: './db/schema.ts',
	out: 'drizzle',
    dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
      host: "localhost",
      user: "postgres",
      password: "123",
      database: "drizzle_db",
	  port: "5432",
	  ssl: false
    },
  });
