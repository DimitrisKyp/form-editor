const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const db = require("./db.js");
const sequelize = db.sequelize;
const http = require("http");
const { form1Model } = require("./models/form_model_1.js");

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

app.get("/", function (req, res) {
  const options = {
    root: path.join(__dirname, "../public", "html"),
  };

  res.sendFile("main.html", options);
});

app.get("/form_1.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/form_1.html"));
});

app.get("/form_2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/form_2.html"));
});

app.post("/submit-form", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    const form = await form1Model(sequelize).create({
      CollectionName: data.collectionName,
      Order_num: data.order_num,
      Production_method: data.production_method,
      Receipt_order_date: data.receipt_order_date,
      Execution_order_date: data.execution_order_date,
      Software_version: data.software_version,
      Client: data.client,
      Quantities: data.quantities,
      Product_description: data.product_description,
      Item_code: data.item_code,
      PCB_num: data.PCB_num,
      QC_controller: data.QC_controller,
      QC_manager: data.QC_manager,
      Warehouse_forward: data.warehouse_forward,
      Board_visual_inspection: data.board_visual_inspection,
      Consumption_check: data.consumption_check,
      Output_check: data.output_check,
      Indicator_check: data.indicator_check,
      Image_check: data.image_check,
      Button_check: data.button_check,
      Stimulation_level_check: data.stimulation_level_check,
      Brightness_check: data.brightness_check,
      Led_check: data.led_check,
      CPU_frequency_check : data.CPU_frequency_check,
      Interface_clamps_completeness_check: data.interface_clamps_completeness_check,
      Circuit_functionality: data.circuit_functionality,
      Sensors: data.sensors,
      Final_product_completeness: data.final_product_completeness,
      Instructions: data.instructions,
      Attachments: data.attachments,
      Stickers: data.stickers,
      Packaging: data.packaging,
      Serial_number_books_check: data.serial_number_books_check,
      Ground_continuity_check: data.ground_continuity_check,
      Dielectric_strength_check: data.dielectric_strength_check,
      Certification_mark: data.certification_mark,
      Schuster_check: data.Schuster_check,
      MCP_activation_pressure_check: data.MCP_activation_pressure_check,
      MCP_impact_control: data.MCP_impact_control,
      Sound_level_control: data.sound_level_control,
    });

    console.log(`New form created`);
    res.status(200).send("Form created successfully.");
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
