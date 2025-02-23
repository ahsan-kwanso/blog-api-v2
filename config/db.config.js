require("dotenv").config();
const config = {
  development: {
    username: process.env.DB_USERNAME_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    host: process.env.DB_HOST_DEV,
    dialect: process.env.DB_DIALECT_DEV || "postgres",
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: process.env.DB_HOST_TEST,
    dialect: process.env.DB_DIALECT_TEST || "postgres",
  },
  production: {
    production_db_url: process.env.DATABASE_URL, // Heroku provides the database URL in this environment variable
    dialect: process.env.DB_DIALECT_TEST || "postgres",
  },
};

module.exports = config;
