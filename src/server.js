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

app.get("/", function (req, res) {
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
  console.log(tableName);
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
      where: { Id: data.ID },
    });

    if (existingForm) {
      // If the record exists, update its values
      await existingForm.update({
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
        CPU_frequency_check: data.CPU_frequency_check,
        Interface_clamps_completeness_check:data.interface_clamps_completeness_check,
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

      console.log(`Form-1 with ID ${data.ID} updated`);
      res.status(200).send(`Form-1 with ID ${data.ID} updated successfully.`);
    } else {
      const newForm = await form1Model(sequelize).create({
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
        CPU_frequency_check: data.CPU_frequency_check,
        Interface_clamps_completeness_check:
          data.interface_clamps_completeness_check,
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
      where: { Id: data.ID },
    });

    if (existingForm) {
      // If the record exists, update its values
      await existingForm.update({
        Type_2: data.type_2,
        Mold_number_2: data.mold_number_2,
        Date_2: data.date_2,
        Machine_2: data.machine_2,
        Batch_2: data.batch_2,
        Product_accounting_code_2: data.product_accounting_code_2,
        QC_controller_2: data.qc_controller_2,
        QC_manager_2: data.qc_manager_2,
        Visual_inspection_2: data.visual_inspection_2,
        PCB_support_points_check_2: data.PCB_support_points_check_2,
        Scratch_check_2: data.scratch_check_2,
        Reflector_socket_check_2: data.reflector_socket_check_2,
        Battery_support_base_check_2: data.battery_support_base_check_2,
        Socket_base_check_2: data.socket_base_check_2,
        Plastic_tire_button_check_2: data.plastic_tire_button_check_2,
        Placement_2: data.placement_2,
        Cable_passage_hole_2: data.cable_passage_hole_2,
        Uniformity_injection_2: data.uniformity_injection_2,
        Supply_point_problems_2: data.supply_point_problems_2,
        Clasps_2: data.clasps_2,
        Screw_holders_2: data.screw_holders_2,
        Light_transmission_check_2: data.light_transmission_check_2,
        Production_date_clock_2: data.production_date_clock_2,
        Application_2: data.application_2,
        Other_2: data.other_2,
      });

      console.log(`Form-2 with ID ${data.ID} updated`);
      res.status(200).send(`Form-2 with ID ${data.ID} updated successfully.`);
    } else {
      const newForm = await form1Model(sequelize).create({
        Type_2: data.type_2,
        Mold_number_2: data.mold_number_2,
        Date_2: data.date_2,
        Machine_2: data.machine_2,
        Batch_2: data.batch_2,
        Product_accounting_code_2: data.product_accounting_code_2,
        QC_controller_2: data.qc_controller_2,
        QC_manager_2: data.qc_manager_2,
        Visual_inspection_2: data.visual_inspection_2,
        PCB_support_points_check_2: data.PCB_support_points_check_2,
        Scratch_check_2: data.scratch_check_2,
        Reflector_socket_check_2: data.reflector_socket_check_2,
        Battery_support_base_check_2: data.battery_support_base_check_2,
        Socket_base_check_2: data.socket_base_check_2,
        Plastic_tire_button_check_2: data.plastic_tire_button_check_2,
        Placement_2: data.placement_2,
        Cable_passage_hole_2: data.cable_passage_hole_2,
        Uniformity_injection_2: data.uniformity_injection_2,
        Supply_point_problems_2: data.supply_point_problems_2,
        Clasps_2: data.clasps_2,
        Screw_holders_2: data.screw_holders_2,
        Light_transmission_check_2: data.light_transmission_check_2,
        Production_date_clock_2: data.production_date_clock_2,
        Application_2: data.application_2,
        Other_2: data.other_2,
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
