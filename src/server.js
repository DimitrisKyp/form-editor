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

    if (existingForm) {
      // If the record exists, update its values
      await existingForm.update({
        Order_num: data.Order_num,
        Production_method: data.Production_method,
        Receipt_order_date: data.Receipt_order_date,
        Execution_order_date: data.Execution_order_date,
        Software_version: data.Software_version,
        Client: data.Client,
        Quantities: data.Quantities,
        Product_description: data.Product_description,
        Item_code: data.Item_code,
        PCB_num: data.PCB_num,
        QC_controller: data.QC_controller,
        QC_manager: data.QC_manager,
        Warehouse_forward: data.Warehouse_forward,
        Board_visual_inspection: data.Board_visual_inspection,
        Consumption_check: data.Consumption_check,
        Output_check: data.Output_check,
        Indicator_check: data.Indicator_check,
        Image_check: data.Image_check,
        Button_check: data.Button_check,
        Stimulation_level_check: data.Stimulation_level_check,
        Brightness_check: data.Brightness_check,
        Led_check: data.Led_check,
        CPU_frequency_check: data.CPU_frequency_check,
        Interface_clamps_completeness_check:data.Interface_clamps_completeness_check,
        Circuit_functionality: data.Circuit_functionality,
        Sensors: data.Sensors,
        Final_product_completeness: data.Final_product_completeness,
        Instructions: data.Instructions,
        Attachments: data.Attachments,
        Stickers: data.Stickers,
        Packaging: data.Packaging,
        Serial_number_books_check: data.Serial_number_books_check,
        Ground_continuity_check: data.Ground_continuity_check,
        Dielectric_strength_check: data.Dielectric_strength_check,
        Certification_mark: data.Certification_mark,
        Schuster_check: data.Schuster_check,
        MCP_activation_pressure_check: data.MCP_activation_pressure_check,
        MCP_impact_control: data.MCP_impact_control,
        Sound_level_control: data.Sound_level_control,
      });

      console.log(`Form-1 with ID ${data.Id} updated`);
      res.status(200).send(`Form-1 with ID ${data.Id} updated successfully.`);
    } else {
      const newForm = await form1Model(sequelize).create({
        Order_num: data.Order_num,
        Production_method: data.Production_method,
        Receipt_order_date: data.Receipt_order_date,
        Execution_order_date: data.Execution_order_date,
        Software_version: data.Software_version,
        Client: data.Client,
        Quantities: data.Quantities,
        Product_description: data.Product_description,
        Item_code: data.Item_code,
        PCB_num: data.PCB_num,
        QC_controller: data.QC_controller,
        QC_manager: data.QC_manager,
        Warehouse_forward: data.Warehouse_forward,
        Board_visual_inspection: data.Board_visual_inspection,
        Consumption_check: data.Consumption_check,
        Output_check: data.Output_check,
        Indicator_check: data.Indicator_check,
        Image_check: data.Image_check,
        Button_check: data.Button_check,
        Stimulation_level_check: data.Stimulation_level_check,
        Brightness_check: data.Brightness_check,
        Led_check: data.Led_check,
        CPU_frequency_check: data.CPU_frequency_check,
        Interface_clamps_completeness_check:data.Interface_clamps_completeness_check,
        Circuit_functionality: data.Circuit_functionality,
        Sensors: data.Sensors,
        Final_product_completeness: data.Final_product_completeness,
        Instructions: data.Instructions,
        Attachments: data.Attachments,
        Stickers: data.Stickers,
        Packaging: data.Packaging,
        Serial_number_books_check: data.Serial_number_books_check,
        Ground_continuity_check: data.Ground_continuity_check,
        Dielectric_strength_check: data.Dielectric_strength_check,
        Certification_mark: data.Certification_mark,
        Schuster_check: data.Schuster_check,
        MCP_activation_pressure_check: data.MCP_activation_pressure_check,
        MCP_impact_control: data.MCP_impact_control,
        Sound_level_control: data.Sound_level_control,
      });

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
    console.log("Body", data);
    if (existingForm) {
      // If the record exists, update its values
      await existingForm.update({
        Type_2: data.Type_2,
        Mold_number_2: data.Mold_number_2,
        Date_2: data.Date_2,
        Machine_2: data.Machine_2,
        Batch_2: data.Batch_2,
        Product_accounting_code_2: data.Product_accounting_code_2,
        QC_controller_2: data.QC_controller_2,
        QC_manager_2: data.QC_manager_2,
        Visual_inspection_2: data.Visual_inspection_2,
        PCB_support_points_check_2: data.PCB_support_points_check_2,
        Scratch_check_2: data.Scratch_check_2,
        Reflector_socket_check_2: data.Reflector_socket_check_2,
        Battery_support_base_check_2: data.Battery_support_base_check_2,
        Socket_base_check_2: data.Socket_base_check_2,
        Plastic_tire_button_check_2: data.Plastic_tire_button_check_2,
        Placement_2: data.Placement_2,
        Cable_passage_hole_2: data.Cable_passage_hole_2,
        Uniformity_injection_2: data.Uniformity_injection_2,
        Supply_point_problems_2: data.Supply_point_problems_2,
        Clasps_2: data.Clasps_2,
        Screw_holders_2: data.Screw_holders_2,
        Light_transmission_check_2: data.Light_transmission_check_2,
        Production_date_clock_2: data.Production_date_clock_2,
        Application_2: data.Application_2,
        Other_2: data.Other_2,
      });

      console.log(`Form-2 with ID ${data.Id} updated`);
      res.status(200).send(`Form-2 with ID ${data.Id} updated successfully.`);
    } else {
      const newForm = await form2Model(sequelize).create({
        Type_2: data.Type_2,
        Mold_number_2: data.Mold_number_2,
        Date_2: data.Date_2,
        Machine_2: data.Machine_2,
        Batch_2: data.Batch_2,
        Product_accounting_code_2: data.Product_accounting_code_2,
        QC_controller_2: data.QC_controller_2,
        QC_manager_2: data.QC_manager_2,
        Visual_inspection_2: data.Visual_inspection_2,
        PCB_support_points_check_2: data.PCB_support_points_check_2,
        Scratch_check_2: data.Scratch_check_2,
        Reflector_socket_check_2: data.Reflector_socket_check_2,
        Battery_support_base_check_2: data.Battery_support_base_check_2,
        Socket_base_check_2: data.Socket_base_check_2,
        Plastic_tire_button_check_2: data.Plastic_tire_button_check_2,
        Placement_2: data.Placement_2,
        Cable_passage_hole_2: data.Cable_passage_hole_2,
        Uniformity_injection_2: data.Uniformity_injection_2,
        Supply_point_problems_2: data.Supply_point_problems_2,
        Clasps_2: data.Clasps_2,
        Screw_holders_2: data.Screw_holders_2,
        Light_transmission_check_2: data.Light_transmission_check_2,
        Production_date_clock_2: data.Production_date_clock_2,
        Application_2: data.Application_2,
        Other_2: data.Other_2,
      });

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
