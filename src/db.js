const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/mydatabase.sqlite', // Specify the name of your SQLite database file
});

module.exports = sequelize;