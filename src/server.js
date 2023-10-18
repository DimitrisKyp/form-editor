const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3002;
const db = require("./db.js");
const sequelize = db.sequelize;
const http = require("http");
const { form1Model } = require("./models/form_model_1.js");
const { form2Model } = require("./models/form_model_2.js");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/libraries", express.static(path.join(__dirname, "../libraries")));
app.use("/assets", express.static(path.join(__dirname, "../assets")));

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database and tables have been initialized.");
  })
  .catch((err) => {
    console.error(`Error initializing database: ${err}`);
  });

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(path.resolve(), "/favicon.ico"));
});

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname, "../public", "html"),
  };

  res.sendFile("index.html", options);
});

app.get("/form_1.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/form_1.html"));
});

app.get("/form_2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/form_2.html"));
});

app.post("/load-form-data", async (req, res) => {
  const tableName = req.body.formName;
  if (tableName === "form_1") {
    try {
      const tableData = await form1Model(sequelize).findAll({});
      res.json(tableData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (tableName === "form_2") {
    try {
      const tableData = await form2Model(sequelize).findAll({});
      res.json(tableData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.post("/submit-form-1", async (req, res) => {
  try {
    const data = req.body;
    const existingForm = await form1Model(sequelize).findOne({
      where: { Id: data.Id },
    });
    //data without the Id
    const { Id, ...updatedData } = data;

    if (existingForm) {
      // if the record exists, update its values
      await existingForm.update(updatedData);

      console.log(`Form-1 with ID ${data.Id} updated`);
      res.status(200).send(`Form-1 with ID ${data.Id} updated successfully.`);
    } else {
      const newForm = await form1Model(sequelize).create(updatedData);

      console.log(`New form-1 created`);
      res.status(200).send("Form-1 created successfully.");
    }
  } catch (err) {
    console.error(`Error saving Form: ${err}`);
    res.status(500).send("Error creating Form.");
  }
});

app.post("/submit-form-2", async (req, res) => {
  try {
    const data = req.body;
    const existingForm = await form2Model(sequelize).findOne({
      where: { Id: data.Id },
    });
    //data without the Id
    const { Id, ...updatedData } = data;

    if (existingForm) {
      // if the record exists, update its values
      await existingForm.update(updatedData);

      console.log(`Form-2 with ID ${data.Id} updated`);
      res.status(200).send(`Form-2 with ID ${data.Id} updated successfully.`);
    } else {
      const newForm = await form2Model(sequelize).create(updatedData);

      console.log(`New form-2 created`);
      res.status(200).send("Form-2 created successfully.");
    }
  } catch (err) {
    console.error(`Error saving Form: ${err}`);
    res.status(500).send("Error creating Form.");
  }
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server is running on http://localhost:${PORT}`);
});

const server = http.createServer(app).listen(3001);
