const { Sequelize } = require("sequelize");
const { form1Model } = require("./models/form_model_1.js");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/database.sqlite",
});

const Form1 = form1Model(sequelize);

module.exports = {
  sequelize,
  Form1,
};
