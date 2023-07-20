const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/ci_demo",
  {
    logging: false, // so we don't see all the SQL queries getting made
  }
);

module.exports = db;
